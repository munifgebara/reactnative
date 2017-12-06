import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Titulo from './src/components/titulo';
import ListaCoisas from './src/components/lista-coisas';
const App = () => {
    return (
        <View>
            <Titulo texto={'Lista de Coisas'} />
            <ListaCoisas />
        </View>

    );
};

AppRegistry.registerComponent('lista', () => App);
