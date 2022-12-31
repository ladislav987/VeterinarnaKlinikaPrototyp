import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header2 from '../components/Header2';
import Header3 from '../components/Header3';
import Header from '../components/Header3'
import NavBar from '../components/NavBar';

import { FontAwesome } from '@expo/vector-icons';

function ArticleOne({ navigation, route }) {
  const navigateToComments = () => {
    navigation.navigate("Comments", { name: "Comments" })
  }
  return (
    <View style={styles.container}>
      <Header3 value={"Blog"} navigation={navigation}></Header3>

      <Text style={styles.h1}>{route.params.value}</Text>
      {/* <Text style={styles.h1}>Skuska</Text> */}

      <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus vero, expedita id exercitationem possimus mollitia sint, ullam est sed hic distinctio magnam sapiente, totam iste nemo excepturi laboriosam sunt, expedita id exercitationem possimus mollitia sint, ullam est sed hic distinctio magnam sapiente.</Text>

      <View style={styles.container2}>
        <TouchableOpacity onPress={navigateToComments} style={styles.comment}>
          <FontAwesome name="commenting" size={32} color="rgba(42, 140, 245, 1)" />
        </TouchableOpacity>
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
  comment:{
    // maxWidth: 40,
    // alignItems: 'flex-end',
    padding: 8,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "rgba(42, 140, 245, 1)"

    // alignSelf: 'flex-end',
    // justifyContent: 'flex-end',
  },
  h1: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    // backgroundColor: 'red',
    marginRight: 40,
    marginLeft: 40,
  }
})

export default ArticleOne