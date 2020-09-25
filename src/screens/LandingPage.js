import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import red_blob from "../images/red_blob.png";
import cyan_blob from "../images/cyan_blob.png";
import blue_blob from "../images/blue_blob.png";

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={red_blob}
          style={{
            width: 250,
            height: 250,
            position: "absolute",
            top: 150,
            left: 210,
          }}
        />
        <Image
          source={blue_blob}
          style={{
            width: 150,
            height: 150,
            position: "absolute",
            top: 70,
            left: 0,
          }}
        />
        <Image
          source={cyan_blob}
          style={{
            width: 50,
            height: 50,
            position: "absolute",
            top: 500,
            left: 100,
          }}
        />
      </View>
      <View style={styles.land_divider}>
        <View style={styles.land_a}></View>
        <View style={styles.land_b}>
          <Text style={styles.landing_text}>BBEKO</Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 80,
            }}
          >
            <Text style={{ color: "#FF0066" }}>Register</Text>
            <Text style={{ color: "#0F62FE" }}>Pay</Text>
            <Text style={{ color: "#08BDBA" }}>Delivered</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 170,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("SecondLanding")}
              style={{
                backgroundColor: "#000",
                borderRadius: 50,
                elevation: 20,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  paddingVertical: 20,
                  paddingHorizontal: 100,
                }}
              >
                Get Started
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
    backgroundColor: "#fff",
  },
  land_divider: {
    flex: 10,
  },
  land_a: {
    flex: 5,
  },
  land_b: {
    flex: 5,
  },
  landing_text: {
    alignSelf: "center",
  },
});
