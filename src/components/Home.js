import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { 
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  ActionSheetIOS,
  ImageBackground,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends React.Component {
    render(){
        return (
        <View style={styles.container}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Welcome to jackjack Project</Text>
                </View>
                <View style={styles.buttonStyle}> 
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={()=> this.props.navigation.navigate('List')}>
                        <Text style={styles.stdText}>ENTER SYSTEM</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={styles.footerContainer}>Coded By Pedro, ClasApp intern.</Text>
                </View>
        </View>
        );
    }
};

 const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
    },
    buttonStyle: {
        width:300,
        height:42,
        backgroundColor:'#3498db',
        borderRadius:4,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
    },
    stdText: {
        fontSize:15,
        fontFamily:'arial',
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    
    footer: {
      color: 'black',
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'center',
      borderBottomColor:'blue',
    },
    sectionTitle: {
        fontSize: 30,
        marginTop:100,
        marginBottom:-100,
        fontWeight: '600',
        color: 'black',
        textAlign:'center',
        justifyContent:'center',
    },
    footerContainer:{
        marginBottom:36,
        fontSize:14,
        textAlign:'center',
    },
});