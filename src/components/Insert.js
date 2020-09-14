import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StarRating from '../assets/starRatingBar/StarRating';
import { AsyncStorage } from 'react-native';

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
                console.warn("VALUE ", value)
                this.setState({tasks:JSON.parse(value)})
            })
    }

    _getData = async () => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            // this.setState({tasks,})
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
            console.warn("TASKS ", tasks, JSON.stringify(tasks));
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
                Alert.alert("Task Inserted!" + JSON.stringify(insertValdiation));
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
        console.warn(this.props.route);
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

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
    },
    fieldContainer:{
        flex:4,
        flexDirection:'column',
    },
    textInputFont:{
        borderColor:'black',
        borderWidth:1,
        width:300,
        height:40,
    },
    textView:{
        flex:1,
        marginTop: 120,
        paddingHorizontal: 24,
        borderRadius:2,
        borderColor:'black',
    },
    fontText:{
        fontSize: 30,
        marginTop:10,
        marginRight:10,
        marginBottom:-100,
        fontWeight: '600',
        color: 'black',
        textAlign:'center',
        justifyContent:'center',
    },
    buttonStyle:{
        width:300,
        height:40,
        backgroundColor:'#3498db',
        borderRadius:4,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
    },
});