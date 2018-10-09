import React, { Component } from 'react';
import moment from 'moment';
import { BaseModel } from '../models/BaseModel';
import { ListView, Platform, Dimensions, PushNotificationIOS, AsyncStorage, Alert, Keyboard } from 'react-native';
import * as define from '../common/define';
import * as messages from '../common/messages';

export declare var require: any;
export let navigator: any;

export let ListViewDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export function setNavigator(_navigator: any) {
    if (_navigator && !navigator) {
        navigator = _navigator;
        // alert(objectLogger(navigator));
    }
}

//*********************************** Object ********************************************//
export function isArrayContainObject(array: any[], obj: any, key?: string): number {
    for (let i = 0; i < array.length; i++) {
        let instance = array[i];
        if (isValidString(key)) {
            if (instance[key] == obj[key]) {
                return i;
            }
        } else {
            if (instance == obj) {
                return i;
            }
        }
    }
    return -1;
}

//*********************************** Logic ********************************************//

export async function saveArticleId(articleId: number, key: string) {
    let latestArticleId = await getDataWithKey(key);
    let oldValue = latestArticleId;
    if (latestArticleId == null || isNaN(latestArticleId)) {
        latestArticleId = 0;
    }
    latestArticleId = Math.max(latestArticleId, articleId);
    // alert(" saveArticleId "+articleId+ " " + key);
    // return;
    if (oldValue != latestArticleId) {
        await saveDataWithKey(key, latestArticleId);
    }
}

export async function removeAccount() {
    await AsyncStorage.clear((error: Error) => {

    });

}

//*********************************** Device ********************************************//

export class ReactSize {
    width: number;
    height: number;
}



export function appSize(): any {

    // let size = new ReactSize();    
    let size = {};
    let obj = Dimensions.get('window');
    size["height"] = obj.height;
    size["width"] = obj.width;
    return size;
}

export function isIOS() {
    if (Platform != null) {
        return Platform.OS === 'ios';
    }
    return false;
}

export function isAndroid() {
    if (Platform != null) {
        return Platform.OS === 'android';
    }
    return false;
}
//*********************************** UI ********************************************//
export function sizeScaleToFit(size: any, widthToFit: number, heightToFit: number): any {
    let height = size.height;
    let width = size.width;
    let ratio = width / height;
    if (widthToFit != 0) {
        width = widthToFit;
        height = widthToFit / ratio;
    }
    if (heightToFit != 0) {
        height = heightToFit;
        width = heightToFit * ratio;
    }
    return { width: width, height: height };
}

export async function logout() {
    await removeAccount();
    // Actions.pop({ popNum: 2 });
}

let showingAlert = false;
function _alertDoneHandler(handler: any) {
    showingAlert = false;
    if (handler) {
        handler();
    }
}

function _alertCancelHandler(handler: any) {
    showingAlert = false;
    if (handler) {
        handler();
    }
}

export function captilizeString(text: string) {
    return text.charAt(0).toUpperCase() + this.slice(1);
}

export function alertWith(options: Object) {
    let message = options["message"];
    let title = options["title"];
    let cancel_button = options["cancel_button"];
    let confirm_button = options["confirm_button"];
    let cancel_handler = options["cancel_handler"];
    let confirm_handler = options["confirm_handler"];
    let buttons = [];
    if (isValidString(cancel_button)) {
        buttons.push(
            {
                text: cancel_button, onPress: (() =>
                    _alertDoneHandler(cancel_handler))
                , style: 'cancel'
            }
        );
    }
    if (isValidString(confirm_button)) {
        buttons.push(
            {
                text: confirm_button, onPress: (() =>
                    _alertDoneHandler(confirm_handler))
                , style: ''
            }
        );
    }
    Alert.alert(
        title,
        message,
        buttons,
        { cancelable: false }
    )
}
export function showAlert(message: string, alertOnly: boolean = true, options?: Object) {
    if (showingAlert || !isValidString(message)) {
        return;
    }
    showingAlert = true;
    let title: string = null;
    let okTitle: string = messages.OK;
    let cancelTitle: string = messages.CANCEL;

    let doneHandler;
    let cancelHandler;

    if (options != null) {
        if (options["done"] != null) {
            doneHandler = options["done"];
        }
        if (options["cancel"] != null) {
            cancelHandler = options["cancel"];
        }
    }
    let buttons = [];
    buttons.push( //TODO NVTU
        {
            text: okTitle, onPress: (() =>
                _alertDoneHandler(doneHandler))
            , style: 'cancel'
        }
    );
    if (!alertOnly) {
        buttons.push(
            { text: okTitle, onPress: () => showingAlert = false }
        );
    }
    Alert.alert(
        title,
        message,
        buttons,
        { cancelable: false }
    )

}

//*********************************** Misc ********************************************//
export function stringContainSubString(text: string, finder: string): boolean {
    if (isNull(text) || isNull(finder)) {
        return false;
    }
    let flag = typeof text == 'string';
    if (!flag) {
        return false;
    }
    let index = text.indexOf(finder);
    return index != -1;
}

export function isDate(value: any) {
    if (isNull(value)) {
        return false;
    }
    let flag = typeof value.getMonth === 'function';
    return flag;
}


export async function saveDataWithKey(key: string, data: any) {
    let type = typeof data;
    if (type == "number" || type == "boolean") {
        data = "" + data;
    }

    let string;
    if (typeof data == "object") {
        string = JSON.stringify(data);
    } else {
        string = data;
    }
    // alert("saveDataWithKey "+string);
    if (data instanceof BaseModel) {
        string = data.toJSON();
    }
    await AsyncStorage.setItem(key, string);

}

export async function getDataWithKey(key: string, _class?: any) {
    let json = await AsyncStorage.getItem(key);
    let data;
    let errorParsing = false;
    if (isValidString(json)) {
        try {
            data = JSON.parse(json);
        } catch (ex) {
            errorParsing = true;
        }

    }
    if (errorParsing) {
        data = json;
    }

    if (data != null && _class != null) {
        data = _class.instanceFromJSONObject(data, _class);
    }
    return data;
}

export function replaceInString(text: string, search: string, replacement: string) {
    return text.split(search).join(replacement);
}

function replacer(key, value) {
    if (value === null) return undefined;
    let flag = Array.isArray(value)
    if (flag) {
        if (value.length == 0) {
            return undefined;
        }
    }
    return value
}

export function objectLogger(object) {
    let text = JSON.stringify(object, replacer, '\t');

    return text;
}

export function log(message?, data?) {
    if (!isNull(data)) {
        console.log(message + " " + objectLogger(data));
    } else {
        console.log(message);
    }
}
//*********************************** Validate ********************************************//
export function isValidEmail(text: string) {
    if (!isValidString(text)) {
        return false;
    }
    let flag = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text);
    return flag;
}

export function isNull(object) {
    if (object == null || typeof object == undefined || object == undefined) {
        return true;
    }
    return false;
}

export function isValidString(text) {
    if (isNull(text)) {
        return false;
    }
    if (typeof text != 'string') {
        return false;
    }
    if (text.toLowerCase() == "null") {
        return false;
    }
    let flag = text.length != 0;

    return flag;
}

//*********************************** Date ********************************************//
export function secondSince1970(date: Date) {
    let number = moment(date).unix();
    return number;
}

export function secondsBetweenDates(date1, date2) {
    let diff = Math.abs(date1.getTime() - date2.getTime());
    diff = diff / 1000;
    return diff;
}
export function currentTime() {
    let date = new Date();
    return date;
}

export function beginningOfDay(date: Date) {
    let _date = new Date();
    _date.setFullYear(date.getFullYear());
    _date.setMonth(date.getMonth());
    _date.setDate(date.getDate());
    _date.setSeconds(0);
    _date.setMinutes(0);
    _date.setHours(0);
    return _date;
}

export function dateFromString(text, format) {
    if (!isValidString(text)) {
        return null;
    }

    // let date = moment(text, format).locale("ja").toDate();
    let date = moment(text, format).toDate();
    if (date instanceof Date && !isNaN(date.valueOf())) {
        return date;
    }
    // log("wrong_date " + text);
    return null;
}

export function stringFromDate(date, format) {
    if (isNull(date)) {
        return "";
    }
    // let text = moment(date).locale("ja").format(format);
    let text = moment(date).format(format);
    if (!isValidString(text)) {
        text = "";
    }
    return text;
}

export function dateByAddingSeconds(date, seconds) {
    date = moment(date).add(seconds, 's').toDate();
    return date;
}

export function dateByAddingMinutes(date, minutes) {
    date = moment(date).add(minutes, 'm').toDate();
    return date;
}

export function dateByAddingHours(date, hours) {
    date = moment(date).add(hours, 'h').toDate();
    return date;
}

export function dateByAddingDays(date, days) {
    date = moment(date).add(days, 'd').toDate();
    return date;
}

export function removeObjectInArray(array: any[], obj: any) {
    let index = isArrayContainObject(array, obj);
    removeInArrayAtIndex(array, index);
}

export function removeInArrayAtIndex(array: any[], index: number) {
    if (isNull(array)) {
        return;
    }
    array.splice(index, 1);
}

export function removeAllInArray(array) {
    if (isNull(array)) {
        return;
    }
    while (array.length) {
        array.pop();
    }
}

export function appendArray(mainArray, subArray) {
    if (isNull(subArray) || isNull(mainArray)) {
        return;
    }
    for (let i = 0; i < subArray.length; i++) {
        let object = subArray[i];
        mainArray.push(object);
    }
}

export function setValuesFromObject(mainObject: Object, subObject: Object) {
    if (mainObject == null || subObject == null) {
        return;
    }
    let keys: string[] = Object.keys(subObject);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        mainObject[key] = subObject[key];
    }
    // log(mainObject);
}

/**
 * check input is mail
 * @param email
 */
export function validateEmail(email) {
    let result = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return result.test(email);
}

export function objectToURLParameters(params: Object): string {
    if (params == null) {
        return "";
    }
    let array = [];
    let keys = Object.keys(params);
    for (let i = 0; i < keys.length; i++) {
        let name = keys[i];
        let value = params[name];
        let text = name + "=" + value;
        array.push(text);
    }
    let string = array.join("&");
    return string;
}

export function mapURLWithParameter(url: string, params: Object): string {
    if (isNull(params)) {
        return url;
    }
    let text = url + "?" + objectToURLParameters(params);
    return text;
}

export function mapWithObject(masterObject: Object, mappedObject: Object) {
    let keys = Object.keys(mappedObject);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        masterObject[key] = keys[key];
    }
}

//*********************************** Keyboard ********************************************//
export function dismissKeyboard() {
    Keyboard.dismiss();
}

