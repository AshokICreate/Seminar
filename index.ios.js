/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Calculator from './Components/Calculator'

import Login from './Components/Login.js'
import CreateAccount from './Components/CreateAccount.js'
import ForgotPassword from './Components/ForgotPassword.js'

AppRegistry.registerComponent('calc', () => Calculator);

AppRegistry.registerComponent('calc', () => Login);
AppRegistry.registerComponent('calc', () => CreateAccount);
AppRegistry.registerComponent('calc', () => ForgotPassword);
