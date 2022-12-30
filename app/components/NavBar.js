import React from 'react'

import { Entypo } from '@expo/vector-icons';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowHeight = Dimensions.get('window').height;


function NavBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icons}>
        <Entypo name="home" size={24} color="rgba(42, 140, 245, 1)" />
        <Text style={styles.text}>Domov</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icons}>
        <Entypo name="home" size={24} color="rgba(42, 140, 245, 1)" />
        <Text style={styles.text}>Domov</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icons}>
        <Entypo name="home" size={24} color="rgba(42, 140, 245, 1)" />
        <Text style={styles.text}>Domov</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'flex-end',
    justifyContent: 'space-around',

    // maxHeight: 80,
    // backgroundColor: 'rgba(245, 245, 245, 1)'
    backgroundColor: 'red'
  },
  icons: {
    alignItems: 'center',
  },
  text: {
    color: "rgba(42, 140, 245, 1)"
  }
})

export default NavBar