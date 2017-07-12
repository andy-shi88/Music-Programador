import React, { Component } from 'react';
import { StyleSheet, Picker, View, AsyncStorage,Text } from 'react-native';

export default class Scheduling extends Component {
    constructor(){
        super();
        this.state = {
            morning:'Jazz',
            noon:'Jazz',
            midnight:'Jazz',
            night:'Jazz',
            playlist:[]
        }
    }

    static navigationOptions = {
		title: 'Music Schedule'
	};
    componentWillMount(){
        console.log('coyy')
        AsyncStorage.getAllKeys((err,cb) => {
            (err) ? console.log('this is err',err) : this.setState({playlist:elimFromArr(cb)(['Morning','midnight','morning','noon','night'])})
        })
    }
	setPlaylist = key => value => {
        console.log("oh my fucking god", value)
		AsyncStorage.setItem(key, value, err => {
			err ? console.log(err) : this.setState({
                [key]:value
            })
		});
	};

	render() {
        console.log('taek',this.state.playlist)
		return (
			<View >
                <Text style={styles.item}>Morning</Text>
				<Picker
					selectedValue={this.state.morning}
					onValueChange={(itemValue, itemIndex) => this.setPlaylist("morning")(itemValue)}
				>   
                    { 
                        this.state.playlist.length > 0 ? 
                        this.state.playlist.map((data) => <Picker.Item label={data} value={data} />)
                        :<Picker.Item label="Jazz" value="jazz" />
                        
                    }

				</Picker>
                <Text style={styles.item}>Afternoon</Text>
				<Picker
					selectedValue={this.state.noon}
					onValueChange={(itemValue, itemIndex) => this.setPlaylist("noon")(itemValue)}
				>
					{ 
                        this.state.playlist.length > 0 ? 
                        this.state.playlist.map((data) => <Picker.Item label={data} value={data} />)
                        :<Picker.Item label="Jazz" value="jazz" />
                        
                    }
				</Picker>
                <Text style={styles.item}>Midnight</Text>
				<Picker
					selectedValue={this.state.midnight}
					onValueChange={(itemValue, itemIndex) => this.setPlaylist('midnight')(itemValue)}
				>
					{ 
                        this.state.playlist.length > 0 ? 
                        this.state.playlist.map((data) => <Picker.Item label={data} value={data} />)
                        :<Picker.Item label="Jazz" value="jazz" />
                        
                    }
				</Picker>
                <Text style={styles.item}>Night</Text>
				<Picker
					selectedValue={this.state.night}
					onValueChange={(itemValue, itemIndex) => this.setPlaylist("night")(itemValue)}
				>
					{ 
                        this.state.playlist.length > 0 ? 
                        this.state.playlist.map((data) => <Picker.Item label={data} value={data} />)
                        :<Picker.Item label="Jazz" value="jazz" />
                        
                    }
				</Picker>
			</View>
		);
	}
}

function elimFromArr (arr){
    return (checker) => arr.filter((res) => !checker.includes(res) )

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