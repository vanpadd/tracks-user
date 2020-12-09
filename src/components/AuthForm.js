import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmitText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage ? (
        <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
      ) : null}
      <Spacer />
      <Button
        title={onSubmitText}
        type="solid"
        buttonStyle={styles.buttonStyle}
        onPress={() => onSubmit(email, password)}
      />
      <Spacer />
    </>
  );
};

const styles = StyleSheet.create({
  leftIconStyle: {
    opacity: 0.3,
  },
  buttonStyle: {
    paddingHorizontal: 100,
  },
  errorMessageStyle: {
    fontSize: 16,
    color: 'red',
  },
});

export default AuthForm;
