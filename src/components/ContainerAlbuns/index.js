import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

import style from "./style";

export default function ContainerAlbuns({nomeAlbuns, artistaAlbum, lancamentoAlbum, fotoAlbum, acao}){

    return <TouchableOpacity style={style.container} onPress={acao}>
        <View>
            <Image style={style.fotos} source={fotoAlbum}/>
        </View>
        <View style={style.containerTexto}>
            <Text style={style.textoAlbum}>{nomeAlbuns}</Text>
            <Text style={style.textoArtista}>{artistaAlbum}</Text>
            <Text style={style.textoLancamento}>{lancamentoAlbum}</Text>
        </View>
    </TouchableOpacity>
}