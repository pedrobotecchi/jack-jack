import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage, Alert } from 'react-native';
import StarRating from '../assets/starRatingBar/StarRating';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

export default class Details extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data:[],
            descrp: this.props.route.params.item.description,
            title: this.props.route.params.item.title,
            stars:this.props.route.params.item.stars,
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('TASKS')
            .then((value) => {
                this.setState({data:JSON.parse(value)})
            })
            .catch((value) => {
                console.warn('Error')
            })
    }

    _getStars = (starData) => {
        this.setState({stars:starData});
    }


    render(){
        const task = this.props.route.params.item;
        const {data,description,title,stars} = this.state;

        const _removeTask = () => {
            for(i = 0; i < data.length ; i++){
                if((task.title === data[i].title) && (task.description === data[i].description)){
                    let newData = data.splice(i,1);
                    i--;
                    this.setState({data,newData});
                }
            }
            Alert.alert("Task removed");
            _storeData(data);
        }

        _editTask = () => {
            for(i = 0; i < data.length ; i++){
                if((task.title === data[i].title) && (task.description === data[i].description)){
                    data[i].title = this.state.title;
                    data[i].description = this.state.descrp;
                    data[i].stars = this.state.stars;
                }
            }
            Alert.alert("Task Edited");
            _storeData();
            
        }

        _storeData = async (newTasks) =>{
            try {
                await AsyncStorage.setItem("TASKS",JSON.stringify(data));
                return tasks;
            } catch (error) {
                console.log("Error inserting data : ",error);
            }
            return false;
        };

        let starsBar = [];
        for(let i=1;i<=5;i++){
            starsBar.push(
                    <Image
                        style={styles.image}
                        source={i<=task.stars ? require('../assets/starRatingBar/star-filled.png') : require('../assets/starRatingBar/star-unfilled.png')}/>
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <TextInput style={styles.textInputFont}
                        onChangeText={(title) => this.setState({title})}
                        placeholder={task.title}
                        placeholderTextColor={'black'}/>
                </View>
                <Text style={styles.fieldLabel}>Description:</Text>
                <View style={styles.descContainer}>
                    <TextInput style={styles.descFont}
                        onChangeText={(descrp) => this.setState({descrp})}
                        placeholder={task.description}
                        placeholderTextColor={'black'}/>
                </View>
                <View styles={{alignContent:'center', alignItems:'center'}}>
                    <StarRating callbackStar={this._getStars} stars={task.stars}>
                    </StarRating>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={()=> {_removeTask();}}>
                        <Text>Remove</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={()=> {_editTask()}}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        alignItems:'center',
    },
    buttonContainer:{
        flex:1,
        flexDirection:'row',
    },
    descFont:{
        fontSize:30
    },
    buttonStyle:{
        width:80,
        height:40,
        backgroundColor:'#3498db',
        borderRadius:4,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    },
    containerStars:{
        flexDirection:'row',
    },
    image:{
        width:30,
        height:30,
        marginLeft:25,
        marginTop:15,
        marginBottom:15
    },
    textInputFont:{
        width:300,
        height:40,
        fontSize:40,
        textAlign:'center'
    },
    fieldLabel:{
        fontSize:20,
        marginTop:20,
    },
    descText:{
        marginTop:10,
        fontSize:20
    },  
    titleContainer:{
        marginTop:80,
        borderWidth:1,
        width:350,
        height:60
    },
    titleText:{
        fontSize:40,
        textAlign:'center',
        alignItems:'center',
    },
    descContainer:{
        borderTopWidth:1,
        borderBottomWidth:1,
        width:350,

    }
})