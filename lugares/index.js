
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Titulo from './src/components/titulo';
import ListaLugares from './src/components/lista-lugares';

const App = () => {
    
    return (
        <View>
            <Titulo texto={'Lugares Legais'} />
            <ListaLugares />
        </View>

    );
};

AppRegistry.registerComponent('lugares', () => App);
