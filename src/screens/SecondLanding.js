import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import red_blob from "../images/red_blob.png";
import cyan_blob from "../images/cyan_blob.png";
import Swiper from "../components/Swiper";
import { AppLoading } from "expo";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";

const LandingPage = ({ navigation }) => {
  let [fontsLoaded, error] = useFonts({
    Regular: Raleway_400Regular,
    ExtraBold: Raleway_800ExtraBold,
    Medium: Raleway_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        <View style={{ flex: 4 }}>
          <Image
            source={red_blob}
            style={{
              position: "absolute",
              width: 300,
              height: 300,
              bottom: 50,
              right: 170,
            }}
          />
          <Image
            source={cyan_blob}
            style={{
              position: "absolute",
              width: 350,
              height: 350,
              top: 50,
              left: 120,
            }}
          />
          <View style={{ marginVertical: 80 }}>
            <Text style={styles.landing_text}>BBEKO</Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 80,
                marginVertical: 20,
              }}
            >
              <Text style={{ color: "#fff", fontFamily: "Medium" }}>
                Register
              </Text>
              <Text style={{ color: "#fff", fontFamily: "Medium" }}>Pay</Text>
              <Text style={{ color: "#fff", fontFamily: "Medium" }}>
                Delivered
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 6,
            backgroundColor: "#fff",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}
        >
          <View style={{ flex: 6 }}>
            <Swiper />
          </View>
          <View
            style={{ flex: 4, alignItems: "center", backgroundColor: "#fff" }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("register")}
              style={{
                backgroundColor: "#000",
                borderRadius: 50,
                elevation: 20,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  paddingVertical: 20,
                  paddingHorizontal: 118,
                  fontFamily: "ExtraBold"
                }}
              >
                SIGN UP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              style={{
                backgroundColor: "#fff",
                borderRadius: 50,
                elevation: 20,
                borderColor: "#000",
                borderWidth: 2,
              }}
            >
              <Text
                style={{
                  color: "#000",
                  paddingVertical: 18,
                  paddingHorizontal: 120,
                  fontFamily: "ExtraBold"

                }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F62FE",
  },
  landing_text: {
    alignSelf: "center",
    fontFamily: "ExtraBold",
    fontSize: 40,
    color: "#fff",
    letterSpacing: 1,
  },
});
