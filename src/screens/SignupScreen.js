import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.containerStyle}>
      <Spacer>
        <Text h3>Sign up to Tracker</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Your Email Address"
        placeholder="email@address.com"
        leftIconContainerStyle={styles.leftIconStyle}
        leftIcon={{ type: "MaterialCommunityIcons", name: "email" }}
      />
      <Input
        label="Password"
        placeholder="Password"
        secureTextEntry={true}
        leftIconContainerStyle={styles.leftIconStyle}
        leftIcon={{ type: "MaterialCommunityIcons", name: "lock" }}
      />
      <Spacer />
      <Button title="Sign Up" type="solid" buttonStyle={styles.buttonStyle} />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return { headershow: false };
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  leftIconStyle: {
    opacity: 0.3,
  },
  buttonStyle: {
    paddingHorizontal: 100,
  },
});

export default SignupScreen;
