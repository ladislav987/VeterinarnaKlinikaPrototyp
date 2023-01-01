import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Day() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.nieco}>
                <Text>Pon</Text>
                <Text>26</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor: 'blue',
        flex: 1,
        marginRight: 10,
        minHeight: 50,
    },

    nieco:{
        alignSelf: 'flex-start',
        // backgroundColor: 'blue'
    }
})

export default Day