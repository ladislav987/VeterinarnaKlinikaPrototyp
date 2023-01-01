import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Day from '../components/Day'
import Header3 from '../components/Header3'
import NavBar from '../components/NavBar'
import Schedule from '../components/Schedule'

function Calendar({ navigation }) {
  return (
    <View style={styles.container}>
      <Header3 value={"Kalendár"} navigation={navigation}></Header3>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.daysContainer}>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
      </ScrollView>

      <ScrollView contentInset={{ top: 0, left: 0, bottom: 60, right: 0 }}>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule></Schedule>
        <Schedule cosi={'ano'}></Schedule>

      </ScrollView>

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
  daysContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    maxHeight: 50,
    // alignItems: 'flex-start',
    // width: 800,
    marginRight: 20
  }
})

export default Calendar