import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const LandingScreen = () => {
  const { attemptSignin } = useContext(AuthContext);

  useEffect(() => {
    attemptSignin();
  }, []);

  return null;
};

LandingScreen.navigationOptions = {
  headerShown: false,
};

export default LandingScreen;
