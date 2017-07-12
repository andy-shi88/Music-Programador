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
      playlist_name: '',
      playlist: null,
      song_uri: null,
      selected_playlist: 0
    }
    this.addNewPlayList = this.addNewPlayList.bind(this)
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
    let name = this.state.playlist_name
    let uri = this.state.music_url
    AsyncStorage.setItem(name, uri)
    let temp_songs = this.state.song_uri
    let temp = this.state.playlist
    console.log(temp_songs, 'ssssmsdksmndksnkscmn')
    temp_songs.push(uri)
    temp.push(name)

    this.setState({
      music_url: '',
      playlist_name: '',
      playlist: temp,
      song_uri: temp_songs
    })
  }

  render() {
    return (
      <View>
        <Text>Playlist name</Text>
        <TextInput
          onChangeText={(text) => this.setState({playlist_name: text})}
          value={this.state.playlist_name}/>
        <Text>Link</Text>
        <TextInput
          onChangeText={(text) => this.setState({music_url: text})}
          value={this.state.music_url}/>
        <Button
          title='Add new playlist'
          onPress={() => this.addNewPlayList() } />
        <Text style={styles.playlistLabel}>Playlist</Text>
        <ScrollView>
          {
            this.state.playlist && this.state.playlist.map((res, index) => {
              return(
                <TouchableOpacity
                  key={index}
                  style={styles.playlist}
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
  playlist: {
    color: '#ffffff',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#acacac',
    alignItems: 'center',
    fontSize: 28,
    marginTop: 5
  },
  playlistLabel: {
    color: '#ffffff',
    width: '100%',
    alignSelf: 'center',
    fontSize: 30,
    backgroundColor: '#3c82f2'
  }
});
