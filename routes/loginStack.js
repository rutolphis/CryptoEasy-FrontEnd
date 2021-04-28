import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Login from "../screens/Login/Login"
import Register from "../screens/Register"
import Market from "../screens/Market/Market"
import Wallet from "../screens/Wallet/Wallet"
import CryptoDetail from "../screens/CryptoDetail/CryptoDetail"
import Buy from "../screens/Buy"
import Sell from "../screens/Sell"
import Deposit from "../screens/Deposit"

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
  Market: {
    screen: Market,
    navigationOptions: {
      headerShown: false,
    },
  },
  Wallet: {
    screen: Wallet,
    navigationOptions: {
      headerShown: false,
    },
  },
  CryptoDetail: {
    screen: CryptoDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
  Buy: {
    screen: Buy,
    navigationOptions: {
      headerShown: false,
    },
  },
<<<<<<< HEAD
  Register: {
    screen: Register,
=======
  Sell: {
    screen: Sell,
    navigationOptions: {
      headerShown: false,
    },
  },
  Deposit: {
    screen: Deposit,
>>>>>>> 52e8dcba27e0b360d8e3448f608b8c1518dd99ef
    navigationOptions: {
      headerShown: false,
    },
  },
}

const loginStack = createStackNavigator(screens)

export default createAppContainer(loginStack)
