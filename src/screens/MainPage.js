import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

 class MainPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}


export default MainPage
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#fff'
    }
})
