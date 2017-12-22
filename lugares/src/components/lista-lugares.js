import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { setTimeout } from 'core-js/library/web/timers';
import Button from './button';
import LugaresService from '../services/lugares.service';

class ListaLugares extends Component {

    state = { lista: [], flag: 0 };

    componentWillMount() {
        this.carregaLista();
    }

    remover(item) {
        item.data.teste=1;
        LugaresService.view(item.id).then(
            re=>console.log(re)
        );
        let l = this.state.lista.slice(0);
        let i = l.indexOf(item);
        l.splice(i, 1);
        this.setState({ lista: l });
    }

    renderItem() {
        const { imagemStyle, containerStyle } = estilos;
        return this.state.lista.map(lugar =>
            <View style={containerStyle} key={lugar.id}>
                <Text>{lugar.data.nome}</Text>
                <Image style={imagemStyle} source={{ uri: lugar.data.imagem }} />
                <Button onPress={() => this.remover(lugar)}>Remover</Button>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderItem()}
            </ScrollView>
        );
    }

    async carregaLista() {
        let lugares= await (LugaresService.list());
        this.setState({ lista: lugares });
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


export default ListaLugares;