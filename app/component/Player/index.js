import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    AsyncStorage
 } from 'react-native';

const data = [
	{ A: ['uri1', 'uri2'] },
	{ B: ['uri1', 'uri2'] },
	{ C: ['uri1', 'uri2'] },
	{ D: ['uri1', 'uri2'] },
	{ E: ['uri1', 'uri2'] }
];

export default class PlayerScreen extends Component {
	static navigationOptions = {
		title: 'Music Player'
	};

    getPlaylist = (arr) => {
        AsyncStorage.multiGet(arr, (err, stores) => {
            stores.map( (result, i, store) => {
                let key = store[i][0];
                let val = store[i][1];
                console.log(key, val);
            })
        })
    }

    setPlaylist = (arr) => {
        let keys = arr.map((res) => Object.keys(res))
        let getKeys = keys.map((res) => res[0])
        let storages = arr.map((res,index) =>
                            keys[index].concat(`${res[keys[index]]}`))
        AsyncStorage.multiSet(storages,(err) => {
            this.getPlaylist(getKeys)
        })
    }
	render() {
		return (

            <Button
                onPress={() => this.setPlaylist(data)}
                title="SAVE"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        );
	}
}
