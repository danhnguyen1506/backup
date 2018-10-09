import React, { Component } from 'react';
import * as define from '../../common/define';
import * as Utils from '../../common/Utils';
import { WebView } from 'react-native';
import {BaseScreen} from '../BaseScreen';
import MyWebView from 'react-native-webview-autoheight';


let calculateHeightScript = `
    var body = document.body;  
    var clientHeight = document.getElementById('main_div').clientHeight;
    document.title = clientHeight;
    window.postMessage(clientHeight);    
`;

export default class AutoResizeWebView extends BaseScreen {
    html: string;
    style: any;
    resizeComplete: any;

    private height = 100;//default height
    private webView: WebView;

    constructor(props?) {
        super(props);
        this.html = props.html;
        this.html = "<div id='main_div'>" + this.html + "</div>";
        this.resizeComplete = props.resizeComplete;
        this.style = props.style;
        let source = { html: this.html };

    }

    render() {
        let style = { height: this.height };
        // return (
        //     <MyWebView
        //         source={{ html: this.html }}                
        //         javaScriptEnabled={true} 
        //         width={Utils.appSize().width - 10}               
        //         defaultHeight={10}
        //     />
        // );
        return (
            <WebView
                ref={(webView) => this.webView = webView}
                automaticallyAdjustContentInsets={false}
                source={{ html: this.html }}
                style={[this.style, style]}
                scrollEnabled={false}
                javaScriptEnabled={true}
                injectedJavaScript={calculateHeightScript}
                onMessage={this._onMessage.bind(this)}
            />
        )
    }

    _onMessage(event) {
        let realContentHeight = parseInt(event.nativeEvent.data);        
        realContentHeight += 25;
        this.height = realContentHeight;        
        this.renderAgain();
        // if (this.resizeComplete != null) {
        //     this.resizeComplete();
        // }
    }    
}
