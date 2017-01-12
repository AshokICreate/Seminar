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
  View,
  TouchableHighlight
} from 'react-native';
import Login from './Components/Login.js'

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  _onPressBtn(text) {
    this.props.onTap(text)
  }

  render() {
    return (
        <TouchableHighlight style={[buttonStyles.buttonStyle, {backgroundColor: (this.props.backgroundColor=='#F79231') ? '#F79231' : '#E0E0E0'}]} onPress={() => this._onPressBtn(this.props.text)} underlayColor="#fefefe" >
          <Text style={[buttonStyles.textStyle, {color: (this.props.backgroundColor=='#F79231') ? 'white' : 'black'}]}>{this.props.text}</Text>
        </TouchableHighlight>
    )
  }
}

class CalcContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultLabelValue: '0',
      inputA: 0,
      inputB: 0
    };
    this.state.resultLabelValue = '0'
    this.state.inputA = 0
    this.state.inputB = 0
  }

  onTap(text) {
    switch (text) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        this.setState({resultLabelValue:this.state.resultLabelValue + text});
        break;
      case '+':
        this.setState({resultLabelValue:this.state.resultLabelValue + text});
        break;
      case '-':
        this.setState({resultLabelValue:this.state.resultLabelValue + text});
        break;
      case '*':
        this.setState({resultLabelValue:this.state.resultLabelValue + text});
        break;
      case '/':
        this.setState({resultLabelValue:this.state.resultLabelValue + text});
        break;
      case '=':
        if (this.state.resultLabelValue.includes('+')) {
          var arr = this.state.resultLabelValue.split('+')
          var inputA = Number(arr[0])
          var inputB = Number(arr[1])
          var result = inputA + inputB
        } else if (this.state.resultLabelValue.includes('-')) {
          var arr = this.state.resultLabelValue.split('-')
          var inputA = Number(arr[0])
          var inputB = Number(arr[1])
          var result = inputA - inputB
        } else if (this.state.resultLabelValue.includes('*')) {
          var arr = this.state.resultLabelValue.split('*')
          var inputA = Number(arr[0])
          var inputB = Number(arr[1])
          var result = inputA * inputB
        } else if (this.state.resultLabelValue.includes('/')) {
          var arr = this.state.resultLabelValue.split('/')
          var inputA = Number(arr[0])
          var inputB = Number(arr[1])
          var result = inputA / inputB
        } else {
          alert("Found invalid operator please check...")
        }
        this.setState({resultLabelValue: result});
        break;
      case '%':
        alert("Implementation Not Yet Provided...")
        break;
      case 'AC':
        this.setState({resultLabelValue:0});
        break;
      case '.':
        alert("Implementation Not Yet Provided...")
        break;
      }

  }

  render() {
    return (
      <View style={calCStyles.container}>
        <View style={calCStyles.resultLabelContainerStyle, {alignItems: 'center', justifyContent: 'center', padding: 60}}>
          <Text style={[{color: 'white', fontSize: 30, fontWeight: 'bold', alignSelf: 'center', paddingBottom: 5}]}>Calculator</Text>
        </View>
        <View style={[calCStyles.resultLabelContainerStyle, {flexDirection: 'row-reverse'}]}>
          <Text style={[{color: 'white', fontSize: 30, fontWeight: 'bold', alignSelf: 'center', paddingRight: 25}]}>{this.state.resultLabelValue }</Text>
        </View>
        <View style={calCStyles.resultLabelContainerStyle}>
          <View style={calCStyles.expandButtonStyle}>
            <Button text="AC" onTap={this.onTap.bind(this)}/>
          </View>
          <View style={calCStyles.expandButtonStyle}>
            <Button text="%" onTap={this.onTap.bind(this)}/>
            <Button text="/" onTap={this.onTap.bind(this)} backgroundColor="#F79231"/>
          </View>
        </View>
        <View style={calCStyles.resultLabelContainerStyle}>
          <Button text="7" onTap={this.onTap.bind(this)}/>
          <Button text="8" onTap={this.onTap.bind(this)}/>
          <Button text="9" onTap={this.onTap.bind(this)}/>
          <Button text="*" onTap={this.onTap.bind(this)} backgroundColor="#F79231"/>
        </View>
        <View style={calCStyles.resultLabelContainerStyle}>
          <Button text="4" onTap={this.onTap.bind(this)}/>
          <Button text="5" onTap={this.onTap.bind(this)}/>
          <Button text="6" onTap={this.onTap.bind(this)}/>
          <Button text="-" onTap={this.onTap.bind(this)} backgroundColor="#F79231"/>
        </View>
        <View style={calCStyles.resultLabelContainerStyle}>
          <Button text="1" onTap={this.onTap.bind(this)}/>
          <Button text="2" onTap={this.onTap.bind(this)}/>
          <Button text="3" onTap={this.onTap.bind(this)}/>
          <Button text="+" onTap={this.onTap.bind(this)} backgroundColor="#F79231"/>
        </View>
        <View style={calCStyles.resultLabelContainerStyle}>
          <View style={calCStyles.expandButtonStyle}>
            <Button text="0" onTap={this.onTap.bind(this)}/>
          </View>
          <View style={calCStyles.expandButtonStyle}>
            <Button text="." onTap={this.onTap.bind(this)}/>
            <Button text="=" onTap={this.onTap.bind(this)} backgroundColor="#F79231"/>
          </View>
        </View>
      </View>
    );
  }
}


export default class MainApp extends Component {
  constructor(props) {
    super(props);
    console.yellowBox = true;
  }

  render() {
    return (
      <View style={calCStyles.container}>
        <CalcContainer/>
      </View>
    );
  }
}

const buttonStyles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});

const calCStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
  },
  resultLabelContainerStyle: {
    flex: 1/7,
    flexDirection: 'row',
    // backgroundColor: '#292929',
    marginRight: 0.1,
    marginBottom: 0.1,
  },
  resultLabelStyle: {
      flex: 1,
      fontSize: 40,
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: '#292929',
  },
  expandButtonStyle: {
    flex: 1/2,
    flexDirection: 'row'
  }
});

const mainAppStyles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('calc', () => MainApp);
// AppRegistry.registerComponent('calc', () => Login); //LoginScreen
