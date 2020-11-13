import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button title="go to Signin" onPress={() => navigate("Signin")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
