import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SecondLanding from "../screens/SecondLanding";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MainPage from "../screens/MainPage";
import { connect } from "react-redux";

const Stack = createStackNavigator();

function StackNavigation({ auth }) {
  return (
    <NavigationContainer>
      {auth.login ? (
        <Stack.Navigator initialRouteName={SecondLanding}>
          <Stack.Screen
            name="main"
            component={MainPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Second Landing"
            component={SecondLanding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
const mapStateToProp = (state) => {
  return { auth: state };
};
export default connect(mapStateToProp)(StackNavigation);
