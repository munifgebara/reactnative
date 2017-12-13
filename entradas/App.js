import React, { Component } from 'react';
import { View, Text, Button, TextInput, FlatList, AsyncStorage } from 'react-native';

class App extends Component {

  state = { valor: 0, text: '10', lista: [{key:1,nome:'abacate'}], produto: 'tomate' };

  componentWillMount() {
    console.log('Inicio');
    AsyncStorage.getItem('lista').then(valor=>{
      if (valor){
        const v=JSON.parse(valor);
        console.log(v);
        this.setState({lista:v});
      }
      else{
        console.log('Lista vazia');
      }
    });
}



  render() {
    const { estiloText, estiloView } = estilos;
    return (
      <View>
        <View style={estiloView}>
          <Text style={estiloText}>Entradas</Text>
        </View>
        <Text>Contador {this.state.valor}</Text>
        <Button style={"bacgroundColor='#ff0000"}
          onPress={() => this.botaoIncrementa()}
          title="Incrementa"
          color="#ff0000"
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button style={"bacgroundColor='#ff0000"}
          onPress={() => this.setState({ valor: Number(this.state.text) })}
          title="Atribui"
          color="#ff0000"
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(produto) => this.setState({ produto })}
          value={this.state.produto}
        />
        <Button style={"bacgroundColor='#ff0000"}
          onPress={() => {
            let l = this.state.lista.slice();
            l.push({nome:this.state.produto,key:this.state.lista.length+1});
            console.log(l);
            this.setState({ produto: '', lista: l });
            AsyncStorage.setItem('lista',JSON.stringify(l));

          }}
          title="Adiciona"
          color="#ff0000"
        />
        <FlatList
          data={this.state.lista}
          renderItem={({ item }) => <Text>{item.nome}</Text>}
        />



      </View>
    );
  }


  botaoIncrementa(evento) {
    const v = this.state.valor + 1;
    this.setState({ valor: v });

  }

}


const estilos = {
  estiloView: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  estiloText: {
    fontSize: 20
  }
};



export default App;
