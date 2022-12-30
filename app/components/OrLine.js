import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function OrLine() {
    return (
        <Text style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>Alebo</Text>
            <View style={styles.line}></View>
        </Text>
    )
}

const styles = StyleSheet.create({
    line: {
        width: 110,
        height: 0,

        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        borderOpacity: 0.2,



    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignSelf: 'center',
        maxHeight: 20,
        maxwidth: 70,
        marginBottom: 30
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: "red"
    }
})

export default OrLine