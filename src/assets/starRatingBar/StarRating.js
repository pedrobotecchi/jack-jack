import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StarRating extends React.Component{
    state={
        rating:this.props.stars || 4,
        max_rating:5,
    }

    updateRating(key){
        this.setState({rating:key});
        this._sendData(key);
    }

    _sendData = (key) => {
        this.props.callbackStar(key);
    }

    render() {
        let React_Native_Bar = [];
        for(let i=1;i<=this.state.max_rating;i++){
            React_Native_Bar.push(
                <TouchableOpacity
                    activeOpacity={0.5}
                    key={i}
                    onPress={(this.updateRating.bind(this,i))}>
                    <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={i<=this.state.rating ? require('./star-filled.png') : require('./star-unfilled.png')}/>
                    </View>
                </TouchableOpacity>
            );
        }
        this.props.rating = this.state.rating;
        return(
            <View style={styles.container}>
                {React_Native_Bar}
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    image:{
        width:30,
        height:30,
        marginLeft:25,
        marginTop:15,
        marginBottom:15
    },
});