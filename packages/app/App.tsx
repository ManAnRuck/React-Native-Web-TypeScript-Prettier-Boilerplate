/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { add } from '@greatgift/common';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const instructions = Platform.select({
  android:
    'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
});

const Welcome = styled.Text`
  font-size: 20;
  margin-vertical: 10;
  text-align: center;
  color: green;
`;

// tslint:disable-next-line:no-empty-interface
interface IProps {}
export default class App extends Component<IProps> {
  public render() {
    return (
      <View style={styles.container}>
        <Welcome>Welcome to React Native!</Welcome>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>{add(3, 9)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {},
});
