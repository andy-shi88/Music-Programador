import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  WebView
} from 'react-native';

export default class PlayerScreen extends Component {
  static navigationOptions = {
    title: 'Music Player',
  };
  render() {
    return (
      <View>
      </View>
      <WebView
        source={{uri: "https://youtu.be/wauKnNi66xE?list=WL"}}
        style={{marginTop:20}}
      />
    );
  }
}
