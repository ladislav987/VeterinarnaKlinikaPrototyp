import React, { useContext, useRef, useState } from 'react'
import { Animated, Button, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Dimensions } from 'react-native';

import { Onboarding } from './styles';
import Buttons_blue from '../../components/Buttons_blue';
import Header from '../../components/Header';

export default function Second({ navigation }) {

  const leftValue = useState(new Animated.Value(-2550))[0];
  const leftValue2 = useState(new Animated.Value(-2550))[0];
  const leftValue3 = useState(new Animated.Value(-2550))[0];
  const leftValue4 = useState(new Animated.Value(-2550))[0];

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  let delene = (windowWidth / 2) - 15;

  function movePaw(toValue, duration, delay, skuska) {
    Animated.timing(skuska, {
      toValue: toValue,
      duration: duration,
      delay: delay,
      useNativeDriver: false
    }).start();
  }

  return (
    <View style={{ flex: 1 }}>

      <Header value="Vitajte"></Header>

      <Animated.View onLayout={movePaw((delene + 20), 1000, 400, leftValue)} style={{ marginLeft: leftValue, top: windowHeight * 0.25, position: 'absolute', transform: [{ rotate: "18deg" }] }} >
        <Ionicons name="paw-sharp" size={24} color="rgba(237, 46, 124, 1)" />
      </Animated.View>

      <Animated.View onLayout={movePaw((delene - 20), 1000, 800, leftValue2)} style={{ marginLeft: leftValue2, top: windowHeight * 0.2, position: 'absolute', transform: [{ rotate: "-18deg" }] }} >
        <Ionicons name="paw-sharp" size={24} color="rgba(237, 46, 124, 1)" />
      </Animated.View>

      <Animated.View onLayout={movePaw((delene + 20), 1000, 1200, leftValue3)} style={{ marginLeft: leftValue3, top: windowHeight * 0.2, position: 'absolute', transform: [{ rotate: "18deg" }] }} >
        <Ionicons name="paw-sharp" size={24} color="black" />
      </Animated.View>

      <Animated.View onLayout={movePaw((delene - 20), 1000, 1600, leftValue4)} style={{ marginLeft: leftValue4, top: windowHeight * 0.25, position: 'absolute', transform: [{ rotate: "-18deg" }] }} >
        <Ionicons name="paw-sharp" size={24} color="black" />
      </Animated.View>

      <View style={Onboarding.h3}>
        <Text style={Onboarding.text} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam error beatae eum quae maiores culpa magnam officia eos. Commodi, dolor? Perspiciatis possimus assumenda accusamus reprehenderit facilis blanditiis neque porro deserunt.</Text>
      </View>

      <Buttons_blue value="Pokračovať" navigation={navigation} where={"Login"} where_name={"Login"}  ></Buttons_blue>

    </View>
  )
}
