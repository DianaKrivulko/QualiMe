import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

import {Divider} from "react-native-paper";
import {TouchableOpacity} from "react-native";
import {WebView} from "react-native-webview";


export default function TaskTestyStudentDisplay(props) {


    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const getQuestions = async () => {
            fetch(`http://10.0.2.2:9000/questions/${props.route.params.idtask}`)
                .then(response => response.json())
                .then(questions => {
                    console.log('questions: ' + questions);
                    setQuestions(questions);
                }).then(()=>{
                    console.log(questions.length);
                    for(let i=0;i<questions.length;i++){
                        const [options,questions, setOptions] = useState([]);
                        useEffect(() => {
                            const getOptions = async () => {
                fetch(`http://10.0.2.2:9000/listoptions/${questions[i].idquestion}`)
                    .then(response => response.json())
                    .then(options => {
                        console.log('options: ' + options);
                        questions[i].options=options;
                    })
                        }
                        getOptions();
                    }, [])
                        }

            })

        }
        getQuestions();
    }, []);




    return (
        /* //скролинг добавить тэг*/
        <View style={styles.container}>

            <Text style={styles.text}>
                {props.route.params.nameTask}
            </Text>
            {questions.map(element =>
                <WebView
                    style={{width: 380,}}
                    key={element.idquestion}
                    originWhitelist={['*']}
                    source={{html: element.namequestion}}/>

            )
                /*options.map(el=>
                <WebView
                key={el.idoptions}
                originWhitelist={['*']}
                sourse={{html: el.nameoptions}}
                />
                )*/
            }

            <View style={{alignItems: 'flex-start'}}>



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
