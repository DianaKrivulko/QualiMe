import React from 'react';
import {StyleSheet, Image,Text,View} from 'react-native';
import {logo} from '../assets/img'
//{{uri: 'https://quali.me/assets/img/q.png'}}
export const LogoFirst = () => {
    return (
        <View  style={styles.container}>
            <Image style={styles.img} source={logo}>

            </Image>
            <Text style={styles.text}>
                QUALI ME
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        paddingTop:60,
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