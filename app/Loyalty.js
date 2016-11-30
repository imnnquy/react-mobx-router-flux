/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux'
import { Home, Login, Register } from './scences'

export class Loyalty extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
            <Scene key="home" component={Home} initial hideNavBar/>
            <Scene key="login" component={Login} hideNavBar/>
            <Scene key="register" component={Register} hideNavBar/>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});