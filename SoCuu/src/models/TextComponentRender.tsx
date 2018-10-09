import React from 'react';

import { Image, ListView, StyleSheet, Text, View, WebView } from 'react-native';

import { BaseScreen } from '../screens/BaseScreen';
import AutoResizeWebView from '../screens/common/AutoResizeWebView';

import * as messages from '../common/messages';

import * as define from '../common/define';
let Utils = define.Utils;
import ThumbWithTextComponent from '../screens/common/ThumbWithTextComponent';
import * as Flow from './ScreenFlow';
import ComponentRender from './ComponentRender';

export default class TextComponentRender extends ComponentRender {
    
    private webView: AutoResizeWebView;
    private html: string;
    constructor(props?) {
        super(props);        
                        
        this.html = this.info.text;
    }

    render() {
        
        return (
            <AutoResizeWebView
                ref={(web) => this.webView = web}
                html={this.html}
                style={styles.webview}
                startInLoadingState={true}
                resizeComplete={() => {} }
            />
        );

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
    },
    webview: {
        
    },
    cell_container: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    image: {
        marginLeft: margin,
        width: 120,
        height: 140,
    },
    rightContainer: {
        width: rightWidth,
        marginLeft: margin,
    },
    text: {

    },

});