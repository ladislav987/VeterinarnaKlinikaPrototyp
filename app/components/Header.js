import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;


function Header({ value }) {
    return (
        <View style={styles.container}>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

        marginTop: windowHeight * 0.05,

        // borderBottomColor: "black",
        // borderBottomOpacity: 0.5,
        // borderBottomWidth: 1,

    },
    image: {
        width: 50,
        height: 50,
    }
})

export default Header