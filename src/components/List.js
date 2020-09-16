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
  
import {styles} from '../styles/styles'
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
            <View style={styles.textViewList}>
                <Text style={styles.fontText}>Your To-Dos</Text>
                <TouchableOpacity
                    style={styles.buttonStyleList}
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