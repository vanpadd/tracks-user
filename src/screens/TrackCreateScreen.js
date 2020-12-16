import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import * as Location from 'expo-location';

const TrackCreateScreen = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  const startWatching = async () => {
    let { granted } = await Location.requestPermissionsAsync();
    if (!granted) {
      setErrorMsg('Permission to access location was denied');
      return;
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>TrackCreateScreen</Text>
      <Map></Map>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
