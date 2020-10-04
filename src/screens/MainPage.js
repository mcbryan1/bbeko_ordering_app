import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { logout } from "../Redux/Actions/authActions";

class MainPage extends Component {
  render() {
    const { loading, logout } = this.props;

    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" color="black" />}
        <Text> textInComponent </Text>
        <TouchableOpacity onPress={logout} style={{ backgroundColor: "cyan" }}>
          <Text style={{ padding: 20 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProp = (state) => {
  return { auth: state };
};
export default connect(mapStateToProp, { logout })(MainPage);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
