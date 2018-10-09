import React from 'react';

import { Button, Linking, View, ListView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { BaseScreen } from '../screens/BaseScreen';
import * as messages from '../common/messages';

import * as define from '../common/define';
let Utils = define.Utils;
import * as CommonStyles from '../common/StyleSheet';

import ThumbWithTextComponent from '../screens/common/ThumbWithTextComponent';
import * as Flow from './ScreenFlow';
import ComponentRender from './ComponentRender';
import MeasureText from 'react-native-measure-text';

export class ButtonComponentRender extends ComponentRender {    
    width = CommonStyles.buttonWidth;
    constructor(props?) {
        super(props);

    }


    textLayout(event) {
        let layout = event.nativeEvent.layout;       
    }

    render() {

        let ButtonStyles = CommonStyles.ButtonStyles;
        let title = this.info.title.toUpperCase();
        title = title.replace("\\N", "\n");

        let alignStyle;
        
        if(this.info.align == "left"){
            alignStyle = ButtonStyles.left;
        }else if(this.info.align == "center"){
            alignStyle = ButtonStyles.center;
        }else if(this.info.align == "right"){
            alignStyle = ButtonStyles.right;
        }
        let bottom_full = this.info.bottom_full;
        if(bottom_full == true){
            this.width = 95;
            if(this.info.align == "center"){                
                alignStyle["marginLeft"] = (appSize.width - this.width)/2;                
            }
        }

        return (
            <TouchableOpacity style={[ButtonStyles.button_container,alignStyle,{width:this.width}]} onPress={this.click.bind(this)}>
                <Text style={ButtonStyles.title}
                    onLayout={this.textLayout.bind(this)}
                > {title}</Text>
            </TouchableOpacity>

        )
    }

    click() {
        let url = this.info.url;
        if (url != null) {
            BaseScreen.popToRoot(false);
            Linking.openURL(url);
            return;
        }
        let screen = this.info.screen;
        if (screen == null) {
            BaseScreen.popToRoot();
            return;
        }
        Flow.pushToAccidentInstruction(this.info);
    }

}

export class BottomButtonsComponentRender extends ComponentRender {

    leftButton: Flow.ComponentModel;
    centertButton: Flow.ComponentModel;
    rightButton: Flow.ComponentModel;
    full = false;

    constructor(props?) {
        super(props);
    }

    render() {
        
        let ButtonStyles = CommonStyles.ButtonStyles;
        this.renderButtons();    
        return (
            <View style={[ButtonStyles.container,ButtonStyles.bottom_container]}>
                {this.renderButton(this.leftButton,"left")}
                {this.renderButton(this.centertButton,"center")}
                {this.renderButton(this.rightButton,"right")}                
            </View>
        )
    }

    renderButton(button: Flow.ComponentModel,align:string) {
        if (button != null) {                        
            let element = button.render();
            return element;
        }
    }
    //0:left, 1:center, 2:right
    renderButtons() {
        let aligns = [define.LEFT, define.CENTER, define.RIGHT];
        let components = this.info.components;
        let button;
        for (var index = 0; index < components.length; index++) {
            var element = components[index];
            if (element.align == define.LEFT) {
                this.leftButton = element;
            } else if (element.align == define.RIGHT) {
                this.rightButton = element;
            } else if (element.align == define.CENTER) {
                this.centertButton = element;
            }
        }
        if(this.leftButton != null && this.centertButton != null && this.rightButton != null){
            this.full = true;
        }


    }
}

let appSize = Utils.appSize();
