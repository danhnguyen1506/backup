
import { StyleSheet } from 'react-native';
import * as Utils from './Utils';
import * as define from './define';

//*********************************** FONT ********************************************//
export let fontFamily = 'Helvetica';
export let fontSize = 14;
export let grayColor = "#e4e5e7";
export let highGrayColor = "#9b9aa1";
export let highYellowColor = "#ffab00";
export let transparentColor = "transparent";


let appSize = Utils.appSize();


export let DefaultFontSize = 15;

export let buttonHeight = 40;
export let buttonWidth  = 105;
export let ButtonStyles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 30,
                
    },
    left: {        
        position: "absolute",
        left: 5,
        
    },
    right: {
        
        position: "absolute",
        right: 5,        
    },
    center:{        
        marginLeft: (appSize.width - buttonWidth)/2,
    },
    
    button_container: {
        width: buttonWidth,
        // height: buttonHeight,
        minHeight: buttonHeight,
        maxHeight:buttonHeight*3,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: define.DefaultTextFontSize,
        color: "white",
        textAlign:"center",        
    },
    bottom_container:{
        height:  buttonHeight,
    }

});