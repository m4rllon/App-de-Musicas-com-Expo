import React, { useState } from "react";
import { Button, Text, View, Image, ImageBackground, FlatList, TouchableWithoutFeedback } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
// import { play } from 'react-native-vector-icons/Feather'

import style from './style'
import Musica from "./Musica";

export default function Album({route, navigation}){
    const [listaFavoritas, setListaFavoritas] = useState([])
    
    const {favorita} = route.params
    const {foto} = route.params
    const {album} = route.params
    const {artista} = route.params
    const {lancamento} = route.params
    const {musicas} = route.params

    // console.log(musicas)


    const addFavoritas = (musica) => {
        setListaFavoritas((arr) => [...arr, musica])
        console.log(listaFavoritas)
    }


    return <View style={style.container}>
        <ImageBackground style={style.imageBackground} source={foto}>
            {/* <Button title="Voltar" onPress={() => navigation.goBack()}/> */}
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Feather name="chevron-left" size={40} color={'#fff'}/>
            </TouchableWithoutFeedback>
            <Text style={style.textoAlbum}>{album}</Text>
            <Text style={style.textoPadrao}>({lancamento}) {artista}</Text>
        </ImageBackground>
        <View style={style.container2}>
            <Text style={style.textoSubTitulo}>Músicas</Text>
            <View style={style.containerMuscias}>
                <Text style={style.textoOpaco}>Nome</Text>
                <Text style={style.textoOpaco}>Duração</Text>
            </View>
            <Text style={style.linha}></Text>
            <FlatList 
            data={musicas} 
            keyExtractor={item => item.id} 
            renderItem={({item}) => {
                return <Musica nome={item.nome} duracao={item.duracao} favorita={item.favorita} acao={() => addFavoritas(item)}/>
            }}/>
        </View>
    </View>
}