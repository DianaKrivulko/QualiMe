import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationPanel} from "../components/NavigationPanel";
import {SchoolSection} from "../components/SchoolSection";
import {StudentSection} from "../components/StudentSection";

export default function App(props) {
    return (
        <View style={styles.container}>

            <NavigationPanel>
            </NavigationPanel>
            <Text style={styles.text}>
                Кто вы?
            </Text>
            <SchoolSection/>
            <StudentSection/>
            <StudentSection/>
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
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        //  fontFamily: 'Oswald',
        fontSize: 28,
        color: 'white',
    },

});
