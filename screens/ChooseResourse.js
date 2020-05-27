import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChooseResButtonTesty} from "../components/ChooseResButtonTesty";
import {ChooseResButtonHelpy} from "../components/ChooseResourseButtonHelpy";

export default function App(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Выберите ресурс
            </Text>
            <ChooseResButtonTesty/>
            <ChooseResButtonHelpy/>


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
        marginTop:100,
        alignItems: 'center',
        justifyContent: 'center',
        //  fontFamily: 'Oswald',
        fontSize: 28,
        color:'white',
    },

});