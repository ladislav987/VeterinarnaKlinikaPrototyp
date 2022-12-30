import React from 'react'

// import icons
import { AntDesign, Entypo } from '@expo/vector-icons';



import { Button, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';


import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
WebBrowser.maybeCompleteAuthSession();

import Home from '../screens/Home/Home';

function LogInTiles({ logo, title, navigation }) {

    const [accessToken, setAccessToken] = React.useState();
    const [userInfo, setUserInfo] = React.useState();
    const [message, setMessage] = React.useState();

    const [request, response, promptAsync] = Google.useAuthRequest({
        // androidClientId: "694235095257-fkbf1u81sm5ii76om74j5b7h8u4v2m7a.apps.googleusercontent.com",
        // iosClientId: "694235095257-qnub27n3o6s0e3lo1sneio03o6ka5k9m.apps.googleusercontent.com",
        // expoClientId: "694235095257-7t7h7mv877d2jfu7r508ct1egmesbqdm.apps.googleusercontent.com"


        clientId: "498524189642-hg09s1p3rke3pcfksgjmmqgpjf0n9li7.apps.googleusercontent.com",
        iosClientId: "498524189642-1b8e93brpcefpv7uu0a9qacdnl9hdvc6.apps.googleusercontent.com",
        androidClientId: "498524189642-gc0n9q2kjf6naipa9ke779c1itmbso7i.apps.googleusercontent.com"
    });

    React.useEffect(() => {
        setMessage(JSON.stringify(response));
        if (response?.type === "success") {
            setAccessToken(response.authentication.accessToken);
        }
    }, [response]);

    async function getUserData() {
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        userInfoResponse.json().then(data => {
            setUserInfo(data);
        });

        navigation.navigate("Home", { name: "Home" })
    }

    function showUserInfo() {
        console.log("aas sme tu");
        if (userInfo) {
            return (
                <View style={styles.userInfo}>
                    <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
                    <Text>Welcome {userInfo.name}</Text>
                    <Text>{userInfo.email}</Text>
                </View>
            );
        }
    }



    let icon;
    const takeLogo = (logo) => {


        switch (logo) {
            case "apple":
                icon = <AntDesign name="apple1" size={26} color="black" />
                break;

            case "google":
                icon = <AntDesign name="google" size={26} color="black" />
                break;

            case "facebook":
                icon = <Entypo name="facebook" size={26} color="black" />
                break;

            default:
                break;
        }
        return icon;
    }
    takeLogo(logo);

    return (
        <TouchableOpacity style={styles.container}
            onPress={accessToken ? getUserData : () => { promptAsync({ useProxy: false, showInRecents: true }) }}
        >
            <View style={styles.icon}>
                {icon}
            </View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>



        //        <View style={styles.container}>
        //     {showUserInfo()}
        //     <Button
        //         title={accessToken ? "Get User Data" : "Login"}
        //         onPress={accessToken ? getUserData : () => { promptAsync({ useProxy: false, showInRecents: true }) }}
        //     />
        // </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
        // backgroundColor: "red",

        maxHeight: 60,
        minWidth: "80%",

        marginBottom: 30,

        textAlign: 'center',
        alignItems: 'center',

        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        borderOpacity: 0.2


    },
    icon: {
        // paddingRight: 20,
        paddingLeft: 20,
    },
    text: {
        flex: 1,
        textAlign: 'center',

        fontSize: 20,
        paddingRight: 20,
    },
    button: {
        backgroundColor: "red"
    }
})

export default LogInTiles