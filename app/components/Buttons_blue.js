import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, StyleSheet, Button } from 'react-native';

function Buttons_blue({ value, navigation, where, where_name }) {

    const onPressFinish = async (where, where_name) => {
        await AsyncStorage.setItem('ONBOARDED', 'true');
        navigation.navigate(where, { name: where_name })

    };


    return (
        <View style={styles.next} >
            <Button
                title={value}
                onPress={() => {
                    onPressFinish(where, where_name);
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    next: {
        flex: 1,
        justifyContent: 'flex-end',
    }
})

export default Buttons_blue