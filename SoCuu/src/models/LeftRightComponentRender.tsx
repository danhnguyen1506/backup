import React from 'react';

import { ScrollView, Image, ListView, StyleSheet, Text, View } from 'react-native';

import { BaseScreen } from '../screens/BaseScreen';
import * as messages from '../common/messages';

import * as define from '../common/define';
let Utils = define.Utils;
import ThumbWithTextComponent from '../screens/common/ThumbWithTextComponent';
import * as Flow from './ScreenFlow';
import ComponentRender from './ComponentRender';

export default class LeftRightComponentRender extends ComponentRender {

    leftComponent: Flow.ComponentModel;
    rightComponent: Flow.ComponentModel;

    constructor(props?) {
        super(props);

    }

    render() {
        this.renderItems();
        let style = {height:Number(this.leftComponent.height)};
        return (
            <View style={[styles.container,style]}>
                <View style={styles.left}>
                    {this.leftComponent.render()}
                </View>
                <View style={styles.right}>
                    {this.rightComponent.render()}
                </View>
            </View>
        )
    }
    renderItems() {
        let elements = [];
        this.info.components.forEach(_component => {
            let component: Flow.ComponentModel = _component;
            if (component.position == define.LEFT) {

                this.leftComponent = component;
            } else {
                this.rightComponent = component;
            }
            //  alert(Utils.objectLogger(component));
            elements.push(component.render());
        });
        return elements;
    }



}



let appSize = Utils.appSize();
let margin = 5;
let imageSize = { width: 120, height: 140 };
let rightWidth = appSize.width - 3 * margin - imageSize.width;

const styles = StyleSheet.create({

    container: {        
        marginTop: 10,
        marginBottom: 10,        
    },
    left: {
        position: "absolute",
        left: 10,
    },
    right: {
        position: "absolute",
        right: 10,
    }
});