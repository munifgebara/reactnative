import React, { Component } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import Button from './button';
import LugaresService from '../services/lugares.service';

export default class Lugar extends Component {
    static navigationOptions = {
        title: 'Lugar'
    }
    state = {};

    async componentWillMount() {
        if (!this.props.navigation.state.params.lugar.id) {
            console.log('--->Novo');
            this.setState({ lugar: this.props.navigation.state.params.lugar });
        }
        else {
            console.log('--->Editando');

            let lugar = await LugaresService.view(this.props.navigation.state.params.lugar.id);
            this.setState({ lugar: lugar });
        }
    }

    componentWillUnmount() {
        this.props.navigation.state.params.saindo();
    }
    salvar(lugar) {
        if (this.state.lugar.id) {
            LugaresService.update(this.state.lugar);
        }
        else {
            LugaresService.insert(this.state.lugar);
        }
        this.props.navigation.goBack();
    }

    excluir(lugar) {
        LugaresService.delete(this.state.lugar.id);
        this.props.navigation.goBack();
    }

    renderDelete() {
        if (this.state.lugar.id) {
            return (<Button onPress={() => this.excluir(this.state.lugar)}>Excluir</Button>);
        }

        return;
    }

    render() {
        const { imagemStyle, containerStyle } = estilos;
        if (this.state.lugar) {
            return (
                <ScrollView>
                    <View style={containerStyle} >
                        <TextInput
                            style={{ height: 20, width: 100 }}
                            value={this.state.lugar.data.nome}
                            onChangeText={text => {
                                let s = { ...this.state.lugar };
                                s.data.nome = text;
                                this.setState({ lugar: s });
                            }} />
                        <Image style={imagemStyle} source={{ uri: this.state.lugar.data.imagem }} />
                        {this.renderDelete()}
                        <Button onPress={() => this.salvar(this.state.lugar)}>Salvar</Button>
                    </View>
                </ScrollView>
            );
        }
        else {
            return <View style={containerStyle}><Text>Carregando</Text></View>
        }

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
