import React, { useState, useEffect } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { getCoin } from "../functions/GetCoin"
import { formatNumber } from "../functions/numberFormat"
import cryptoTemplate from "./CryptoTemplate"

const Coin = ({ navigation }) => {
  const [response, setResponse] = useState(cryptoTemplate)
  useEffect(() => {
    getCoin().then((json) => {
      setResponse(json)
    })
  }, [])

  return (
    <View style={(styles.mainContainer, { marginTop: 10 })}>
      <TouchableOpacity onPress={() => navigation.navigate("CryptoDetail", { crypto: 1})}>
        <View style={styles.container}>
          <Image
            style={styles.btcLogo}
            source={require("../images/btc-logo.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {response.api_response.BTC.name}
            </Text>
            <Text style={styles.textSymbol}>
              {response.api_response.BTC.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            €{" "}
            {formatNumber(
              Number(parseFloat(response.api_response.BTC.quote.EUR.price))
            )}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CryptoDetail", { crypto: 2})}>
        <View style={styles.container}>
          <Image
            style={styles.etcLogo}
            source={require("../images/eth-logo.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {response.api_response.ETH.name}
            </Text>
            <Text style={styles.textSymbol}>
              {response.api_response.ETH.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            €{" "}
            {formatNumber(
              Number(parseFloat(response.api_response.ETH.quote.EUR.price))
            )}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CryptoDetail", { crypto: 3})}>
        <View style={styles.container}>
          <Image
            style={styles.etcLogo}
            source={require("../images/ltc-logo.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {response.api_response.LTC.name}
            </Text>
            <Text style={styles.textSymbol}>
              {response.api_response.LTC.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            €{" "}
            {formatNumber(
              Number(parseFloat(response.api_response.LTC.quote.EUR.price))
            )}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CryptoDetail", { crypto: 4})}>
        <View style={styles.container}>
          <Image
            style={styles.etcLogo}
            source={require("../images/cardano-logo.webp")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {response.api_response.ADA.name}
            </Text>
            <Text style={styles.textSymbol}>
              {response.api_response.ADA.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            €{" "}
            {formatNumber(
              Number(parseFloat(response.api_response.ADA.quote.EUR.price))
            )}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CryptoDetail", { crypto: 5})}>
        <View style={styles.container}>
          <Image
            style={styles.etcLogo}
            source={require("../images/polka-logo.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              {response.api_response.DOT.name}
            </Text>
            <Text style={styles.textSymbol}>
              {response.api_response.DOT.symbol}
            </Text>
          </View>
          <Text style={styles.price}>
            €{" "}
            {formatNumber(
              Number(parseFloat(response.api_response.DOT.quote.EUR.price))
            )}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Coin

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    marginBottom: 30,
  },

  btcLogo: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  etcLogo: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },

  textContainer: {
    marginLeft: 17,
    marginRight: 200,
  },

  price: {
    marginLeft: 250,
    color: "#35424a",
    fontWeight: "bold",
    position: "absolute",
    fontSize: 16,
  },

  textTitle: {
    color: "#0c6cf5",
    fontWeight: "bold",
    fontSize: 18,
  },

  textSymbol: {
    color: "#3d8af7",
    fontWeight: "bold",
    fontSize: 18,
  },
})
