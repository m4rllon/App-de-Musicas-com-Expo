import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#1A1717',
        flex: 1,
    },
    containerFlatList: {
        marginTop: 30
    },
    titulo: {
        fontSize: 55,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20,
        color: '#fff'
    },
    containerBusca: {
        // backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        height: 50,
        marginTop: 30,
        alignItems: 'center',
        marginLeft: 50
    },
    containerIcon: {
        marginLeft: 30,
        marginTop: 10
    },
    input: {
        height: 50,
        width: 291,
        fontWeight: 'bold',
        color: 'white'     
    },
    linha: {
        borderWidth: 1.0,
        borderColor:'#6C6C6C',
        marginTop:1,
        height: 0,
        width: 200 
    }
})