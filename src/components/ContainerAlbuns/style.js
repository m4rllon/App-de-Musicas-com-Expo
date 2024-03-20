import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 15,
        marginLeft: 16,
        borderRadius: 10,
        backgroundColor: '#6C6C6C',
        width: 370,

    },
    containerTexto: {
        height: 80,
        width: 280,
        borderRadius: 10
    },
    textoAlbum: {
        fontWeight: 'bold',
        width: 'auto',
        fontSize: 17,
        color: 'white'
    },
    textoArtista:{
        width: 'auto',
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white'
    },
    textoLancamento:{
        width: 'auto',
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white'
    },
    fotos: {
        width: 80,
        height: 80,
        borderRadius: 10
    }
})