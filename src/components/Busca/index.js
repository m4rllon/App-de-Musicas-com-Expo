import React, { useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import {Feather} from 'react-native-vector-icons'

import style from "./style";

export default function Busca({conteudoFlatList, novoLista}){
    const [text, setText] = useState('')
    

    const buscar = () => {
        let listaFiltrada = conteudoFlatList.map((item)=> {
            if(item.album.includes(text) || item.artista.includes(text)){
                return item
            }
        })
        console.log(listaFiltrada)
    }

    return<View style={style.containerBusca}>
        <TouchableOpacity style={style.containerIcon} onPress={buscar}>
            <Feather name='search' size={35} color="#FF3D00"/>
        </TouchableOpacity>
        <View>
            <TextInput 
            style={style.input}
            placeholderTextColor={'#6C6C6C'} 
            onChangeText={setText}
            placeholder="Buscar"/>
            <Text style={style.linha}></Text>
        </View>
    </View>
}