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
    render(){
        return (
            <View style={styles.container}>
                <Text>HI</Text>
            </View>
        );
    };
}