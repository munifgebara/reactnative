import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Button from './button';


class ListaCoisas extends Component {

    state = { lista: [{ id: 0, produto: 'Carregando...' }] };

    urlDaApi = 'https://raw.githubusercontent.com/munifgebara/reactnative/master/lista/lista.json';

    componentWillMount() {
        console.log('ListaCoisas.componentWillMount()');
        this.carregaLista();
    }

    carregaLista() {
        fetch(this.urlDaApi)
            .then(resposta => {
                resposta.json().then(data => {
                    console.log(data);
                    this.setState({ lista: data });
                })

                    .catch(erro => {
                        this.setState(
                            { lista: [{ id: 0, produto: 'Deu erro' }] }
                        );
                    })
            })
            ;
    }

    remove(coisa){
        console.log('Removendo',coisa);
    }

    renderCoisas() {
        const { imagemStyle, containerStyle } = estilos;
        return this.state.lista.map(
            coisa =>
                <View style={containerStyle} key={coisa.id}>
                    <Text>{coisa.produto}</Text>
                    <Image style={imagemStyle} source={{ uri: coisa.imagem }} />
                    <Button onPress={()=>{this.remove(coisa);}}>Remover</Button>
                </View>

        );
    }


    render() {
        console.log('Lista.Render');
        return (
            <ScrollView>
                {this.renderCoisas()}
            </ScrollView>
        );
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
