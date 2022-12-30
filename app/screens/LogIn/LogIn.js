// expo install expo-web-browser expo-auth-session expo-random
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image, Button, Dimensions, TouchableOpacity } from 'react-native';


const windowHeight = Dimensions.get('window').height;



// import style

import LogInTiles from '../../components/LogInTiles';
import OrLine from '../../components/OrLine';

import Header2 from '../../components/Header2';

export default function App({ navigation }) {


    return (
        <View style={styles.container}>

            <Header2 value= "Prihláste sa"></Header2>

            <LogInTiles logo="apple" title="Apple ID" navigation={navigation}></LogInTiles >

            <LogInTiles logo="google" title="Google" navigation={navigation}></LogInTiles>

            <LogInTiles logo="facebook" title="Facebook" navigation={navigation}></LogInTiles>

            <OrLine></OrLine>

            <LogInTiles title="Prihlásenie s mailom a heslom"></LogInTiles>

            <View style={styles.textBellowContainer}>
                <Text style={styles.firstText}>Nemáte ešte účet ?</Text>
                <Text style={styles.secondText}>Zaregistrovať sa</Text>
            </View>

        </View>
        // <View style={styles.container}>
        //     {showUserInfo()}
        //     <Button
        //         title={accessToken ? "Get User Data" : "Login"}
        //         onPress={accessToken ? getUserData : () => { promptAsync({ useProxy: false, showInRecents: true }) }}
        //     />
        //     <StatusBar style="auto" />
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    h1: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: windowHeight * 0.05,
        marginBottom: windowHeight * 0.05,
    },

    textBellowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'center',
        marginBottom: 10

    },

    firstText: {
        marginRight: 10
    },

    secondText: {
        color: 'blue'
    },

    image: {
        width: 50,
        height: 50,
        alignItems: 'flex-end',
        marginLeft: 30,
    }
});


