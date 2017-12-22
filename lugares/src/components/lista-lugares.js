import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { setTimeout } from 'core-js/library/web/timers';
import Button from './button';
import LugaresService from '../services/lugares.service';
import Titulo from './titulo';

class ListaLugares extends Component {



    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerRight = (
            <Button
                onPress={
                    params.novo
                }


            >Novo</Button>
        );
        return { headerRight };
    };

    state = { lista: [], flag: 0 };

    componentWillMount() {
        this.carregaLista();
    }
    componentDidMount() {
        this.props.navigation.setParams({ novo: this._novo });
    }
    _novo = () => {

        this.detalhes({ data: { nome: 'Novo', imagem: "https://github.com/munifgebara/reactnative/raw/master/imagens/cerveja.jpg" } });

    }




    detalhes(item) {
        console.log(item);
        const { navigate } = this.props.navigation;
        navigate('Lugar', { lugar: item, saindo: () => { this.carregaLista(); } });
    }

    renderItem() {
        const { imagemStyle, containerStyle } = estilos;
        return this.state.lista.map(lugar =>
            <View style={containerStyle} key={lugar.id}>
                <Text>{lugar.data.nome}</Text>
                <Image style={imagemStyle} source={{ uri: lugar.data.imagem }} />
                <Button onPress={() => this.detalhes(lugar)}>Detalhes</Button>
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
        let lugares = await (LugaresService.list());
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