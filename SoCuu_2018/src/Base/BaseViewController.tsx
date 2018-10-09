import React, { Component } from "react";

import { NavigationActions } from "react-navigation";
import { EventRegister } from "react-native-event-listeners";
import PropTypes from 'prop-types'
import * as Utils from "../Common/Utils";

export class ViewFrame {
  x = 0;
  y = 0;
  width = 0;
  height = 0;
}
export default class BaseViewController extends Component {
  
  navigation;
  params;
  screenName;
  screenID;
  eventListeners = [];
  mounted = false;
  frame = new ViewFrame();
      
  willFocusEvent;
  didFocusEvent;
  willBlurEvent;
  didBlurEvent;
  

  constructor(prop) {
    super(prop);
    this.navigation = prop.navigation;
    this.screenID = this.navigation.state.key;
    this.screenName = this.navigation.state.routeName;
    this.params = this.navigation.state.params;
    this.state = {};

    this.didFocusEvent = this.navigation.addListener(
      'didFocus',
      payload => {
        this.viewDidFocus();
      }
    );
    this.didBlurEvent = this.navigation.addListener(
      'didBlur',
      payload => {
        this.viewDidBlur();
      }
    );
    this.willBlurEvent = this.navigation.addListener(
      'willBlur',
      payload => {
        this.viewDidBlur();
      }
    );
    
    this.willFocusEvent = this.navigation.addListener(
      'willFocus',
      payload => {
        this.viewWillFocus();
      }
    );
    
  }

 

  push(screen, params) {
    this.navigation.navigate(screen, params);
  }

  componentDidMount() {
    this.mounted = true;           
  }
  
  componentWillUnmount() {
    this.mounted = false; 
    this.viewDidBlur();
    this.didFocusEvent.remove();
    this.didBlurEvent.remove();
    this.willBlurEvent.remove();
    this.willFocusEvent.remove();
    for (let index = 0; index < this.eventListeners.length; index++) {
      const element = this.eventListeners[index];
      EventRegister.removeEventListener(element);
    }
  }

  viewWillFocus(){
    console.log(this.screenName + " viewWillFocus");
  }
  
  viewWillBlur(){
    console.log(this.screenName + " viewWillBlur");

  }
  viewDidFocus() {
    console.log(this.screenName + " viewDidFocus");
  }

  viewDidBlur() {
    console.log(this.screenName + " viewDidBlur");
  }

  addEvent(name, handler) {
    let listener = EventRegister.addEventListener(name, handler);
    this.eventListeners.push(listener);
    return listener;
  }

  setTitle(title) {    
    this.navigation.setParams({ title: title });
  }


  forceReload(params) {
    this.setState(params);
    super.forceUpdate();
  }

  reload() {
    this.forceUpdate();
  }

  onLayout(event) {
    var { x, y, width, height } = event.nativeEvent.layout;
    this.frame.x = x;
    this.frame.y = y;
    this.frame.width = width;
    this.frame.height = height;
  }

  
}
