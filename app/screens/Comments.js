import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Header3 from '../components/Header3'
import NavBar from '../components/NavBar'

import { FontAwesome5 } from '@expo/vector-icons';

function Comments({navigation}) {
    return (
        <View style={styles.container}>
            <Header3 value={"Komentáre"} navigation={navigation}></Header3>


            <View style={styles.container2}>
                <TouchableOpacity style={styles.comment}>
                    <FontAwesome5 name="comment-medical" size={32} color="rgba(42, 140, 245, 1)" />
                </TouchableOpacity>
                <NavBar navigation={navigation} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        // flexDirection: 'row',
        // backgroundColor: 'red',
        // alignItems: 'center',
        justifyContent: 'flex-end'
    },
    comment: {
        // maxWidth: 40,
        // alignItems: 'flex-end',
        padding: 8,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "rgba(42, 140, 245, 1)"

        // alignSelf: 'flex-end',
        // justifyContent: 'flex-end',
    },

})

export default Comments