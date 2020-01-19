/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import AccountNavigation from './app/screens/Account';
import { store, persistor } from './app/redux/store';

const AppContainer = createAppContainer(AccountNavigation);

// const AccountNavigation = createNavigation();

export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
          </PersistGate>
      </Provider>
    );
  }
}

