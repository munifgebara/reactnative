import React,{ Component } from 'react';
import { View, Text } from 'react-native';

class ListaCoisas extends  Component {
    componentWillMount() {
        console.log('ListaCoisas.componentWillMount()');
    }
    render() {
        return(
            <View>
                <Text>Lista de Coisas</Text>
            </View>
        );
    }
}

export default ListaCoisas;
