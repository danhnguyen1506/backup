import React from 'react';

import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { BaseScreen } from '../BaseScreen';
import * as messages from '../../common/messages';
import * as Utils from '../../common/Utils';
import * as define from '../../common/define';
import * as CommonStyles from '../../common/StyleSheet';
import * as FlowProcess from '../../controllers/FlowProcess';

export default class AboutAppScreen extends BaseScreen {
    render() {
        
        return (
            <View style={styles.container}>
                <Image source={{ uri: FlowProcess.imagePathWithName("Hinh Tony.JPG")  }} style={styles.image}/>            
                <Text style={styles.name} >Tony Coffey </Text>
                <Text style={styles.text} >Paramedic Úc </Text>
                
            </View>

        );
    }

}



let appSize = Utils.appSize();
let marginLeft = 20;
let containerWith = appSize.width - 2 * marginLeft;
const styles = StyleSheet.create({
    container: {        
        alignItems: "center",
        marginTop: define.MarginTop,
    },
    image:{
        width:200,
        height:200,
        marginBottom:20,        
    },
    text:{
        fontSize:define.DefaultTextFontSize,
        marginBottom:20,        
    },
    name:{
        fontSize:define.DefaultTextFontSize+2,
        marginBottom:20,        
    }


});
