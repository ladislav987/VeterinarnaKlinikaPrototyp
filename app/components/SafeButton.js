import { fetchUserInfoAsync } from 'expo-auth-session'
import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native'

function SafeButton() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                Ulozit
            </Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignSelf: 'flex-end',
        // maxWidth: '80%',
        // backgroundColor: 'red',
        alignSelf: 'center',
        backgroundColor: 'rgba(42, 140, 245, 1)',

        paddingLeft: 65,
        paddingRight: 65,
        paddingBottom: 5,
        paddingTop: 5,

        borderRadius: 12
    },
    text: {
        color: 'white',
        fontSize: 25,

    }
})

export default SafeButton