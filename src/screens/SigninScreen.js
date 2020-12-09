import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.containerStyle}>
      <AuthForm
        headerText="Sign in to Tracker"
        errorMessage={state.errorMessage}
        onSubmitText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        link="Don't have an account? Go to sign up."
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
