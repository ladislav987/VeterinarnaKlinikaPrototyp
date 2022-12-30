import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;


const Onboarding = StyleSheet.create({
    h1: {
        alignSelf: 'center',
        marginTop: windowHeight * 0.05
        // textAlign: "center",
    },
    next_button: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    h3: {
        marginTop: windowHeight * 0.4,
        alignSelf: 'center',
        margin: 10,
        fontSize: 18
    },
    text: {
        maxWidth: "70%",
        alignSelf: 'center',
    }
})

const styles_ios = StyleSheet.create({
    text: {
        color: "green",
        fontSize: 20,
        fontFamily: 'Avenir'
    }
})

const styles_android = StyleSheet.create({
    text: {
        color: "purple",
        fontSize: 30,
        fontFamily: 'Roboto'
    }
})

export { Onboarding }














// onLayout = { movePaw(225, 1000, 400, leftValue) }
// onLayout = { movePaw(80, 1000, 900, leftValue2) }
// onLayout = { movePaw(160, 1000, 1400, leftValue3) }
// onLayout = { movePaw(80, 1000, 1900, leftValue4) }