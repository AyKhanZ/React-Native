import React from "react";
import { BackHandler, Pressable, View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import LogInPage from "../screens/LogInPage";
import SignUpPage from "../screens/SignUpPage";
import Market from "../screens/Market";
import BottomTabs from "./bottom";


const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
      <RootStack.Navigator>
        <RootStack.Screen
          // options={{
          //   headerShown: false,
          // }}
          name="Login"
          component={LogInPage}
        />
        <RootStack.Screen
          // options={{
          //   headerShown: false,
          // }}
          name="SignUp"
          component={SignUpPage}
        />
        <RootStack.Screen
          // options={{
          //   headerShown: false,
          // }}
          name="Market"
          component={Market}
        />
        <RootStack.Screen
          options={{
            // headerShown: true,
            // headerTransparent: true,
            // headerTitle: "",
            header: () => {
              return <View></View>;
            },
          }}
          name="Tabs"
          component={BottomTabs}
        />
      </RootStack.Navigator>
  );
};

export default RootNavigation;
