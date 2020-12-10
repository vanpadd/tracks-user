import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import ModalView from '../components/ModalView';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <ModalView>
      <NavigationEvents onWillFocus={clearErrorMessage} />
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
    </ModalView>
  );
};

SignupScreen.navigationOptions = () => {
  return { headerShown: false };
};

export default SignupScreen;
