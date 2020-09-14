import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    AsyncStorage,
    FlatList,
    ListItem,
  } from 'react-native';
  
import { TouchableOpacity } from 'react-native-gesture-handler';

const variab = []



export default class List extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            data:[],
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('TASKS')
            .then((value) => {
                console.warn("VALUE ", value)
                this.setState({data:JSON.parse(value)})
            })
    }

    _setData = (task) => {
        this.setState({data,task});
    };

    _getData = () => {
        // try {
        //     let value = await AsyncStorage.getItem('TASKS');
        //     value = JSON.parse(value);
        //     console.warn("_GETDATA: ", value, JSON.parse(value));

        //     return value;
        // } catch (error) {
        //     console.log("Error : ",error);
        //     return [];
        // }
        AsyncStorage.getItem('TASKS')
        .then((value) => {
            console.warn("VALUE ", value)
            this.setState({data:JSON.parse(value)})
        })
    };

    render(){
        const {data} = this.state;
        console.warn("Render : ",data);

        return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.fontText}>Your To-Dos</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=> {this.props.navigation.navigate('Insert', {callBack:this._getData})
                                    }}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <FlatList data={data}
                    renderItem={({item}) => (
                        <TouchableOpacity>
                            <View style={styles.listItem}>
                                <Text style={styles.itemFont}>Title: {item.title}</Text>
                                <Text>Description: {item.description}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}/>
           </View>
        </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
    },
    listContainer:{
        marginTop:25,
    },
    itemFont:{
        fontSize:20,
    }, 
    listItem:{
        borderWidth:1,
        width:325,
        marginBottom:15,        
    }, 
    textView:{
        marginTop: 80,
        paddingHorizontal: 24,
        flexDirection:'row',
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
        width:40,
        height:40,
        backgroundColor:'#3498db',
        borderRadius:4,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
    },
});