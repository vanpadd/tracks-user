import React from 'react';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//action functions
const signup = (dispatch) => {
  return () => {
    //make api request to sign up with email/pw
    //if success modify state we are authenticated
    //if fail show error
  };
};

const signin = (dispatch) => {
  return () => {
    //make api request to sign in with email/pw
    //if success modify state we are authenticated
    //if fail show error
  };
};

const signout = (dispatch) => {
  return () => {
    //try to sign out!
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);
