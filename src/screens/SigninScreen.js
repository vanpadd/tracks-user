import React, { useContext, useEffect, useState } from 'react';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import ModalView from '../components/ModalView';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage, attemptSignin } = useContext(
    AuthContext
  );

  useEffect(() => {
    attemptSignin();
  }, []);

  return (
    <ModalView>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign in to Tracker"
        errorMessage={state.errorMessage}
        onSubmitText="Sign In"
        onSubmit={signin}
        loading={state.loading}
      />
      <NavLink
        link="Don't have an account? Go to sign up."
        routeName="Signup"
      />
    </ModalView>
  );
};

SigninScreen.navigationOptions = () => {
  return { headerShown: false };
};

export default SigninScreen;
