//Design: http://ugarov.me/tnc-track-iphone-app-design/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import dimensions from 'Dimensions'
var width=dimensions.get('window').width;

export default class Login extends React.Component{
  render() {
    return (
      <View style={containerStyle.container}>

          <View style={topContainerStyle.topContainer}>
            <Text style={topContainerStyle.textStyle}>Inspire Me</Text>
          </View>

          <View style={middleContainerStyle.middleContainer}>

            <View style={middleContainerStyle.row_1_Style}>
                <Text style={middleContainerStyle.textStyle}>Login</Text>
            </View>

            <View style={middleContainerStyle.row_2_Style}>
                    <TextInput ref="usr"
                               style={middleContainerStyle.textInputStyle}
                               placeholder= "Your email..."
                               returnKeyType = {"next"}
                               autoFocus = {false}
                               autoCapitalize = "none"
                               autoCorrect = {false}
                               clearButtonMode = 'while-editing'
                               onChangeText={(text) => {
                                 console.log("onChangeText")
                               }}
                               onSubmitEditing={(event) => {
                                 console.log("onSubmitEditing")
                               }}
                     />
                     <TextInput ref="psw"
                                style={middleContainerStyle.textInputStyle}
                                placeholder= "Password"
                                autoFocus = {false}
                                autoCapitalize = "none"
                                autoCorrect = {false}
                                returnKeyType = {'done'}
                                secureTextEntry = {true}
                                clearButtonMode = 'while-editing'
                                onChangeText={(text) => {
                                  console.log("onChangeText")
                                }}
                      />
                      <TouchableHighlight underlayColor="#FFFFFF" style={middleContainerStyle.loginButtonContainerStyle}>
                          <Text style={middleContainerStyle.loginButtonStyle}>Login Now</Text>
                      </TouchableHighlight>
                      <TouchableHighlight underlayColor="#FFFFFF" style={middleContainerStyle.forgotPasswordButtonContainerStyle}>
                          <Text style={middleContainerStyle.forgotButtonStyle}> Forgot Password?</Text>
                      </TouchableHighlight>
                      <TouchableHighlight underlayColor="#FFFFFF" style={middleContainerStyle.createAccountButtonContainerStyle}>
                          <Text style={middleContainerStyle.createAccountButtonStyle}>Create Account!</Text>
                      </TouchableHighlight>
                </View>

            </View>

          <View style={bottomContainerStyle.bottomContainer}>
            {/* <AdMobManager style={bottomContainerStyle.adMobMangerStyle} bannerSize = {bannerSize} testDeviceID = {testDeviceID} adUnitID = {adUnitID}/> */}
          </View>
      </View>
    );
  }
}

const containerStyle = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
  },
});

const topContainerStyle = StyleSheet.create({
    topContainer: {
      flex: 0.1,
      backgroundColor: '#2F94DD',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle: {
      // fontFamily: 'Roboto-Black',
      fontSize: 20,
      color: '#FFFFFF'
    }
});

const middleContainerStyle = StyleSheet.create({
  middleContainer: {
    flex: 0.8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 25,
    color: '#000000'
  },
  row_1_Style: {
    flex: 0.1,
    marginTop: 20
  },
  row_2_Style: {
    flex: 0.9,
  },
  textInputStyle: {
    height: 45,
    width: width - 20,
    borderColor: 'grey',
    borderWidth: 0.2,
    backgroundColor: '#F2F2F2',
    opacity: 1.0,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
    // fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: 'black',
  },
  loginButtonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: width - 20,
    backgroundColor: '#2F94DD',
    opacity: 1.0,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    marginTop: 15,
    marginBottom: 30,
  },
  loginButtonStyle: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: '#FFFFFF'
  },
  forgotPasswordButtonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: width - 20,
    backgroundColor: '#FFFFFF',
  },
  forgotButtonStyle: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: '#2F94DD'
  },
  createAccountButtonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.0,
    borderColor: '#2F94DD',
    height: 45,
    width: width - 20,
    backgroundColor: '#FFFFFF',
    opacity: 1.0,
    borderRadius: 10,
    marginTop: 100,
  },
  createAccountButtonStyle: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: '#2F94DD'
  },
});

const bottomContainerStyle = StyleSheet.create({
  bottomContainer: {
    flex: 0.063,
    backgroundColor: '#2F94DD',
  },
  adMobMangerStyle: {
    flex: 1
  }
});
