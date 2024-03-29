import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native"
import { Button } from "native-base"
import React, { useState, useEffect } from "react"
import { getInfo } from "../functions/GetInfo"
import { getToken } from "../token/Token"
import { formatNumber } from "../functions/numberFormat"

export default function Buy({ navigation }) {
  const handleBuy = () => {
    fetch("http://192.168.191.118:8000/buy", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: value,
        cryptocurrency: cryptoSymbol,
        token: getToken(),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setState(true)
        if (json.response == "Not enough money") {
          setBuyResult("Not enough money to buy!")
          setCss("flex")
          setColor("red")
        } else if (json.response == "Cryptocurrency added") {
          setBuyResult("Cryptocurrency sucesfully added!")
          setCss("flex")
          setColor("#0c6cf5")
        } else if (json.response == "No permission") {
          setBuyResult("No permission!")
          setCss("flex")
          setColor("red")
        }
      })
  }

  const crypto = navigation.getParam("crypto")
  const availableBuy = navigation.getParam("availableBuy")

  const [cryptoSymbol, setCryptoSymbol] = useState("")
  const [eurBalance, setEurBalance] = useState(0)
  const [value, setValue] = useState(0)
  const [state, setState] = useState(false)
  const [buyResult, setBuyResult] = useState("")
  const [css, setCss] = useState("none")
  const [color, setColor] = useState("red")

  useEffect(() => {
    getInfo().then((json) => {
      if (crypto == 1) {
        setCryptoSymbol("BTC")
      } else if (crypto == 2) {
        setCryptoSymbol("ETH")
      } else if (crypto == 3) {
        setCryptoSymbol("LTC")
      } else if (crypto == 4) {
        setCryptoSymbol("ADA")
      } else if (crypto == 5) {
        setCryptoSymbol("DOT")
      }
      setEurBalance(json?.Wallet?.eur_balance)
    })
  }, [])

  return (
    <View style={styles.containerMain}>
      <Text style={styles.title}>Buy</Text>
      <Text style={styles.subTitle}>Purchase {cryptoSymbol} with cash</Text>
      <Text style={styles.subTitle}>
        {availableBuy.toFixed(4)} {cryptoSymbol} available to buy
      </Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={cryptoSymbol + " " + 0}
          placeholderTextColor="#0c6cf5"
          numeric
          keyboardType={"numeric"}
          onChangeText={(text) => setValue(text)}
        />
      </View>
      <View style={styles.containerCryptoDetail}>
        <Text style={styles.cryptoDetailText}>Wallet</Text>
        <View>
          <Text
            style={{
              marginLeft: 150,
              margin: 8,
              color: "#35424a",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            € {formatNumber(eurBalance)}
          </Text>
        </View>
      </View>
      <View>
        <Button
          block
          light
          style={styles.cryptoDetailButton}
          onPress={() => handleBuy()}
        >
          <Text style={styles.cryptoDetailButton}>Buy</Text>
        </Button>
      </View>
      <Modal
        visible={state}
        animationType="slide"
        presentationStyle="overFullScreen"
        transparent={true}
        onRequestClose={() => {
          setState(false)
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#000000aa",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: color,
              marginTop: "133%",
              width: "100%",
              height: "30%",
              borderRadius: 10,
            }}
          >
            <TouchableOpacity onPress={() => setState(false)}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  alignSelf: "flex-end",
                  marginRight: 20,
                  marginTop: 20,
                }}
              >
                x
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                display: css,
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
                marginTop: "13%",
              }}
            >
              {buyResult}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    color: "#0c6cf5",
  },
  containerMain: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  title: {
    marginTop: "25%",
    alignSelf: "center",
    color: "#35424a",
    fontWeight: "bold",
    fontSize: 19,
  },
  subTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#606060",
    fontSize: 14,
  },
  textInputStyle: {
    borderColor: "black",
    marginTop: "30%",
    fontSize: 43,
    color: "#0c6cf5",
  },
  containerCryptoDetail: {
    marginBottom: "20%",
    flexDirection: "row",
    width: "75%",
    height: "6%",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#d6d6d6",
  },
  cryptoDetailText: {
    marginLeft: 15,
    color: "#35424a",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 17,
  },
  cryptoDetailButton: {
    backgroundColor: "#d6d6d6",
    color: "#35424a",
    fontWeight: "bold",
    width: 290,
    textAlign: "center",
    margin: 40,
    fontSize: 17,
    borderRadius: 7,
    alignSelf: "center",
  },
})
