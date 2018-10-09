
import React, { Component } from 'react';
import { SectionList, TextInput, KeyboardAvoidingView, Animated, Platform, PanResponder, ScrollView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import * as define from '../../common/define';
import * as CommonStyleSheet from '../../common/StyleSheet';
import * as messages from '../../common/messages';
import * as Utils from '../../common/Utils';

import BaseModel from '../../models/BaseModel';

export default class HeaderComponent extends Component {
    title: string;

    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.title}
                </Text>
                <View style={styles.line} />

            </View>
        );
    }
}
let height = 44;
let appSize = Utils.appSize();
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: height,
        width: appSize.width,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:20,
    },
    text: {
        fontSize: 17,
        color: "#333333",
        flex: 1,
        textAlign: "center",
        backgroundColor: "transparent",
        fontWeight: "bold",
        textAlignVertical: "center",//android
    },
    line:{
        backgroundColor:"rgb(234,234,234)",
        height:1,
        width: appSize.width,
        position:"absolute",
        bottom:0,
    }
});