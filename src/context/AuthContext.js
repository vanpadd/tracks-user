import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import apiTracker from '../api/tracker';
import { navigate } from '../NavigationService';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signinLoading':
      return { ...state, errorMessage: '', loading: true };
    case 'signinLoaded':
      return { token: action.payload, errorMessage: '', loading: false };
    case 'signinFail':
      return { ...state, errorMessage: action.payload, loading: false };
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
    dispatch({ type: 'signinLoaded', payload: token });
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
    dispatch({ type: 'signinLoading' });
    const response = await apiTracker.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signinLoaded', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'signinFail', payload: 'Sign up error!' });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    dispatch({ type: 'signinLoading' });
    const response = await apiTracker.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signinLoaded', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'signinFail',
      payload: err.response.data.error || 'Check Your Connection!',
    });
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
  { token: null, errorMessage: '', loading: false }
);
