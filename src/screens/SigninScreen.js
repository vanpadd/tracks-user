import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SigninScreen = ({ navigation: { navigate } }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SigninScreen</Text>
      <Button title="Go to Signup" onPress={() => navigate("Signup")} />
      <Button title="Go to TrackList" onPress={() => navigate("TrackList")} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
