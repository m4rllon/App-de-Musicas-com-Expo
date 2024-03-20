import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#1A1717',
        flex: 1
    },
    containerMuscias: {
        flexDirection: 'row',
        gap: 150,
        marginTop: 10
    },
    imageBackground: {
        height: 250,
        gap: 15,
        padding: 10,
        paddingTop: 20,
        justifyContent: 'center',
    },
    container2: {
        padding: 20
    },
    textoAlbum:{
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },
    textoPadrao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textoSubTitulo: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    textoOpaco:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 0.5
    },
    linha: {
        borderWidth: 1.0,
        borderColor:'#6C6C6C',
        marginTop: 3,
        // marginLeft: 20,
        height: 0,
        width: 370
    },
    containerListaMuscias: {
        flexDirection:'row',
        marginTop: 20,
        gap: 10
    },
    textoListaMuscias1: {
        width: 200,
        color: '#fff',
        // backgroundColor: 'green',
        fontSize: 18,
    },
    textoListaMuscias2:{
        // backgroundColor:'blue',
        fontSize: 18,
        color: '#fff',
        width: 100
    }
})