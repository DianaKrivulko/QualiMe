import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import ChooseResource from "./screens/ChooseResource";
import TestyHelpPerson from "./screens/TestyHelpPerson";
import HelpyChoosePerson from "./screens/HelpyChoosePerson";
import TopicHelpySchool from "./screens/TopicHelpySchool";
import TopicTestyStudent from "./screens/TopicTestyStudent";
import SubtopicHelpyStudent from "./screens/SubtopicHelpyStudent";
import SubTopicHelpyStudentDisplay from "./screens/SubTopicHelpyStudentDisplay";
import TasksTestyStudent from "./screens/TasksTestyStudent";
import TaskTestyStudentDisplay from "./screens/TaskTestyStudentDisplay";

const Stack = createStackNavigator();
function App() {

            return (
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen}/>
                        <Stack.Screen name="Choose" component={ChooseResource}/>
                        <Stack.Screen name="Testy" component={TestyHelpPerson}/>
                        <Stack.Screen name="Helpy" component={HelpyChoosePerson}/>
                        <Stack.Screen name="TopicHelpy" component={TopicHelpySchool}/>
                        <Stack.Screen name="TopicTestyStudent" component={TopicTestyStudent}/>
                        <Stack.Screen name="SubtopicHelpyStudent" component={SubtopicHelpyStudent}/>
                        <Stack.Screen name="SubtopicHelpyStudentDisplay" component={SubTopicHelpyStudentDisplay}/>
                        <Stack.Screen name="TasksTestyStudent" component={TasksTestyStudent}/>
                        <Stack.Screen name="TaskTestyStudentDisplay" component={TaskTestyStudentDisplay}/>
                    </Stack.Navigator>
                </NavigationContainer>

            );
    }
export default App;

/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
