import React from 'react';
import AppNavigation from "./navigation/AppNavigation";

export default function App(){
    return(
        <AppNavigation/>
    )
}
/*import {StyleSheet, Text, View} from 'react-native';
import {ChooseResButtonTesty} from "./components/ChooseResButtonTesty";
import {ChooseResButtonHelpy} from "./components/ChooseResourseButtonHelpy";
import {NavigationPanel} from "./components/NavigationPanel";
import {SchoolSection} from "./components/SchoolSection";
import {StudentSection} from "./components/StudentSection";

export default function App(props) {
    return (
        <View style={styles.container}>

            <NavigationPanel/>
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
        marginTop: 70,
        marginBottom:30,
        alignItems: 'center',
        justifyContent: 'center',
        //  fontFamily: 'Oswald',
        fontSize: 28,
        color: 'white',
    },

});*/

/*import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {Button} from "react-native-web";
import {LogoFirst} from "./components/LogoFirst";
import {LoginButton} from "./components/LoginButton";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import ChooseResourse from "./screens/ChooseResourse";

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Choose" component={ChooseResourse}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const Stack = createStackNavigator();*/


