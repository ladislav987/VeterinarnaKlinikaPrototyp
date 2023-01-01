import React from 'react'

import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowHeight = Dimensions.get('window').height;


function NavBar({navigation}) {

  const navigateToHome = () => {
    navigation.navigate("Home", { name: "Home"})
  }

  const navigateToCalendar = () => {
    navigation.navigate("Calendar", { name: "Calendar" })
  }

  const navigateToBlog = () => {
    navigation.navigate("Blog", { name: "Blog" })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHome} style={styles.icons}>
        <Entypo name="home" size={24} color="rgba(42, 140, 245, 1)" />
        <Text style={styles.text}>Domov</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToCalendar} style={styles.icons}>
        <AntDesign name="calendar" size={24} color="rgba(42, 140, 245, 1)" />
        <Text style={styles.text}>Kalendár</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToBlog} style={styles.icons}>
        <FontAwesome5 name="pen-fancy" size={24} color="rgba(42, 140, 245, 1)" />
        <Text style={styles.text}>Blog</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 0,
    maxHeight: 70,
    width: '100%',
    minHeight: 60,
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',

    backgroundColor: 'red',
    // backgroundColor: 'rgba(245, 245, 245, 1)',
    zIndex: 99

    // backgroundColor: 'green'

  },
  icons: {
    alignItems: 'center',
  },
  text: {
    // color: "rgba(42, 140, 245, 1)"
  }
})

export default NavBar