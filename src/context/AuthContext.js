import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import apiTracker from '../api/tracker';
import { navigate } from '../NavigationService';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { token: action.payload, errorMessage: '' };
    case 'error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

//action functions
const signup = (dispatch) => async (email, password) => {
  try {
    const response = await apiTracker.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    console.log(err.response.data);
    dispatch({ type: 'error', payload: 'Sign up error!' });
  }
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
  { token: null, errorMessage: '' }
);
