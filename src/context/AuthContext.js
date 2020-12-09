import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import apiTracker from '../api/tracker';
import { navigate } from '../NavigationService';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'error':
      return { ...state, errorMessage: action.payload };
    case 'clearErrorMessage':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

//action functions
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clearErrorMessage' });
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await apiTracker.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'error', payload: 'Sign up error!' });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await apiTracker.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'error', payload: err.response.data.error });
  }
};

const signout = (dispatch) => {
  return () => {
    //try to sign out!
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage },
  { token: null, errorMessage: '' }
);
