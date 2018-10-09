import React from 'react';

import { Linking,TouchableOpacity,Image, ListView, StyleSheet, Text, View } from 'react-native';

import { BaseScreen } from '../screens/BaseScreen';
import * as messages from '../common/messages';

import * as define from '../common/define';
let Utils = define.Utils;
import ThumbWithTextComponent from '../screens/common/ThumbWithTextComponent';
import * as Flow from './ScreenFlow';
import ComponentRender from './ComponentRender';

export default class ImageComponentRender extends ComponentRender {

    constructor(props?) {
        super(props);
    }

    render() {
        let image_style = {};
        let width = this.info.width;
        if (width.search("%") != -1) {
            let percent = width.replace("%", "");
            image_style[define.WIDTH] = appSize.width * (Number(percent) / 100);
        } else {
            image_style[define.WIDTH] = Number(width);
        }
        let height = this.info.height;
        image_style[define.HEIGHT] = Number(height);
        let containerStyle = styles.container;        
        return (
            <TouchableOpacity style={[containerStyle,this.info.style]} onPress={this.click.bind(this)}>
                <Image style={image_style}
                resizeMode="contain"
                    source={{ uri: this.info.image }}
                />
            </TouchableOpacity>


        );
    }

    click(){
        if(this.info.url != null){
            Linking.openURL(this.info.url);
        }
    }
}

let appSize = Utils.appSize();

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    container: {       
        alignItems:"center" ,
        flex: 1,        
    },

});