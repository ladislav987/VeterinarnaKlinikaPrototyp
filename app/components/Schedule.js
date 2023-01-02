import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Schedule({ cosi, navigation }) {
    const navigateToOrdering = () => {
        navigation.navigate("Ordering", { name: "Ordering" })
    }
    return (
        <TouchableOpacity style={styles.container} onPress={navigateToOrdering}>
            <View style={styles.timeContainer}>
                <Text style={styles.textInTime}>8:00</Text>
                <View style={styles.verticleLine}></View>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.detailContainer2}>
                    <View style={styles.verticleLineTwo}></View>
                    <Text style={styles.textInDetail}>Ziadna udalost</Text>
                </View>
            </View>
            <Text>{cosi}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        flexDirection: 'row',
        alignContent: 'flex-end',
        // zIndex: 1
        // marginBottom: 20,
        // marginTop: 20

        // flex: 1,
        // flexDirection:'row',
        // alignSelf: 'flex-start',
        // // maxHeight:80,
        // backgroundColor:'green',
        marginBottom: 30,
    },
    timeContainer: {
        // flex: 1,
        // backgroundColor:'green',
        flexDirection:'column',
        maxHeight: '100%',
        alignItems: 'center',
        marginRight: 30,
    },
    detailContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        // alignSelf: 'flex-end'
        // backgroundColor: "red"
    },
    verticleLine: {
        // flex: 1,
        height: 50,
        width: 1,
        backgroundColor: '#909090',
    },
    verticleLineTwo: {
        // flex: 1,
        height: 50,
        width: 1,
        backgroundColor: '#909090',
        marginRight: 20
    },
    textInDetail: {
       alignSelf: 'center',
    },
    detailContainer: {
        alignSelf:'flex-end'
    },
    textInTime: {
        marginBottom: 10
    }
})

export default Schedule