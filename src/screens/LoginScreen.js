import React, {Component} from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import { AntDesign, FontAwesome5, Entypo, Feather } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { connect } from "react-redux";
import { loginForm } from "../Redux/Actions/authActions";
import red from '../images/red.png'
import blue from '../images/blue.png'
import cyan from '../images/cyan.png'

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
    fontSize: 18,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
});
class LoginScreen extends Component {
class LoginScreen extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = () => {
    this.props.loginForm(this.state.email, this.state.password);
  };

  render() {
    const { navigation, auth } = this.props;

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* *********** Top Header ********* */}

        <View style={{ flex: 4 }}>
        <Image source={red} style={{position: 'absolute', width: 360, height: 80,}}/>
        <Image source={blue} style={{position: 'absolute', width: 360, height: 80, top: 40,}}/>
        <Image source={cyan} style={{position: 'absolute', width: 370, height: 110, bottom: 10,}}/>
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
              <TouchableOpacity
                onPress={() => navigation.navigate("Second Landing")}
              >
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
                Login{" "}
              </Text>
            </View>
          </View>
          {auth.error.register && (
            <Text style={{ color: "red", alignSelf: "center" }}>
              {auth.error.register}
            </Text>
          )}
          {/* *********** Form Container ********* */}
          <View style={styles.formContainer}>
            <ScrollView>
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
                  onChangeText={(text) => this.handleUpdateState("email", text)}
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
                    this.handleUpdateState("password", text)
                  }
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#000",
                  borderRadius: 50,
                  marginBottom: 20,
                  marginTop: 70,
                }}
                onPress={this.handleOnSubmit}
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
                  Login
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProp = (state) => {
  return { auth: state };
};
export default connect(mapStateToProp, { loginForm })(LoginScreen);
export default LoginScreen;
