import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header3 from '../components/Header3'
import NavBar from '../components/NavBar'

import DropDownPicker from 'react-native-dropdown-picker';
import SafeButton from '../components/SafeButton';

function Ordering({ navigation }) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Ukon 1', value: 'Ukon1' },
        { label: 'Ukon 2', value: 'Ukon2' },
        { label: 'Ukon 3', value: 'Ukon3' },
        { label: 'Ukon 4', value: 'Ukon4' },
    ]);


    const [openOther, setOpenOther] = useState(false);
    const [valueOther, setValueOther] = useState(null);
    const [pitems, setPitems] = useState([
        { label: '1 hodinu', value: '1Hodina' },
        { label: '8 hodin', value: '8Hodin' },
        { label: '1 den', value: '1Den' },
        { label: '5 dni', value: '5Dni' },
    ]);


    return (
        <View style={styles.container}>
            <Header3 value={"Objednanie"} navigation={navigation}></Header3>

            <View style={styles.flex}>
                <View style={styles.firstDropContainer}>
                    <Text style={styles.dropDownText}>Ukon</Text>

                    <DropDownPicker
                        open={open}
                        placeholder={value}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={styles.firstDrop}
                        dropDownContainerStyle={{
                            height: 120
                        }}
                    />
                </View>

                <View style={styles.secondDropContainer}>
                    <Text style={styles.dropDownText}>Upozornenie</Text>
                    <DropDownPicker
                        open={openOther}
                        placeholder={valueOther}
                        value={valueOther}
                        items={pitems}
                        setOpen={setOpenOther}
                        setValue={setValueOther}
                        setItems={setPitems}
                        style={styles.secondDrop}
                        dropDownContainerStyle={{
                            height: 120
                        }}
                    />
                </View>
            </View>

            <View style={styles.tlacidlo} >
                <SafeButton ></SafeButton>
            </View>


            <View style={styles.container2}>
                <NavBar navigation={navigation} />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        height: '100%',
    },
    container2: {
        flex: 1,
        // // flexDirection: 'row',
        // // backgroundColor: 'red',
        // // alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'red',
        // alignSelf: 'flex-end'
    },
    firstDrop: {
        marginBottom: 130,
        // maxWidth: '60%',
        // alignItems: 'center',
        // alignSelf: 'center',
    },
    secondDrop: {
        marginBottom: 130,

        // maxWidth: '60%',
        // alignSelf: 'center',
    },
    firstDropContainer: {
        // backgroundColor: 'red',
        // flex: 1,
        flexDirection: 'column',
        // alignContent: 'center',
        marginLeft: '15%',
        marginRight: '15%'
        // alignSelf: 'center',
    },
    secondDropContainer: {
        flexDirection: 'column',
        marginLeft: '15%',
        marginRight: '15%'
    },
    dropDownText: {
        marginBottom: 10,
    },
    tlacidlo: {
        flex: 1,
        justifyContent: 'center',

        // backgroundColor: 'red'
    },
    flex:{
        // flex: 1,
    }
})

export default Ordering