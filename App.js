import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./src/navigation/StackNavigation";
import { Provider } from "react-redux";
import { store, persister } from "./src/Redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});
