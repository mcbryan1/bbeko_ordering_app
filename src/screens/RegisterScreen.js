import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { AntDesign, FontAwesome5, Entypo, Feather } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  landing_text: {
    alignSelf: "center",
    fontFamily: "ExtraBold",
    fontSize: 40,
    color: "#fff",
    letterSpacing: 1,
  },
  formContainer: {
    paddingHorizontal: 15,
  },
  textField: {
    marginBottom: 12,
    fontSize: 18,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  registerBtn: {
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 35,
    paddingVertical: 10,
    marginHorizontal: 15,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    backgroundColor: "#000",
    padding: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: "center",
    elevation: 20,
  },
});
export class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }
  handleTextChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    const { firstName, lastName, email, password } = this.state;

    this.props.registerUser(firstName, lastName, email, password);
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* *********** Top Header ********* */}

        <View style={{ flex: 4 }}>
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
          {/* *********** SignUp Heading ********* */}
          <View
            style={{
              flex: 10,
              flexDirection: "row",
              marginHorizontal: 30,
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <View style={{ flex: 4 }}>
              <TouchableOpacity onPress={() => navigation.navigate("SecondLanding")}>
                <AntDesign
                  name="left"
                  size={25}
                  color="black"
                  style={{ fontWeight: "bold" }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 6 }}>
              <Text style={{ fontFamily: "ExtraBold", fontSize: 20 }}>
                Sign up
              </Text>
            </View>
          </View>

          {/* *********** Form Container ********* */}
          <View style={styles.formContainer}>
            <ScrollView>
              <View style={styles.textField}>
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color="black"
                  style={{ marginRight: 30, elevation: 20 }}
                />
                <TextInput
                  placeholder="First Name"
                  returnKeyType="next"
                  value={this.state.firstName}
                  onChangeText={(text) =>
                    this.handleTextChange("firstName", text)
                  }
                />
              </View>
              <View style={styles.textField}>
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color="black"
                  style={{ marginRight: 30, elevation: 20 }}
                />
                <TextInput
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChangeText={(text) =>
                    this.handleTextChange("lastName", text)
                  }
                />
              </View>
              <View style={styles.textField}>
                <Entypo
                  name="email"
                  size={20}
                  color="black"
                  style={{ marginRight: 30, elevation: 20 }}
                />
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  value={this.state.email}
                  onChangeText={(text) => this.handleTextChange("email", text)}
                />
              </View>
              <View style={styles.textField}>
                <Entypo
                  name="lock"
                  size={20}
                  color="black"
                  style={{ marginRight: 30, elevation: 20 }}
                />
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(text) =>
                    this.handleTextChange("password", text)
                  }
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#000",
                  borderRadius: 50,
                  marginBottom: 20,
                }}
                onPress={this.handleSubmit}
              >
                <Text
                  style={{
                    color: "#fff",
                    paddingVertical: 15,
                    paddingHorizontal: 118,
                    fontFamily: "ExtraBold",
                    fontSize: 20,
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default RegisterScreen;
