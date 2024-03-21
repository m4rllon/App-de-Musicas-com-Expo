import React, { useState } from "react";
import { FlatList, Text, View, TextInput } from "react-native";
import {dados} from "../../mocks/dados";
import ContainerAlbuns from "../../components/ContainerAlbuns";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import style from "./style";

const Stack = createNativeStackNavigator()

export default function Albuns({ navigation }){
    const [listaDeAlbuns, setListaDeAlbuns] = useState(dados)
    const [text, setText] = useState('')

    const buscar = (listaDeAlbuns) => {
        let listaFiltrada = listaDeAlbuns.filter((item)=> {
            if(item.album.toUpperCase().includes(text.toUpperCase()) || item.artista.toUpperCase().includes(text.toUpperCase())){
                return item
            } else if (text === ''){
                return item
            }
        })
       return listaFiltrada
    }

    return <>
        <View style={style.container}>
            <Text style={style.titulo}>Albuns</Text>
            <View style={style.containerBusca}>
                <View>
                    <TextInput 
                    style={style.input}
                    placeholderTextColor={'#6C6C6C'} 
                    onChangeText={setText}
                    placeholder="Buscar"/>
                    <Text style={style.linha}></Text>
                </View>
            </View>

            <View style={style.containerFlatList}>
                <FlatList 
                data={buscar(listaDeAlbuns)}
                keyExtractor={item => item.id} 
                renderItem={({item}) => {
                    return <ContainerAlbuns 
                    nomeAlbuns={item.album} 
                    artistaAlbum={item.artista} 
                    lancamentoAlbum={item.lancamento} 
                    fotoAlbum={item.foto} 
                    acao={() => navigation.navigate('Album', item)}/>}}/>
            </View>
        </View>
    </> 
}