import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Day() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.nieco}>
                <Text style={styles.text} >Pon</Text>
                <Text style={styles.text} >26</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,

        // backgroundColor: 'red'
        // backgroundColor: 'green',
        // maxHeight: 100,
        // marginBottom: 1500


    },

    nieco: {
        // flex: 1,
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(0, 115, 204, 1)',
        marginRight: 10,
        // height: '100%',
        // minHeight: '100%',
        borderRadius: 10,
        // marginBottom: 90,
        padding: 15
        // paddingBottom: 60,
        // color: 'white',
    },
    text:{
        color: 'white',
    }
})

export default Day