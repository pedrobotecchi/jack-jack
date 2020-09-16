import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StarRating from '../assets/starRatingBar/StarRating';
import {AsyncStorage} from 'react-native'
import {styles} from '../styles/styles'

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Alert,
} from 'react-native';
 


export default class Insert extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            descrp: '',
            title: '',
            stars:4,
            tasks:[],
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('TASKS')
            .then((value) => {
                this.setState({tasks:JSON.parse(value)})
            })
    }

    _getData = async () => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            return JSON.parse(value);
        } catch (error) {
            console.log("Error : ",error);
            return [];
        }
    };

    _storeData = async (task) =>{
        try {
            const {tasks} = this.state;
            tasks.push(task);
            await AsyncStorage.setItem("TASKS",JSON.stringify(tasks));
            return tasks;
        } catch (error) {
            console.log("Error inserting data : ",error);
        }
        return false;
    };

    _handlingData() {
        if(this.state.title === '' || this.state.descrp === '')
            Alert.alert("Please, fill all the fields!");
        else{
            let task = {'title':this.state.title,'description':this.state.descrp,'stars':this.state.stars};
            let insertValdiation = this._storeData(task);    
            if(insertValdiation){
                Alert.alert("Task Inserted!");
            }
            else{
                Alert.alert("ERROR");
            }
        }
    }

    _getStars = (starData) => {
        this.setState({stars:starData});
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.textView}>
                    <Text style={styles.fontText}>Insert Itens</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text>Title:</Text>
                    <TextInput style={styles.textInputFont}
                        onChangeText={(title) => this.setState({title})}/>
                    <Text>Description:</Text>
                    <TextInput style={styles.textInputFont}
                        onChangeText={(descrp) => this.setState({descrp})}/>
                    <View styles={{alignContent:'center', alignItems:'center'}}>
                        <StarRating callbackStar={this._getStars}>
                        </StarRating>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={()=> {this._handlingData()}}>
                        <Text>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}
