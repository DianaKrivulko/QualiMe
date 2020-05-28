import React from 'react'
import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native'


export const LoginButton = (props) => {
    return (
        <TouchableHighlight
            onPress={props.onPress} style={styles.touch}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Начать обучение
                </Text>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7E43C',
        width: 260,
        height: 80,
        borderRadius: 7,
    },
    text: {
        //fontFamily: 'Oswald',
        fontSize: 25,
        color: 'black',
    },
    touch: {
        marginTop:150,
        height: 80,
    },

});