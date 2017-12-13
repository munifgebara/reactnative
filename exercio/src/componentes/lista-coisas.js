import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListaCoisas extends Component {

    state = { lista: [] };

    componentWillMount() { 
        console.log('ListaCoisas.componentWillMount()');
        this.carregaLista();
    }

    carregaLista() {
        setTimeout(() => {
            console.log('Lista Carregada');
            //this.state={COMPLETAMENTE ERRADO};
            this.setState({
                lista: [
                    { id:1,nome: 'Arroz' },
                    { id:2,nome: 'Feijão' }]
            });
        }
            , 2000);
    }

   renderCoisas(){
       return this.state.lista.map(
           coisa=><Text key={coisa.id}>{coisa.nome}</Text>
       );
   }


    render() {
        console.log('Lista.Render');
        return (
            <View>
                {this.renderCoisas()}
            </View>
        );
    }
}

export default ListaCoisas;
