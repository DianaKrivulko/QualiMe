import React from 'react';
import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native'


export const NavigationPanel = (props) => {
    return (
        <TouchableHighlight
            onPress={props.onPress} style={styles.touch}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Ресурсы
                </Text>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingStart:60,
        justifyContent: 'center',
        borderColor:'#F7E43C',
        borderWidth:1,
        borderRadius: 7,
        width:'100%'
    },
    touch: {
        alignItems: 'center',
        marginTop: 30,
        width:415,
        height:60
    },
    text:{
        alignItems:'flex-start',
      color:'white',
      fontSize:26,
    },

});