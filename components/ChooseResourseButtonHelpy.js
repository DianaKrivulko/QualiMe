import React from 'react'
import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native'


export const ChooseResButtonHelpy = (props) => {
    return (
        <TouchableHighlight
            onPress={props.onPress} style={styles.touch}>
            <View style={styles.container}>
                <Text style={styles.textH1}>
                    TESTY
                </Text>
                <Text style={styles.textH2}>
                    Тесты по математике
                </Text>
                <Text style={styles.textH2}>
                    для школьника, студента
                </Text>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: '100%',
        padding:10,
        borderColor:'#F7E43C',
        borderWidth:1,
        borderRadius: 7,
    },
    textH1: {
        //fontFamily: 'Oswald',
        alignItems:'center',
        fontSize: 39,
        color: 'white',
    },
    textH2: {
        //fontFamily: 'Oswald',
        justifyContent: 'center',
        alignItems:'center',
        fontSize: 17,
        color: 'white',
    },
    touch: {
        alignItems: 'center',
        marginTop:50,
        height: 130,
    },

});