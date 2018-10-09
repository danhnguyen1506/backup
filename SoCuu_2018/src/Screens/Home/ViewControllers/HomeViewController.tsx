import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Slider,
  Image
} from "react-native";

import BaseViewController from "../../../Base/BaseViewController";
import Style from "../StyleSheets/HomeStyleSheets";
import * as ParseController from '../../../Controllers/ParseController';

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

  async viewDidFocus() {
    super.viewDidFocus();
    await ParseController.readCases();
    // console.log(JSON.stringify(ParseController.Cases));
    // this.push("AccidentCase",{case:ParseController.Cases[0]});
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
      <Text>aaadadada</Text>
      <Text>aaadadada</Text>
      </View>
    )
    ;
  }
}
