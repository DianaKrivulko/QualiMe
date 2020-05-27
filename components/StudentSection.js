import React from 'react';
import {StyleSheet, Image, Text, View, TouchableHighlight, CheckBox} from 'react-native'


export const StudentSection = (props) => {
    return (
        <TouchableHighlight
            onPress={props.onPress} style={styles.touch}>
            <View style={styles.container}>

                <Image style={styles.img} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
               {/* <CheckBox

                    checked={this.state}
                    title={'Click'}
                />*/}

                <Text style={styles.text}>
                    pidr
                </Text>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 60,
        justifyContent: 'flex-start',
        borderColor: '#F7E43C',
        borderWidth: 1,
        borderRadius: 7,
        width: '100%'
    },
    touch: {

        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
        width: 400,
        height: 120
    },
    text: {
        paddingStart: 10,
        alignItems: 'flex-start',
        color: 'white',
        fontSize: 26,
    },
    img: {
        width: 50,
        height: 47,
    }

});