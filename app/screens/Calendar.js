import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header3 from '../components/Header3'
import NavBar from '../components/NavBar'

function Calendar({navigation}) {
  return (
    <View style={styles.container}>
      <Header3 value={"Kalendár"} navigation={navigation}></Header3>


      <View style={styles.container2}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'flex-end'
  },
})

export default Calendar