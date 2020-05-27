import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {LogoFirst} from "../components/LogoFirst";
import {LoginButton} from "../components/LoginButton";

export default function App(props) {
    return (
        <View style={styles.container}>
            <LogoFirst/>
            <Text style={styles.text}>
                Интерактивная
                образовательная
                математическая среда
            </Text>
            <LoginButton>

            </LoginButton>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text: {
        width:'65%',
        alignItems: 'center',
        justifyContent: 'center',
        //  fontFamily: 'Oswald',
        fontSize: 26,
        color:'white',
        marginTop:135,
    },

});