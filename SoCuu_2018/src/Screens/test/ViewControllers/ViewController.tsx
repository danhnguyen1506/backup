import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Slider,
  Image
} from "react-native";

import BaseViewController from "../../../Base/BaseViewController";
import { EventRegister } from "react-native-event-listeners";
import Style from "../StyleSheets/AccidentCaseStyleSheets";

import * as messages from "../../../Common/messages";
import * as define from "../../../Common/define";
import * as Utils from '../../../Common/Utils';

export default class ViewController extends BaseViewController {
  constructor(prop) {
    super(prop);
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount();
  }

  viewDidFocus() {
    super.viewDidFocus();
  }

  viewDidBlur() {
    super.viewDidBlur();
  }

  viewWillBlur(){
    super.viewWillBlur();    
  }
  
  viewWillFocus(){
    super.viewWillFocus();    
  }
  
  render() {
    return (
      <View style={Style.container}>
      </View>
    )
    ;
  }
}
