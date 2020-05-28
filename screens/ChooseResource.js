import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChooseResButtonTesty} from "../components/ChooseResButtonTesty";
import {ChooseResButtonHelpy} from "../components/ChooseResourseButtonHelpy";
import {Divider} from "react-native-paper";

export default function ChooseResource(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Выберите ресурс
            </Text>
            <ChooseResButtonTesty
                onPress={() => {
                    props.navigation.navigate("Helpy")
                }}/>
            <ChooseResButtonHelpy
                onPress={() => {
                    props.navigation.navigate("Testy")
                }}/>


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
        marginTop:60,
        alignItems: 'center',
        justifyContent: 'center',
        //  fontFamily: 'Oswald',
        fontSize: 34,
        color:'white',
    },

});