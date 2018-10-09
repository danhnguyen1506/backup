import React from 'react';

import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { BaseScreen } from '../BaseScreen';
import * as messages from '../../common/messages';
import * as Utils from '../../common/Utils';
import * as define from '../../common/define';
import * as CommonStyleSheet from '../../common/StyleSheet';

// import TextFit from "react-native-textfit";

let appSize = Utils.appSize();
export default class ThumbWithTextComponent extends BaseScreen {
    data: any;
    click: any;
    numberOfColumn = 3;

    private styles:any;

    private textHeight = 0;
    private contentWidth = 0;

    constructor(prop) {
        super(prop);
        this.data = prop.data;
        this.click = prop.click;
        if(prop.numberOfColumn){
            this.numberOfColumn = prop.numberOfColumn;
        }
        
        
        let containerWidth = appSize.width / this.numberOfColumn;
        let containerHeight = appSize.height / 4;
        let padding = 5;
        let imageContainerWidth = containerWidth - 2 * padding;
        let imageContainerHeight = containerHeight - 2 * padding;

        this.contentWidth = imageContainerWidth;
        this.styles = StyleSheet.create({
            container: {
                width: containerWidth,
                height: containerHeight,
                padding: 5,
                alignItems: "center",
            },
            image: {
                flex: 1,
            },
            item: {
                width: imageContainerWidth,
                height: imageContainerHeight,
            },
            text: {
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                fontSize: CommonStyleSheet.DefaultFontSize,
                position: "absolute",
                bottom: 0,
                paddingTop:5,
                paddingBottom:5,
                width: imageContainerWidth,                
                color: "white",
                textAlign: "center",
            },

        });


    }

    async componentWillMount() {
        
        
    }

    render() {
        
        let text = this.data[define.TEXT];
        let image_url = this.data[define.IMAGE];
        
        return (
            <TouchableOpacity style={this.styles.container} onPress={() => this.click(this.data)}>
                <View style={this.styles.item}>
                    <Image style={this.styles.image}
                        source={{ uri: image_url }}
                    />
                    <Text style={this.styles.text}> {text}</Text>
                </View>

            </TouchableOpacity>
        );
    }
}

