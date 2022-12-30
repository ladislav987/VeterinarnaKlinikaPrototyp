import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header2 from '../components/Header2';
import Header3 from '../components/Header3';
import Header from '../components/Header3'

function ArticleOne({ navigation, route }) {
  // console.log(route.params.value);
  return (
    <View>
      <Header3 value={"Blog"}></Header3>

      {/* <Text>{route.params.value}</Text> */}
      <Text style={styles.h1}>Skuska</Text>

      <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus vero, expedita id exercitationem possimus mollitia sint, ullam est sed hic distinctio magnam sapiente, totam iste nemo excepturi laboriosam sunt, expedita id exercitationem possimus mollitia sint, ullam est sed hic distinctio magnam sapiente.</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    backgroundColor: 'red',
    marginRight: 40,
    marginLeft: 40,
  }
})

export default ArticleOne