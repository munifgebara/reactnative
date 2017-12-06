import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { setTimeout } from 'core-js/library/web/timers';


class ListaCoisas extends Component {

    state = { lista: [], flag: 0 };

    componentWillMount() {
        this.carregaLista();
    }

    renderCoisa() {
        return this.state.lista.map(coisa => <Text key={coisa.produto}>{coisa.produto}</Text>);
    }

    render() {
        return (
            <View>
                {this.renderCoisa()}
            </View>
        );
    }

    carregaLista() {
        fetch('https://raw.githubusercontent.com/munifgebara/reactnative/master/lista/lista.json')
            .then(response =>  response.json().then(data=>{
                this.setState({lista:data});
            }))
            .catch(error => {
                this.setState({lista:[{produto:'Impossível carregar a lista'}]});
            });

    }
}

export default ListaCoisas;