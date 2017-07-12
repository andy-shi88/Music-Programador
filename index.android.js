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
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ButtonPlay from './app/component/ButtonPlay'
import Player from './app/component/Player'
import Schedule from './app/component/Scheduling'
import WebViewPlayer from './app/component/WebViewPlayer'
export default class Home extends Component {
   static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to MP, playin music wisely!
        </Text>
        <ButtonPlay navigation = {this.props.navigation}/>
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
const MusicProgramador = StackNavigator({
  Home: { screen: Home },
  Player:{ screen:Player},
  Schedule:{ screen:Schedule},
  WebViewPlayer: { screen:WebViewPlayer}
});
AppRegistry.registerComponent('MusicProgramador', () => MusicProgramador);
