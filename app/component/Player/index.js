import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

export default class PlayerScreen extends Component {


  constructor(props) {
    super(props)
    this.state = {
      music_url: '',
      playlist: null,
      song_uri: null,
      selected_playlist: 0
    }
  }

  static navigationOptions = {
    title: 'Music Player',
  };

  componentWillMount() {
    let temp_playlists = []
    let temp_songs = [] 
    AsyncStorage.getAllKeys((err, key) => {
      key.map((res, index) => {
        temp_playlists.push(res)

        AsyncStorage.getItem(res, (err,value) => {
            temp_songs.push(value)
        })
      })
      this.setState({
        music_url: '',
        playlist: temp_playlists,
        song_uri: temp_songs
      })
    })
    
  }

  addNewPlayList() {
    let name = this.state.music_url
    AsyncStorage.setItem(name, '') 
    let temp = []
    AsyncStorage.getAllKeys((err, key) => {
      key.map((res, index) => {
        temp.push(res)
      })
      this.setState({
        music_url: '',
        playlist: temp
      })
    })
  }

  addNewMusicToPlaylist() {
    let key = this.state.playlist[this.state.selected_playlist]
    let newMusicList = ''
    AsyncStorage.getItem(key, (err, value) => {
      newMusicList = typeof value !== 'string' ? '' : value 
      newMusicList = newMusicList + this.state.music_url + ', ' 
      AsyncStorage.setItem(key, newMusicList)
      let temp_songs_uri = this.state.song_uri
      temp_songs_uri[this.state.selected_playlist] = newMusicList
      this.setState({
        song_uri: temp_songs_uri
      })
    })
  }

  render() {
    console.log(this.state.song_uri, '------------')
    return (
      <View>
        <TextInput 
          onChangeText={(text) => this.setState({music_url: text})} 
          value={this.state.music_url}/>
        <Button 
          title='Add to playlist'
          onPress={() => this.addNewMusicToPlaylist()} /> 
        <Button 
          title='Add new playlist'
          onPress={() => this.addNewPlayList() } /> 
        <ScrollView>
          {
            this.state.playlist && this.state.playlist.map((res, index) => {
              return(
                <TouchableOpacity
                  onPress={() => this.setState({selected_playlist: index})}
                >
                  <Text>
                    { res }
                  </Text>
                </TouchableOpacity>
              )
            })
          }

        </ScrollView>
      </View>
    );
  }
}
