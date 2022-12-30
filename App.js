import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';


import { Navigation } from './app/components/navigation/Navigation';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const [onboarded, setOnboarded] = useState("false");

  // — — — — — — — — — — EFFECTS — — — — — — — — — — //
  useEffect(() => {
    getStorage();
  }, []);

  // — — — — — — — — — — ACTIONS — — — — — — — — — — //
  const getStorage = async () => {
    const onboarded = await AsyncStorage.getItem('ONBOARDED');
    setOnboarded(JSON.parse(onboarded));
  };
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Navigation onboarded={onboarded} />
      </NavigationContainer>
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});


