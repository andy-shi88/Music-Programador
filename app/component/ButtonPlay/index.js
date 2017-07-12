import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button
} from 'react-native';
import { navigate } from 'react-navigation';
export default class ButtonPlay extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        onPress={() => navigate('Player')}
        title="Play"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
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