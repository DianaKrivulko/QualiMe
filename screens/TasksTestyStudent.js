import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

import {Divider} from "react-native-paper";
import {TouchableOpacity} from "react-native";


export default function TasksTestyStudent(props) {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const getTasks = async () => {
            fetch(`http://10.0.2.2:9000/tasks/${props.route.params.idsubject}`)

                .then(response => response.json())
                .then(tasks => {
                    console.log('tasks: ' + tasks);
                    setTasks(tasks);
                })
        }
        getTasks();
    }, [])
    return (
        /*  //скролинг добавить тэг*/
        <View style={styles.container}>

            <Text style={styles.text}>
                {props.route.params.nameSubject}
            </Text>

            <View style={{alignItems: 'flex-start',marginLeft: 20}}>
                {tasks.map(element =>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("TaskTestyStudentDisplay",
                                {
                                    idtask: element.idtask,
                                    nameTask: element.nameTask,
                                })
                        }}>
                        <Text style={styles.text1} key={element.idtask}>
                            {element.nameTask}
                        </Text>

                        <Divider style={{height: 1, width: 350, backgroundColor: '#F7E43C'}}/>
                    </TouchableOpacity>
                )}
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