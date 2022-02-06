import React from "react";
import {
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SplashScreen from "./Components/SplashScreen";
import CryptoAuth from "./Components/CryptoAuth";

// screens
import HomeScreen from "./screens/HomeScreen"
import DepositScreen from "./screens/DepositScreen"
import WithdrawScreen from "./screens/WithdrawScreen"
import SettingsScreen from "./screens/SettingsScreen"
import ChartScreen from "./screens/ChartScreen"
import NewWalletScreen from "./screens/NewWalletScreen"

LogBox.ignoreAllLogs();

// const Activecolor =
function Home(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="DepositScreen"
        component={DepositScreen}
      />
      <Stack.Screen
        name="WithdrawScreen"
        component={WithdrawScreen}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <Stack.Screen
        name="ChartScreen"
        component={ChartScreen}
      />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={CryptoAuth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewWalletScreen"
          component={NewWalletScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
