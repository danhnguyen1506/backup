import React from 'react';

import { ScrollView, ListView, StyleSheet, Text } from 'react-native';

import { BaseScreen } from '../BaseScreen';
import * as messages from '../../common/messages';
import * as define from '../../common/define';
let Utils = define.Utils;

import * as Flow from '../../models/ScreenFlow';

import ThumbWithTextComponent from '../common/ThumbWithTextComponent';

export default class AccidentInstructionScreen extends BaseScreen {


    info: Flow.ScreenModel;

    constructor(props) {
        super(props);
        
        
        this.info = props.info;
        Utils.log("AccidentInstructionScreen "+this.info.id);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        let extraIDs = ["Warning", "AboutApp", "TrainingProgram", "Partner", "Donate"];
        let flag = true;
        for (var index = 0; index < extraIDs.length; index++) {
            var element = extraIDs[index];
            if (this.info.id.indexOf(element) != -1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            let rightButton = {
                title: 'Về trang chủ', // for a textual button, provide the button title (label)
                id: 'home', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked                
                buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
                buttonFontSize: define.DefaultTextFontSize, // Set font size for the button (can also be used in setButtons function to set different button style programatically)        
                buttonFontWeight: "bold",
            };

            this.props.navigator.setButtons({
                leftButtons: null, // see "Adding buttons to the navigator" below for format (optional)
                rightButtons: [rightButton], // see "Adding buttons to the navigator" below for format (optional)
                animated: false // does the change have transition animation or does it happen immediately (optional)
            });
        }


    }

    onNavigatorEvent(event: any) {
        if (event.id == 'home') { // this is the same id field from the static navigatorButtons definition
            BaseScreen.popToRoot();
        }
    }

    componentWillUnmount() {
        BaseScreen.navigatorCount--;
        Utils.log("AccidentInstructionScreen " + BaseScreen.navigatorCount);
    }
    componentDidMount() {
        Utils.log("componentDidMount " + this.info.id);
        // this.info.setParentScreen(this);
    }

    render() {

        return (
            <ScrollView contentContainerStyle={styles.content} style={styles.container}>
                {this.renderItems()}
            </ScrollView>

        )
    }

    renderItems() {
        let elements = [];
        let components = this.info.components;
        for (var index = 0; index < components.length; index++) {
            var element = components[index];
            elements.push(this.renderItem(element));
        }
        return elements;
    }
    renderItem(item: Flow.ComponentModel) {
        return item.render();
    }
}


let appSize = Utils.appSize();

const styles = StyleSheet.create({
    content: {
        // flexDirection: 'column',
        // flexWrap: 'wrap',
    },
    container: {
        marginTop: 10,
        flex: 1,
    },


});