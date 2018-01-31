import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Button from './button';
import { auth } from 'firebase';

export default class Lista extends Component {
    static navigationOptions = {
        title: 'Lista'
}

    render() {
        const { containerStyle } = estilos;
        return (
            <ScrollView>
                <View style={containerStyle} >
                    <Text>Logado</Text>
                </View>
            </ScrollView>
        );
    }

}

const estilos = {
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'column'
    }
};
