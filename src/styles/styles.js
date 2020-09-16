import {StyleSheet} from 'react-native'

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
    textViewList:{
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
    buttonStyleList:{
        width:40,
        height:40,
        backgroundColor:'#3498db',
        borderRadius:4,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
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
    buttonContainer:{
        flex:1,
        flexDirection:'row',
    },
    descFont:{
        fontSize:30
    },
    buttonStyle2:{
        width:80,
        height:40,
        backgroundColor:'#3498db',
        borderRadius:4,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    },

    textInputFont2:{
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
});


export {styles}