/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { initializeApp} from 'firebase';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './componentes/login';
import Lista from './componentes/lista';


export default class App extends Component {

  componentWillMount(){
    initializeApp(config);

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Aula 6!
        </Text>
        <Lista/>
        
      </View>
    );
  }
}

const config = {
  apiKey: "AIzaSyDYnOYzNwnnn5NtCb6OdSwcCY1OvOnadE0",
  authDomain: "aula-2018.firebaseapp.com",
  databaseURL: "https://aula-2018.firebaseio.com",
  projectId: "aula-2018",
  storageBucket: "aula-2018.appspot.com",
  messagingSenderId: "116877868019"
};


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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
