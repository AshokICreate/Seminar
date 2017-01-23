/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class calc extends Component {
  constructor(props) {
  super(props);
  this.state = {

    }
    console.log("Constructor")
  }

  componentWillMount() {
    console.log("componentWillMount:- This method excuted only once. before render occurs for the first time.")
  }

  render() {
    console.log("render:- render method must return a react native component.")
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }

  componentDidMount() {
    console.log("componentDidMount:- This method is executed only once. after rendering occurs for the first time. you can access react-native components using this.refs property.")
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
