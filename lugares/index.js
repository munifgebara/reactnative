
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, AppRegistry, View } from 'react-native';
import ListaLugares from './src/components/lista-lugares';
import Lugar from './src/components/lugar';

const App = StackNavigator({
    Lista:{screen:ListaLugares},
    Lugar:{screen:Lugar}
});


AppRegistry.registerComponent('lugares', () => App);
