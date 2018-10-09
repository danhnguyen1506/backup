import React from 'react';

import { ScrollView, Image, ListView, StyleSheet, Text, View } from 'react-native';

import { BaseScreen } from '../screens/BaseScreen';
import * as messages from '../common/messages';

import * as define from '../common/define';
let Utils = define.Utils;
import ThumbWithTextComponent from '../screens/common/ThumbWithTextComponent';
import * as Flow from './ScreenFlow';
import ComponentRender from './ComponentRender';
import TextComponentRender from './TextComponentRender';

export default class StepComponentRender extends ComponentRender {

    info: Flow.ComponentModel;
    height: number = 100;
    listView: ListView;

    constructor(props?) {
        super(props);

    }

    render() {
        let style = { height: this.height };

        return (
            <View style={styles.container}>
                {this.renderItems()}
            </View>
        )
    }

    _contentSizeChanged(width: number, height: number) {
        this.height = height;
        // this.renderAgain();
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

    renderItem(step: any) {
        return (
            <StepRow step={step} />
        );
    }

}


class StepRow extends BaseScreen {
    step: Flow.ComponentModel;

    constructor(props?) {
        super(props);
        this.step = props.step;
    }

    render() {
        return (
            <View style={styles.cell_container}>
                <Image style={styles.image}
                    source={{ uri: this.step.image }}
                />
                <View style={styles.rightContainer}>
                    {this.renderText()}
                    {this.renderButton()}
                </View>

            </View>
        );
    }

    renderButton(){        
        if(this.step.button != null){            
            return this.step.button.render();
        }
    }

    renderText() {
        let textComponent = new Flow.ComponentModel();
        textComponent.type = Flow.ComponentType.Text;
        textComponent.text = this.step.text;
        return textComponent.render();
    }
}
let appSize = Utils.appSize();
let margin = 5;
let imageSize = { width: 120, height: 140 };
let rightWidth = appSize.width - 3 * margin - imageSize.width;

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    container: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "transparent",
    },
    cell_container: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: "transparent",
    },
    image: {
        marginLeft: margin,
        width: 100,
        height: 100,
    },
    rightContainer: {
        width: rightWidth,
        marginLeft: margin,
    },
    text: {
        fontSize: Flow.DefaultTextFontSize,
        textAlign: "center",
    },

});