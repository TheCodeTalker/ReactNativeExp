'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,ListView,Switch,
    Image,AlertIOS,TabBarIOS,TouchableHighlight,
    TextInput,Alert,TouchableOpacity,RefreshControl} from 'react-native';
import FitImage from 'react-native-fit-image';
import Button from 'react-native-button';
import Search from 'react-native-search-box';
import { SwipeListView } from 'react-native-swipe-list-view';
var SCREEN_WIDTH = require('Dimensions').get('window').width;
var SCREEN_HEIGHT = require('Dimensions').get('window').height;
class Listitem extends Component
{
    constructor(props) {
    super(props);
    this.state = {
      falseSwitchIsOn: true,
    };
  }

    render(){
      const { bucket } = this.props;
         var logoComp
         if ((bucket.bkt_image != null) ||  (bucket.bkt_image != "")){
      logoComp =  "http://alpha.woovly.com:80/" + bucket.bkt_image
   }else{
       logoComp = ""
   }
    return(
         <View style={styles.containerListView}>
      <View style={styles.ColorRow}>
   <View style={styles.secondRow1}>
      </View>
  </View>
<View style={styles.firstRow}>
  <View style={styles.nameView}>
    <FitImage
      resizeMode="cover"
      indicator = {false}
      source={{uri: logoComp }}
      originalWidth={40}
      originalHeight={40}
     
      style={styles.fitImage}
      />
      <View style={styles.timeView}>
        <Text numberOfLines = {1} style={styles.port}>{bucket.ctime}</Text>
        <Text  numberOfLines = {1} style={styles.ctime}>{bucket.cdate}</Text>
        </View>

    </View>

  </View>

<View style={styles.secondRow}>
   <View style={styles.secondRow11}>
      </View>
  </View>
  <View style={styles.thirdRow}>
    <View style={styles.thirdRow1}>
  <View style={styles.nameView}>
      <Text style={styles.title}>{bucket.bkt_name}</Text>
       <View style={styles.rightContainerfirstRow}>
        <Text style={styles.subtitleFirstrow}>{'AUTHOR'}</Text>
      <Text style={styles.subtitleFirstrow1}>{bucket.name}</Text>
      </View>
      </View>

      </View>
       <View style={styles.thirdRow2}>


      </View>
       <View style={styles.thirdRow3}>

         <View style={styles.secondRow}>
           <Image
        style={styles.doclayer}
        
      />
          {/*<FitImage
      resizeMode="cover"
      originalWidth={40}
      originalHeight={40}
      source={require('../Img/doclayer.png')}
      style={styles.fitImage}
      />*/}
        <Text style={styles.quantity1}>{bucket.scatCnt}</Text>
         <FitImage
      resizeMode="cover"
      indicator = {false}
      originalWidth={30}
      originalHeight={30}
      
      style={styles.fitImage}
      />

    <Text style={{fontSize: 15,
       textAlign: 'left',
      color:'green',
      justifyContent:'center',
      paddingLeft: 10,
      fontWeight: 'bold'}}>{bucket.userLink}</Text>
      <Button
          style={{fontSize: 15, color: 'black',padding: 5, alignItems: 'flex-end',justifyContent:'center'}}
          styleDisabled={{color: 'red'}}
          >
          Active
        </Button>

      {}
     

     <Switch
          onValueChange={(value) => 
          this.setState({falseSwitchIsOn: value})}
          style={{ alignItems: 'flex-end',justifyContent: 'center',marginLeft:15 ,transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
          value={this.state.falseSwitchIsOn} />

      </View>


      </View>
   
  </View>


  
  </View>
        );        
    }

}
var styles = StyleSheet.create({
  sixthRow:{
    flex: 1,
    height: 1,
  flexDirection: 'row',
  alignSelf: 'stretch',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#EBECED',
  },containerListView:{
    width: SCREEN_WIDTH - 10 ,
    flex: 1,
    
    paddingLeft: 0,
    paddingBottom:0,
    paddingRight:10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },rowFront:{
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor: '#F5FCFF',
  height:110,
  },
  firstRow :{
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flex: 0.3,
  backgroundColor: '#F5FCFF',
},
secondRow:{
width:1,
marginRight : 10,
flexDirection: 'row',
backgroundColor: '#F5FCFF',
justifyContent: 'flex-start',
alignItems: 'center',
},
ColorRow:{
width:1,
marginRight : 0,
flexDirection: 'row',
backgroundColor: 'orange',
alignItems: 'center',
justifyContent: 'center',
},
secondRow1:{
width:5,
height:110,
alignItems: 'center',
backgroundColor: 'orange',
borderBottomColor: 'orange',
borderBottomWidth: 1,
},secondRow11:{
width:1,
height:110,
alignItems: 'center',
backgroundColor: 'black',
borderBottomColor: 'black',
borderBottomWidth: 1,
},
thirdRow1:{
  flex: 0.4,
alignSelf: 'stretch',
justifyContent: 'flex-start',
alignItems: 'flex-start',
backgroundColor: '#F5FCFF',

},
thirdRow2:{
  
  height:1,

alignSelf: 'stretch',

backgroundColor: 'black',
borderBottomColor: 'black',
borderBottomWidth: 1,
},
thirdRow3:{
flex: 0.5,
alignSelf: 'stretch',
backgroundColor: '#F5FCFF',
justifyContent: 'center',
    alignItems: 'flex-start',
borderBottomColor: '#F5FCFF',
borderBottomWidth: 1,
},

thirdRow:{
  flex: 0.6,
flexDirection: 'column',
justifyContent: 'space-around',
alignItems: 'flex-start',
backgroundColor: '#ff6366',
},fourthRow:{
  flex: 0.5,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#888888',
borderRadius: 3,
borderWidth:1,
},
loader:{
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
fivethRow:{
  flex: 1,
  paddingTop:5,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},insideRow : {
  flex: 1,
  width: 20,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: '#F5FCFF',
},
  ctime :{
    paddingLeft: 10,
    fontSize: 12,
    alignItems: 'flex-end',
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 3,
  },
  quantity:{
      fontSize: 15,
      marginRight: 5,
      color:'green',
      fontWeight: 'bold',

  },
  quantity1:{
  fontSize: 15,
  paddingLeft: 18,
  textAlign: 'left',
      color:'green',
      fontWeight: 'bold',
  },actionbar:{
    color:'green',
  },
  nameView:{
flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
  },
  timeView:{
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
  },

  rightContainerfirstRow:{
flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
backgroundColor: '#F5FCFF',
 alignSelf: 'stretch',

  },
  fulllot:{
    fontSize: 15,
     color: 'green',
     marginRight: 5,
     borderColor: 'green',
      borderWidth: 1,
      alignItems: 'flex-end',
      marginBottom: 8,
      marginLeft: 3,
  },
  rightContainer: {
    flex: 1,
     alignSelf: 'stretch',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },actionRow:{
    flex: 1,
    marginRight: 5,
    alignItems: 'flex-end',
    flexDirection: 'row',
justifyContent: 'flex-end',
  },button:{
    alignItems: 'center',
    justifyContent: 'center',
    
    
    tintColor: 'white',
  },
  stbutton:{
 borderRadius: 20,
    width: 20,
    flexDirection: 'column',
justifyContent: 'center',
alignItems: 'flex-start',
    height: 20,
  },doclayer:{
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 15,
    marginBottom: 8,
    marginLeft: 3,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  subtitleFirstrow: {
    fontSize: 12,
    marginBottom: 8,
    width : 70,
    textAlign:'center',
    color:'white',
    fontWeight: 'bold',
    backgroundColor: '#34CDD3',
  },subtitleFirstrow1:{
  fontSize: 15,
    marginBottom: 8,
    marginLeft: 3,
    
    textAlign: 'left',
    fontWeight: 'normal',
  }
  ,myBtn:{
    width:25,
    height:25,
    marginRight: 5,
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  fitImage: {
    borderRadius: 20,
    width: 40,
    height: 40,
  },port:{
    paddingLeft: 10,
    marginTop:5,
    fontSize: 12,
    alignItems: 'flex-end',
    fontWeight: 'bold',
    marginBottom: 8,
    
  },
  listView: {
    paddingTop: 10,
    backgroundColor: '#F5FCFF',
  },
});

export default Listitem