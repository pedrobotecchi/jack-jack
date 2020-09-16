import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    FlatList,
    Image,
  } from 'react-native';
  
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                this.setState({data:JSON.parse(value)})
            })
    }

    _setData = (task) => {
        this.setState({data,task});
    };

    render(){
        const {data} = this.state;
    
        _getData = () => {
            AsyncStorage.getItem('TASKS')
            .then((value) => {
                this.setState({data:JSON.parse(value)})
            })
        };

        const pass = {
            funct:()=>{
                console.warn("PASSE");
            },
            teste:"Hi",
        }

        const _starBars = (stars) => {
            let starsBar = [];
            for(let i=1;i<=5;i++){
                starsBar.push(
                    <Image
                    style={styles.image}
                    key={i}
                    source={i<=stars ? require('../assets/starRatingBar/star-filled.png') : require('../assets/starRatingBar/star-unfilled.png')}/>
                );
            }

            return starsBar;
        }

        return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.fontText}>Your To-Dos</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=> {this.props.navigation.navigate('Insert')
                                    }}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            {this.componentDidMount()}
            <FlatList data={data}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={()=> {this.props.navigation.navigate('Details', {item})
                               }}>
                        <View style={styles.listItem}>
                            <Text style={styles.itemFont}>Title: {item.title}</Text>
                            <Text>Description: {item.description}</Text>
                            <View style={styles.containerStars}>
                                {_starBars(item.stars)}
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}/>
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
        marginBottom:20,
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