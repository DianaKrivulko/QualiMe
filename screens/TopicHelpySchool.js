import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

import {Divider} from "react-native-paper";
import {TouchableOpacity} from "react-native";


export default function TopicHelpySchool(props) {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        const getSubjects = async () => {
            fetch('http://10.0.2.2:9000/subjects')
                .then(response => response.json())
                .then(subj => {
                    console.log('subjects: ' + subj);
                    setSubjects(subj);
                })
        }
        getSubjects();
    }, [])
    return (
        //скролинг добавить тэг
        <View style={styles.container}>
            <Text style={styles.text}>
                Выберите тему
            </Text>
            <View style={{alignItems: 'flex-start'}}>
{/*
                {console.log('subjects: ' + subjects[0])}*/}
                {subjects.map(element =>
                <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("TasksTestyStudent",
                                {
                                    idsubject:element.idsubject,
                                    nameSubject:element.nameSubject,
                                })
                        }}>
                    <Text style={styles.text1} key={element.idsubject}>
                        {element.nameSubject}
                    </Text>
                    <Divider style={{height: 1, width: 350, backgroundColor: '#F7E43C'}}/>
                </TouchableOpacity>)}
            </View>
        </View>

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    text: {
        marginTop: 60,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        //  fontFamily: 'Oswald',
        fontSize: 28,
        color: 'white',
    },
    text1: {
        //  fontFamily: 'Oswald',
        alignItems: 'flex-start',
        fontSize: 20,
        color: '#F7E43C',
        marginTop: 20,
        marginLeft: 5,
    },
    /* img: {
         flex: 1,
         width:'100%',
         height:'100%',
         resizeMode:'cover',
         justifyContent: "center",
     }
 */
});