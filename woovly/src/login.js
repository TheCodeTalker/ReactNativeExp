'use strict';
import React, { Component,PropTypes } from 'react';
import Button from 'react-native-button'
import Home from './Home';
import { StackNavigator } from 'react-navigation';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
const nativeImageSource = require('nativeImageSource');
import {
  StyleSheet,
  Text,
  View,Navigator,TouchableHighlight,
  Image,AlertIOS,NavigatorIOS,
  TextInput,Alert,AsyncStorage
} from 'react-native';
const onButtonPress = () => {
//  Alert.alert('Button has been pressed!');
};

class Login extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      error:'',
      isLogin:false,
    };
  }


    redirect(routeName){
    this.props.navigator.push({
      name: routeName,
      component: routeName,
    });
  }
  getPostsFromApi() {
     this.setState({isLogin: true});
  //   var userName = this.state.username;
  //   var password = this.state.password;
  //   fetch("http://www.zommodity.com/test/apis/index.php?action=login&username="+userName+"&password="+password)
  //     .then((response) => response.json())
  //    .catch((error) => console.warn("fetch error:", error))
  //    .then((responseJson) => {
  //      console.log(responseJson)
  // //    let res =   response.json();
  //   //  if (responseJson.status >= 200 && responseJson.status < 300) {
  //         //Handle success
  //         let accessToken = responseJson;
  //         console.log(accessToken);

  //         if (responseJson.error.errCode == 0){
  //         //  try {
  //             console.log("sucess login1");
  //             this.setState({isLogin: true});
  //             //await AsyncStorage.setItem('@UserLogID',res.results.userid);
  //             console.log("sucess login");
          
  //       }else{
  //         this.setState({isLogin: false});
  //         this.setState({error: error});
  //         Alert.alert('Login Failed')
  //       }

  

  //    })
  }
  async _userLogin() {
  // const { username, password } = this.state;
    var userName = this.state.username;
    var password = this.state.password;

  try {
    let response = await  fetch("http://www.zommodity.com/test/apis/index.php?action=login&username="+userName+"&password="+password, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let res = await response.json();
      if (response.status >= 200 && response.status < 300) {
          //Handle success
          let accessToken = res;
          console.log(accessToken);

          if (res.error.errCode == 0){
            try {
              console.log("sucess login1");
              //await AsyncStorage.setItem('@UserLogID',res.results.userid);
              console.log("sucess login");
            } catch (error) {
          Alert.alert('userIDNotAbleStored')
            }

            this.setState({isLogin: true});
      
        }else{
          this.setState({isLogin: false});
          Alert.alert('Login Failed')
        }

      } else {
          //Handle error
          let error = res;
          throw error;
      }} catch(error) {
        this.setState({isLogin: false});
        this.setState({error: error});
        console.log("error " + error);
      //  this.setState({showProgress: false});
    }

  }
  render(){

      console.log(this.state.username, 'isLoggedIn')
      if (!this.state.isLogin) {
        return (
        <View style={styles.container}>
          <Image
          style={styles.logo1}
             source={require('../Img/logo.png')}
          />
          <TextInput
          placeholder="Enter UserName"
          autoCapitalize="none"
          style={{height: 40, borderColor: '#FF7475', borderWidth: 1,marginRight: 30,marginLeft: 30,marginTop: 20}}
          value={this.state.username}
          onChangeText={(text) => this.setState({username:text})}
        />
        <TextInput
        placeholder="Enter Password"
        autoCapitalize="none"
        secureTextEntry={true}
        value={this.state.password}
        style={{height: 40, borderColor: '#FF7475', borderWidth: 1,marginRight: 30,marginLeft: 30,marginTop: 20}}
        onChangeText={(text) => this.setState({password:text})}
      />
      <View style={styles.Btncontainer}>
      <Button
          style={{fontSize: 20, color: 'white',padding: 5}}
          styleDisabled={{color: 'red'}}
          onPress={this.getPostsFromApi.bind(this)}
          >
          Sign in
        </Button>
        </View>
          <Text>{this.state.username}</Text>
          <Text>{this.state.password}</Text>
        <View style={styles.ForgotPassword}>
        <Button
            style={{fontSize: 20, color: '#637775',padding: 5}}
            styleDisabled={{color: 'red'}}>
            Forgot Password
          </Button>
          </View>

          <View style={styles.NewAccount}>
          <Button
              style={{fontSize: 20, color: '#637775',padding: 5}}
              styleDisabled={{color: 'red'}}>
              New Account
            </Button>
            </View>
        </View>
  );
      }else{
        return (
          <Home/>

        );
      }
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ForgotPassword: {
    height: 40,
    marginRight: 20,
    marginBottom: 10,
    position: 'absolute',
    bottom:0,
    left:0,
    backgroundColor: "white",
    },
    NewAccount: {
      height: 40,
      marginLeft: 20,
      marginBottom: 10,
      position: 'absolute',
      bottom:0,
      right:0,
        backgroundColor: "white",
      },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo1:{
    height: 70,
    width: 300,
    resizeMode : 'contain',
  },
  Btncontainer: {
    height: 40,
    width: 120,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
      backgroundColor: "#637775",
    },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },nav: {
    	height: 60,
      backgroundColor: '#efefef'
    },leftNavButtonText: {
      marginLeft:13,
      marginTop:2,
      width:20,
      height:20,
    },
    rightNavButtonText: {
      marginRight:13,
      marginTop:2
    },title: {
    	marginTop:4,
      fontSize:16
    },
});
export default Login
