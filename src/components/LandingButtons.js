import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";


const LandingButtons = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Landing")}
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
    )
}

export default LandingButtons

const styles = StyleSheet.create({})
