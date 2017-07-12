import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  WebView,
  AsyncStorage,
  ToastAndroid
} from 'react-native';
import GetTime from '../../service/GetTime';

export default class WebViewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist_url: ''
    }
  }
  componentDidMount() {
    const { navigate } = this.props.navigation;
    AsyncStorage.getItem(GetTime(), (err, val) => {
      if (!val) {
        // navigate('Home')
        ToastAndroid.showWithGravity('Your playlist in this time is empty', ToastAndroid.SHORT, ToastAndroid.CENTER);
      } else {
        this.setState({
          playlist_url: val
        })
      }
    });
  }
  render() {
    return(
      <WebView
        source={{uri: this.state.playlist_url}}
      />
    );
  }
}
