import React from 'react';
import { View, Text } from 'react-native';

const Titulo = (props) => {

    console.log('Titulo props',props);


    const { estiloView, estiloText } = estilos;
    return (
        <View style={estiloView}>
            <Text style={estiloText}>{props.texto}</Text>
        </View>
    );
};

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



export default Titulo;
