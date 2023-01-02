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

      <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={styles.daysContainer}>
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

      <ScrollView showsHorizontalScrollIndicator={false}  style={styles.timeContainer}>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        <Schedule navigation={navigation}></Schedule>
        {/* <Schedule cosi={'ano'}></Schedule> */}

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
    // backgroundColor: 'red'sd
  },
  container2: {
    // flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'flex-end'
  },
  daysContainer: {
    // flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginBottom: 10,
    minHeight: '11%',

    // alignItems: 'flex-start',
    // width: 800,
    marginRight: 20,
    marginLeft: 20,

  },
  timeContainer: {
    // flex: 1,
    // backgroundColor: 'green',
    // marginBottom: 50
    paddingBottom: 10
  }
})

export default Calendar