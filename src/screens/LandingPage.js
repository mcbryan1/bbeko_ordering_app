import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Landing Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SecondLanding")} style={{backgroundColor: "skyblue"}}>
          <Text style={{padding: 5}}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
