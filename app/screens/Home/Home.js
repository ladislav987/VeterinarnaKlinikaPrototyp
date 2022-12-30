import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';

import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';


WebBrowser.maybeCompleteAuthSession();

const windowHeight = Dimensions.get('window').height;

import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import Header2 from '../../components/Header2';


function Home({ navigation }) {

  const navigateToCalendar = () => {
    navigation.navigate("Calendar", { name: "Calendar" })
  }

  const navigateToBlog = () => {
    navigation.navigate("Blog", { name: "Blog" })
  }


  return (
    <View >
      <Header2 value="Prehľad"></Header2>
      <View style={styles.container}>

        <View style={styles.IconContainer}  >
          <TouchableOpacity onPress={navigateToCalendar} style={styles.icon}>
            <AntDesign name="calendar" size={65} color="black" />
            <Text style={styles.text}>Kalendár</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToBlog} style={styles.icon}>
            <FontAwesome5 name="pen-fancy" size={65} color="black" />
            <Text style={styles.text}>Blog</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  IconContainer: {
    marginTop: windowHeight * 0.15,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  icon: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginRight: 20,
    backgroundColor: 'rgba(216, 216, 216, 0.2)',
    borderRadius:8,

  },
  text: {
    fontSize: 23,
  },
});
export default Home