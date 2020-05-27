import React from 'react';
import {StyleSheet, Image,Text,View} from 'react-native';
//{{uri: 'https://quali.me/assets/img/q.png'}}
export const LogoFirst = () => {
    return (
        <View  style={styles.container}>
            <Image style={styles.img} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}>

            </Image>
            <Text style={styles.text}>
                QUALI ME
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        paddingTop:90,
        alignItems:'center',
        flexDirection:'row',
        marginTop:5,
    },
    text: {
       // fontFamily: 'Overpass',
        fontSize: 53,
        color:'white',
    },
    img:{
        width:50,
        height:47,
    }
})