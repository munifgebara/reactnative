import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { setTimeout } from 'core-js/library/web/timers';
import Button from './button';


class ListaCoisas extends Component {

    state = { lista: [], flag: 0 };

    componentWillMount() {
        this.carregaLista();
    }

    comprar(coisa) {
        
        let l = this.state.lista.slice(0);
        let i=l.indexOf(coisa);
        l.splice(i,1);
        //alert(coisa.produto);
        this.setState({lista:l});
    }

    renderCoisa() {
        const { imagemStyle, containerStyle } = estilos;
        return this.state.lista.map(coisa =>
            <View style={containerStyle} key={coisa.id}>
                <Text>{coisa.produto}</Text>
                <Image style={imagemStyle} source={{ uri: coisa.imagem }} />
                <Button onPress={() => this.comprar(coisa)}>Remover</Button>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderCoisa()}
            </ScrollView>
        );
    }

    carregaLista() {
        fetch('https://raw.githubusercontent.com/munifgebara/reactnative/master/lista/lista.json')
            .then(response => response.json().then(data => {
                this.setState({ lista: data });
            }))
            .catch(error => {
                this.setState({ lista: [{ produto: 'Impossível carregar a lista' }] });
            });

    }
}

const estilos = {
    imagemStyle: {
        height: 300,

        width: 300

    },
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'column'
    }
};


export default ListaCoisas;