import React, { Component } from 'react';
import { StyleSheet, Picker, View, AsyncStorage,Text } from 'react-native';

export default class Scheduling extends Component {
    constructor(){
        super();
        this.state = {
            morning:'Jazz',
            noon:'Jazz',
            midnight:'Jazz',
            night:'Jazz'
        }
    }

    static navigationOptions = {
		title: 'Music Schedule'
	};

	setPlaylist = key => value => {
        console.log("oh my fucking god", value)
		AsyncStorage.setItem(key, value, err => {
			err ? console.log(err) : this.setState({
                [key]:value
            })
		});
	};

	render() {
		return (
			<View >
                <Text style={styles.item}>Morning</Text>
				<Picker
					selectedValue={this.state.morning}
					onValueChange={(itemValue, itemIndex) => this.setPlaylist("morning")(itemValue)}
				>
					<Picker.Item label="Jazz" value="jazz" />
					<Picker.Item label="Dangdut" value="dangdut" />
                    <Picker.Item label="rock" value="rock" />
					<Picker.Item label="ballad" value="ballad" />

				</Picker>
                <Text style={styles.item}>Afternoon</Text>
				<Picker
					selectedValue={this.state.noon}
					onValueChange={(itemValue, itemIndex) => this.setPlaylist("noon")(itemValue)}
				>
					<Picker.Item label="Jazz" value="jazz" />
					<Picker.Item label="Dangdut" value="dangdut" />
                    <Picker.Item label="rock" value="rock" />
					<Picker.Item label="ballad" value="ballad" />

				</Picker>
                <Text style={styles.item}>Midnight</Text>
				<Picker
					selectedValue={this.state.midnight}
					onValueChange={(itemValue, itemIndex) => this.setPlaylist('midnight')(itemValue)}
				>
					<Picker.Item label="Jazz" value="jazz" />
					<Picker.Item label="Dangdut" value="dangdut" />
                    <Picker.Item label="rock" value="rock" />
					<Picker.Item label="ballad" value="ballad" />

				</Picker>
                <Text style={styles.item}>Night</Text>
				<Picker
					selectedValue={this.state.night}
					onValueChange={(itemValue, itemIndex) => this.setPlaylist("night")(itemValue)}
				>
					<Picker.Item label="Jazz" value="jazz" />
					<Picker.Item label="Dangdut" value="dangdut" />
                    <Picker.Item label="rock" value="rock" />
					<Picker.Item label="ballad" value="ballad" />

				</Picker>
			</View>
		);
	}
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color:'black',
    fontWeight: 'bold',
  },
})