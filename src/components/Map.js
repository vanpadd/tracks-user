import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  const points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: -36.848461 + i * 0.001,
        longitude: 174.763336 + i * 0.001,
      });
    } else {
      points.push({
        latitude: -36.848461 + i * 0.002,
        longitude: 174.763336 + i * 0.001,
      });
    }
  }

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -36.848461,
          longitude: 174.763336,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={points} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
