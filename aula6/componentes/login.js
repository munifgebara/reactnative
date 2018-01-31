import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Button from './button';
import { auth } from 'firebase';

export default class Login extends Component {

    state = { login: '', senha: '', mensagem: 'inicio' };

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    logar() {
        console.log('State', this.state);
        /*   auth().createUserWithEmailAndPassword('munif@munif.com.br','1234567')
   .then(a=>{console.log('OK',a)})
   .catch(b=>{console.log('Erro',b)}); 
   */

        auth().signInWithEmailAndPassword(this.state.login, this.state.senha)
            .then(a => { this.setState({ mensagem: 'logado' }) })
            .catch(a => { this.setState({ mensagem: 'erro' }) });

    }


    render() {
        const { containerStyle } = estilos;
        return (
            <ScrollView>
                <View style={containerStyle} >
                    <Text>Login</Text>
                    <TextInput
                        style={{ height: 20, width: 100 }}
                        value={this.state.login}
                        onChangeText={text => {
                            this.setState({ login: text });
                        }} />
                    <Text>Senha</Text>
                    <TextInput
                        style={{ height: 20, width: 100 }}
                        value={this.state.senha}
                        onChangeText={text => {
                            this.setState({ senha: text });
                        }} />
                    <Button onPress={() => this.logar()}>Logar</Button>
                    <Text>Mensage:{this.state.mensagem}</Text>
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
