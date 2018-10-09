import React from 'react';

import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { BaseScreen } from '../BaseScreen';
import * as messages from '../../common/messages';
import * as Utils from '../../common/Utils';
import * as define from '../../common/define';
import * as CommonStyleSheet from '../../common/StyleSheet';

enum TextType {
    Normal,
    Bold,
    Underline,
}

export default class TextComponent extends BaseScreen {
    data: any;

    constructor(prop) {
        super(prop);
        this.data = prop.data;
    }

}

class SubText extends BaseScreen {
    text: string;
    type: TextType;

    constructor(prop) {
        super(prop);
        this.text = prop.text;
        this.type = prop.type;
    }

    render() {
        let style = [styles.common];
        if (this.type == TextType.Bold) {
            style.push(styles.bold);
        }
        return (
            <Text style={style}>{this.text}</Text>
        );

    }

}

let defaultFontSize = 14;
const styles = StyleSheet.create({
    common: {
        fontSize: defaultFontSize,
    },
    bold: {
        fontWeight: "bold",
    },
    normal: {

    }


});