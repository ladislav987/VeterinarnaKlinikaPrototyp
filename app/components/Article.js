import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


function Article({ value, navigation }) {
    const navigateToArticle = () => {
        navigation.navigate("ArticleOne", { name: "ArticleOne", value: value})
    }

    return (
        <TouchableOpacity onPress={navigateToArticle} style={styles.container}>
            <Text style={styles.header}>{value}</Text>
            <Text>Kratky popis clanku</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',

        marginLeft: 100,
        marginRight: 100,
        marginBottom: 25,
        padding: 5,

        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        borderOpacity: 0.2,


        backgroundColor: 'rgba(216, 216, 216, 0.2)',
    },

    header: {
        marginBottom: 10,
        // height: 20,
        // width: 50,
        textAlign: 'center',
    }
})

export default Article