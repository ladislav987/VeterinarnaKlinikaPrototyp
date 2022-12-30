import AsyncStorage from '@react-native-async-storage/async-storage';

const checkFirstLog = async () => {
    let state = await AsyncStorage.getItem('@first_log')

    if (state !== undefined && state !== null) {
        storeData("true");
    }
}



const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@first_log', value)
    } catch (e) {
        // saving error
    }
}



const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@first_log')
        if (value !== null) {
            console.log('====================================');
            console.log(value);
            console.log('====================================');
        }
    } catch (e) {
        // error reading value
    }
}


export { checkFirstLog, storeData, getData }