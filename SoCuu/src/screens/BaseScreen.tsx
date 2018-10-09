import React, { Component } from 'react';
import {Animated, View, ListView } from 'react-native';
import * as define from '../common/define';
let Utils = define.Utils;

export class BaseScreen extends Component {
    props: any;
    dataSource: any;
    static navigatorCount = 0;
    state: any = {};
    parentScreen:BaseScreen;
    faded = false;

    constructor(prop) {
        super(prop);
        this.parentScreen = prop.parentScreen;
        this.faded = prop.faded;
        if (this.faded != null) {
            if (this.faded == true) {
                this.state[define.FADE] = new Animated.Value(0);
            } else {
                this.state[define.FADE] = new Animated.Value(1);
            }
        }
    }

    fade(duration?: number) {
        duration == null ? 200 : duration;
        Animated.timing(       // Uses easing functions
            this.state[define.FADE], // The value to drive
            {
                toValue: this.faded ? 0 : 1,        // Target
                duration: duration,
            },
        ).start();
    }
    
    reload(object?: Object) {
        if (object == null) {
            object = {};
        }
        // Utils.log("reloaddata");
        Utils.setValuesFromObject(this.state, object);
        // Utils.log("reload ");
        super.setState(object);
    }


    addLifeCycle() {
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    viewWillAppear() {
        // alert("viewWillAppear");
    }

    viewDidAppear() {
        // alert("viewDidAppear");
    }

    viewWillDisappear() {

    }

    viewDidDisappear() {

    }

    onNavigatorEvent(event) {
        switch (event.id) {
            case 'willAppear':
                this.viewWillAppear();
                break;
            case 'didAppear':
                this.viewDidAppear();
                break;
            case 'willDisappear':
                this.viewWillDisappear();
                break;
            case 'didDisappear':
                this.viewDidDisappear();
                break;
        }
    }

    renderAgain() {
        super.forceUpdate(null);
    }


    static pop() {
        Utils.navigator.pop({
            animated: false, // does the pop have transition animation or does it happen immediately (optional)                
        })
        // BaseScreen.navigatorCount--;
    }

    static popToRoot(animated?: boolean) {
        if (animated == null) {
            animated = true;
        }
        Utils.navigator.popToRoot({
            animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the popToRoot have different transition animation (optional)
        });
    }

    static push(screenName: string, _options?: any) {
        let animated = true
        if (_options != null && _options.animated != null) {
            animated = _options.animated;
        }
        let options = { animated: animated };
        Object.assign(options, _options);
        Utils.log("screenName " + screenName + " " + Utils.objectLogger(options));
        if (screenName == "AccidentInstruction") {
            BaseScreen.navigatorCount++;
        }
        let title = options != null ? options["title"] : null;
        Utils.navigator.push({
            screen: screenName,
            passProps: options,
            backButtonHidden: false,
            backButtonTitle: "",
            title: title,
            animated: options.animated,
        });
    }

    static dismiss() {
        Utils.navigator.dismissModal({
            animationType: 'none' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')

        });
    }

    setTitle(title: string) {
        Utils.navigator.setTitle({
            title: title
        });
    }

    hideNavigationBar(hidden: boolean) {
        if (hidden == null) {
            hidden = false;
        }
        let text = hidden ? "hidden" : "show";
        Utils.navigator.toggleNavBar({
            to: text, // required, 'hidden' = hide navigation bar, 'shown' = show navigation bar
            animated: false // does the toggle have transition animation or does it happen immediately (optional). By default animated: true
        });
    }
    static present(screenName: string, options?: any) {
        let title = options != null ? options.title : null;
        Utils.navigator.showModal({
            screen: screenName,
            passProps: options,
            backButtonHidden: false,
            backButtonTitle: "",
            title: title,
            animationType: "fade",

        });
    }

    push(screenName: string, _options?: any) {
        let animated = true
        if (_options != null && _options.animated != null) {
            animated = _options.animated;
        }
        let options = { animated: animated };
        Object.assign(options, _options);
        // alert(Utils.objectLogger(options))   
        BaseScreen.push(screenName, options);
    }
}
