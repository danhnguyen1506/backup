import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Slider,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";

require("./Extensions");
import * as ScreenNavigation from "./ScreenNavigation";
import * as define from './define';

import { Dimensions, Platform } from "react-native";

export function isNull(object) {
  if (object == null || typeof object == undefined || object == undefined) {
    return true;
  }
  return false;
}

function pad2Number(number) {
  return (number < 10 ? "0" : "") + number;
}
export function formatTime(seconds:number) {
  var sec_num = seconds;
  var minutes = Math.floor(sec_num / 60);
  var seconds = Math.floor(sec_num - minutes * 60);
  return minutes + ":" + pad2Number(seconds);
}

export function isValidString(text:any) {
  if (isNull(text)) {
    return false;
  }
  if (typeof text != "string") {
    return false;
  }
  if (text.toLowerCase() == "null") {
    return false;
  }
  let flag = text.length != 0;

  return flag;
}

export function isIOS() {
  if (Platform != null) {
    return Platform.OS === "ios";
  }
  return false;
}

export function isAndroid() {
  if (Platform != null) {
    return Platform.OS === "android";
  }
  return false;
}

let viewKeyCount = 0;
export function viewKey() {
  viewKeyCount++;
  return viewKeyCount.toString();
}

export function appSize() {
  let size = {};
  let obj = Dimensions.get("window");
  size["height"] = obj.height;
  size["width"] = obj.width;
  return size;
}

export function isValidArray(array:any) {
  return array != null && array.length != 0;
}

//can not use this function into ScreenNavigation.tsx, nested error
export let MainNavigation;
export function setMainNavigation(navigation) {
  MainNavigation = navigation;
}


export function loadMenu() {
  MainNavigation.navigate("Menu");
}

export function createMenuButton(){
  return (
    <TouchableOpacity onPress={() => loadMenu() }>
      <Image style={styles.menu} source={define.LocalImages["menu"]} />
    </TouchableOpacity>
  )
}

let styles = StyleSheet.create({
  
  menu: {
    height:20,
    width:20,
    marginLeft:10,
  },
  
});
