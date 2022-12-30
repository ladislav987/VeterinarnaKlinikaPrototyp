import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import Header3 from '../components/Header3';
import Article from '../components/Article';
import NavBar from '../components/NavBar';

const windowHeight = Dimensions.get('window').height;

function Blog({ navigation }) {

    return (
        <View style={styles.container}>
            <Header3 value={"Blog"}></Header3>

            <Article value={"Clanok 1"} navigation={navigation}></Article>
            <Article value={"Clanok 2"} navigation={navigation}></Article>
            <Article value={"Clanok 3"} navigation={navigation}></Article>
            <Article value={"Clanok 4"} navigation={navigation}></Article>

            <NavBar style={styles.somarina}></NavBar>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    h1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: "red"
        alignSelf: 'center',
        marginTop: windowHeight * 0.05,
        marginBottom: windowHeight * 0.05,
        // alignItems: 'center',
    },
    allign: {
        // flex: 1,
        // flexDirection: 'row',
        // backgroundColor: "red",
        // minWidth: 150,
        // alignItems: 'center',
    },


    image: {
        width: 50,
        height: 50,
        // marginLeft: 30,
    },
    somarina: {
        // flex: 1,
        // alignItems: 'flex-end',
        // backgroundColor: 'green',
        alignItems: 'flex-end',
        // flexDirection: 'row-reverse',
        // justifyContent: 'flex-end',
        // alignSelf: 'flex-end',
    }
});

export default Blog