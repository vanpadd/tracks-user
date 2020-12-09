import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.containerStyle}>
      <AuthForm
        headerText="Sign up to Tracker"
        errorMessage={state.errorMessage}
        onSubmitText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        link="Already have an account? Go to sign in."
        routeName="Signin"
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
});

export default SignupScreen;
