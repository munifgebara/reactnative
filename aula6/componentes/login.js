import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Button from './button';

export default class Login extends Component {

    state = {login:'',senha:''};

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    logar(){
        console.log('State',this.state);
    }


    render() {
        const {containerStyle}=estilos;
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
