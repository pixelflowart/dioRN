import React from "react";
import {View, 
        Image, 
        Text, 
        StyleSheet, 
        SafeAreaView, 
        StatusBar,
        Pressable
        } from 'react-native';

const colorBg = '#010409';
const colorFont = '#C9D1D9';
const colorNick = '#4F565E';
const imgProfileGit = 'https://avatars.githubusercontent.com/u/54423803?v=4';
const urlGithub = 'https://github.com/pixelflowart';
const App = () => {

    const handlePressGotoGithub = async () => {
        const res = await Linking.canOpenUrl(urlGithub);
        if(res){
            await Linking.canOpenUrl(urlGithub)
        };
    };
    return (
    <SafeAreaView  style={style.container}>
        <StatusBar backgroundColor={colorBg} barStyle={'çight-content'}/>
    <View style={style.content}>
        <Image accessibilityLabel="Daniel em fundo colorido" style={style.avatar} source={{uri:imgProfileGit}}/>
        <Text accessibilityLabel="Nome:Daniel Nobre" style={[style.textDefault, style.Name]}>Daniel Nobre</Text>
        <Text accessibilityLabel="Nick:Pixelflowart" style={[style.textDefault, style.textNick]}>Pixelflowart</Text>
        <Text accessibilityLabel="Description:Developer, Pixel/Generative artist, psychoanalyst in a trance through unconscious worlds. " style={style.textDefault}>Developer, Pixel/Generative artist, psychoanalyst in a trance through unconscious worlds.</Text>
        <Pressable onPress={handlePressGotoGithub}>
        <View style={style.Button}>
        <Text accessibilityLabel="Open in Github"  style={[style.textDefault]} > Open in Github </Text>
        </View>
        </Pressable>
    </View>
    </SafeAreaView>
);};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorBg,
        flex: 1, justifyContent: "center",
    
    },
    content:{
        alignItems: "center",
        
    },
    Name: {
        marginTop: 20,
        fontWeight:"bold",
        fontSize: 50,
    },   
    textDefault: {
        color: colorFont,
        fontSize: 20,
    },
    textNick:{
        color: colorNick,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: colorNick,
        borderWidth: 5,
    },
    Button: {
        margin:10,
        padding:10,
        backgroundColor: colorNick,
        borderRadius: 10,
    },
    ButtonOver: {
        margin:10,
        padding:10,
        backgroundColor: colorFont,
        borderRadius: 10,
        color: 'yellow',
    },
});