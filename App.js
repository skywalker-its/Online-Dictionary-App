import React, { Component } from 'react';
import { View } from 'react-native';
import HomeScreen from './components/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
      </View>
    )
  }
}