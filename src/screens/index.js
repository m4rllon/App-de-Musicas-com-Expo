import React from "react";
import Albuns from "./Albuns/";
import Favoritas from "./Favoritas";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Album from "./Albuns/Album";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function AlbunsScreen(){
    

    return<Stack.Navigator initialRouteName="Albuns" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="ListaDeAlbuns" component={Albuns}/>
        <Stack.Screen name="Album" component={Album}/>
    </Stack.Navigator>
}

export default function TopMusicas(){

    return <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="Albuns" component={AlbunsScreen}/>
            <Tab.Screen name="Favoritas" component={Favoritas}/>
        </Tab.Navigator>
    </NavigationContainer>
}