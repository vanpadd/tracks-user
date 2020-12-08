import React from 'react';
import createDataContext from './createDataContext';
import apiTracker from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

//action functions
const signup = (dispatch) => {
  return async (email, password) => {
    try {
      const response = await apiTracker.post('/signup', { email, password });
      console.log(response.data);
      //if success modify state we are authenticated
      dispatch({ type: 'error', payload: '' });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Sign up error!' });
    }
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
  { isSignedIn: false, errorMessage: '' }
);
