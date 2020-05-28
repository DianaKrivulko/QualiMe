import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

import {Divider} from "react-native-paper";
import {TouchableOpacity} from "react-native";
import {WebView} from "react-native-webview";


export default function SubtopicHelpyStudent(props) {
    const [subtopic, setSubtopic] = useState([]);
    useEffect(() => {
        const getSubtopic = async () => {
            fetch(`http://10.0.2.2:9000/subtopic/${props.route.params.idsubtopic}`)
                .then(response => response.json())
                .then(subtopi => {
                    console.log('subtopic: ' + subtopi);
                    setSubtopic(subtopi);
                })
        }
        getSubtopic();
    }, [])
    return (
       /* //скролинг добавить тэг*/
        <View style={styles.container}>

            <Text style={styles.text}>
                {props.route.params.namesubtopic}
            </Text>

            <View style={{alignItems: 'flex-start'}}>
                {subtopic.map(element =>
                    <WebView
                        style={{color: 'white', fontSize: 20, width: 320,}}
                        key={element.idsubtopic}
                        originWhitelist={['*']}
                        source={{html:element.referense}} />
                )
                }

                {/*<WebView style={{color: 'white', fontSize: 20, width: 380,}}
                         source={{
                             uri: 'http://helpy.quali.me/theme/university/55'
                         }}
                />*/}

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
