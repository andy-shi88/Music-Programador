import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView
} from 'react-native';

export default class PlayerScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      music_url: ''
    }
  }

  static navigationOptions = {
    title: 'Music Player',
  };


  render() {
    console.log(this.state.music_url, '--------------------')
    return (
      <View>
        <TextInput 
          onChangeText={(text) => this.setState({music_url: text})} 
          value={this.state.music_url}/>
        <Button 
          title='Add to playlist'
          onPress={
            () => console.log('clicked', '------------')
          } /> 

        <ScrollView>
          
        </ScrollView>
      </View>
    );
  }
}
