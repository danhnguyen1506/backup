import React from 'react';

import { ListView, StyleSheet, Text } from 'react-native';

import { BaseScreen } from '../screens/BaseScreen';
import * as messages from '../common/messages';

import * as define from '../common/define';
let Utils = define.Utils;
import ThumbWithTextComponent from '../screens/common/ThumbWithTextComponent';
import * as Flow from './ScreenFlow';
import ComponentRender from './ComponentRender';

export default class OptionComponentRender extends ComponentRender{
    
    constructor(props?) {
        super(props);    
    }

    render() {
        return (
            <ListView contentContainerStyle={styles.content}
                style={styles.container}
                enableEmptySections={true}
                dataSource={this.dataSource}
                renderRow={this.renderItem.bind(this)}
            />
        )

    }

    renderItem(item: any) {
        
        return (
            <ThumbWithTextComponent data={item} click={this._clickOnItem.bind(this)} numberOfColumn={2} />
        );
    }

    _clickOnItem(data: Flow.ComponentModel) {
        Flow.pushToAccidentInstruction(data);
        
    }
}

let appSize = Utils.appSize();

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    container: {
        flex: 1,
    },

});