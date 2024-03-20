import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import style from "../style";

export default function Musica({ nome, duracao, favorita, acao}){

    const [favoritar, setFavoritar] = useState(favorita)

    const marcarComoFavorita = () => {
        setFavoritar(!favoritar)
        if(favoritar){
            acao
        }
    }

    return <View style={style.containerListaMuscias}>
    <Text style={style.textoListaMuscias1}>{nome}</Text>
    <Text style={style.textoListaMuscias2}>{duracao}</Text>
    <TouchableWithoutFeedback onPress={() => marcarComoFavorita()}>
        { favoritar ?
        <Feather name="minus-circle" size={25} color={'#FF3D00'}/> :
        <Feather name="plus-circle" size={25} color={'#8FFF00'}/> }
    </TouchableWithoutFeedback>
</View>
}