import React from "react";
import { Text, View } from "react-native";
import Carousel from "pinar";
import { FontAwesome5,MaterialIcons } from "@expo/vector-icons";

const styles = {
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
  },
  text: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 18,
    marginTop: 20,
    letterSpacing: 1,
  },
};

const Swiper = () => (
  <Carousel showsControls="false">
    <View style={styles.slide1}>
    <MaterialIcons name="add-shopping-cart" size={50} color="black" />
      <Text style={styles.text}>Register your candidates to partake in a exam!</Text>
    </View>
    <View style={styles.slide2}>
    <MaterialIcons name="payment" size={50} color="black" />
      <Text style={styles.text}>Simple and SecurePay for your order online via MoMo!</Text>
    </View>
    <View style={styles.slide3}>
      <FontAwesome5 name="people-carry" size={50} color="black" />
      <Text style={styles.text}>Get your requests delivered right at your doorstep!</Text>
    </View>
  </Carousel>
);
export default Swiper;
