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
    case 'signout':
      return { token: '', errorMessage: '' };
    default:
      return state;
  }
};

//action functions
const attemptSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('Signin');
  }
};

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
    dispatch({ type: 'error', payload: err.response.data.error || 'Check Your Connection!'});
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('Signin');
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, attemptSignin },
  { token: null, errorMessage: '' }
);
