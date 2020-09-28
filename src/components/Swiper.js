import React from "react";
import { Text, View } from "react-native";
import Carousel from "pinar";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";


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
    // marginTop: 20,
    letterSpacing: 1,
    fontFamily: 'Medium'
  },
  icon:{
    marginBottom: 30
  }
};


const Swiper = () => (
  
  <Carousel showsControls="false">
    <View style={styles.slide1}>
      <MaterialIcons name="add-shopping-cart" size={50} color="black"  style={styles.icon}/>
      <Text style={styles.text}>
        Register your candidates to 
      </Text>
      <Text style={styles.text}>partake in the exams!</Text>
    </View>
    <View style={styles.slide2}>
      <MaterialIcons name="payment" size={50} color="black" style={styles.icon}/>
      <Text style={styles.text}>
        Simple and SecurePay for your 
      </Text>
      <Text style={styles.text}>order online via MoMo!</Text>
    </View>
    <View style={styles.slide3}>
      <FontAwesome5 name="people-carry" size={50} color="black" style={styles.icon}/>
      <Text style={styles.text}>
        Get your requests delivered 
      </Text>
      <Text style={styles.text}>right at your doorstep!</Text>
    </View>
  </Carousel>
  
);
export default Swiper;
