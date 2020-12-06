import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation: { navigate } }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.containerStyle}>
      <Spacer>
        <Text h3>Sign up to Tracker</Text>
      </Spacer>
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        label="Your Email Address"
        placeholder="email@address.com"
        leftIconContainerStyle={styles.leftIconStyle}
        leftIcon={{ type: 'MaterialCommunityIcons', name: 'email' }}
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        label="Password"
        placeholder="Password"
        secureTextEntry={true}
        leftIconContainerStyle={styles.leftIconStyle}
        leftIcon={{ type: 'MaterialCommunityIcons', name: 'lock' }}
      />
      <Spacer />
      <Button
        title="Sign Up"
        type="solid"
        buttonStyle={styles.buttonStyle}
        onPress={() => signup(email, password)}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return { headerShown: false };
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
