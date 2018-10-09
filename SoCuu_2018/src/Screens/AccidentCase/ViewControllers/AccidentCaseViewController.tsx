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
import * as Utils from "../../../Common/Utils";
import CaseModel from "../../../Models/CaseModel";
import AccidentCasePage from '../Views/AccidentCasePage';

export default class AccidentCaseViewController extends BaseViewController {
  case; //CaseModel
  sections = [];

  constructor(prop) {
    super(prop);
    this.case = this.params.case;
    this.state.sections = [];
    console.log(JSON.stringify(this.case.steps));
    // this.sections = this.case.steps;    
    // this.process();
  }

  process(){
    let section_titles = [];
    for (let index = 0; index < this.sections.length; index++) {
      let section = this.sections[index];
      section_titles.push(section.title);
    }
    this.state.sections = section_titles;
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

  viewWillBlur() {
    super.viewWillBlur();
  }

  viewWillFocus() {
    super.viewWillFocus();
  }

  _renderHeader(section) {
    let step = this.case.steps[section];    
    return (
      <View >
        <Text >{step.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View >
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <View
        style={Style.container}
        
      />
    );
  }
}
