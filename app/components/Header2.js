import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;



function Header2({ value }) {
    return (
        <View style={styles.container}>
            <Ionicons style={{ opacity: 0 }} name="arrow-back-circle-outline" size={35} color="black" />
            <Text style={styles.text}>{value}</Text>
            <Image style={styles.image} source={require("../assets/Logo_small_rotate.png")}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        marginTop: windowHeight * 0.04,
        marginBottom: windowHeight * 0.05,

        paddingLeft: 15,
        paddingRight: 15,

        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',

    },
    image: {
        width: 50,
        height: 50,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default Header2