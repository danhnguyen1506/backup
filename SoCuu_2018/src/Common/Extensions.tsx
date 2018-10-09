
import React, { Component } from 'react';
import * as Utils from './Utils';

// declare global {
    
    
//     interface String {
//         fileName():string;
//         isPDF():Boolean;
//         extension():string;
//     }
    
//     interface Array<T> {
//         removeKey(key):void;
//         allKeys():string[];
//         findObjectByCondition(condition): any;
//         objecstByCondition(condition): any;
//         containObject(object): boolean;
//         containObjectByKey(object): boolean;

//         mergeWithObject(object):void;
//         removeAtIndex(index): void;     
//         removeAll(): void;
        
//         insertAtIndex(object, index):void;
//         indexByKey(object):number;
//         indexWithKey(object,key):number;
//         indexWithKeyAndValue(key,value):number;
//         indexOfObject(object):number;

//         removeObject(object):void;
//         removeObjectByKey(object):void;
//         replaceObjectAtIndex(object,index):void;
//         replaceObjectAtIndexByKey(object,index):void;        
//         appendFromArray(array):void;
//         valuesWithKey(key):Array<T>;
//         valuesFromAllKeys():any;
//      }
    
// }

// String.prototype["extension"] = function () {    
//     var re = /(?:\.([^.]+))?$/;
//     var ext = re.exec(this)[1];    
//     return ext;
// }


// String.prototype["isPDF"] = function () {    
//     let text:string = this.toLowerCase();
//     return text.indexOf("pdf") != -1;
// }

// Array.prototype["allKeys"] = function () {    
//     let keys;
//     try {
//         keys = Object.keys(this);            
//     } catch (error) {        
//         return [];
//     }
//     return keys;    
    
// }


// Array.prototype["valuesFromAllKeys"] = function () {        
//     let values = new Array<any>();
//     let keys = this.allKeys();
//     for (var index = 0; index < keys.length; index++) {
//         let key = keys[index];
//         let value = this[key];
//         if(value == null){continue;}
//         let type = typeof value;
//         if(type.toLowerCase() == "array"){
//             values.appendFromArray(value);
//         }else{
//             values.push(value);
//         }        
//     }
//     return values;
// }

// Array.prototype["removeKey"] = function (key) {            
//     let keys = this.allKeys();
//     let index = keys.indexOfObject(key);
//     // Utils.log(`before index ${index} keys ${keys} delete ${key}`);
//     // this.removeAtIndex(index);
//     delete this[key];
//     // Utils.log(`after index ${index} keys ${keys} delete ${key}`);
// }

// String.prototype["fileName"] = function () {    
//     let array = this.split("/");
//     return array.pop();
// }

// Array.prototype["containObjectByKey"] = function (object) {
//     let index = this.indexByKey(object);
//     return index != -1
// }



// Array.prototype["containObject"] = function (object) {
//     let index = this.indexOfObject(object);
//     return index != -1
// }

// Array.prototype["objecstByCondition"] = function (condition) {
//     let result = [];
//     for (var index = 0; index < this.length; index++) {
//         let object = this[index];
//         let keys = Object.keys(condition);
//         for (var i = 0; i < keys.length; i++) {
//             let key = keys[i];
//             let value = condition[key];
//             if (value != object[key]) {
//                 break;
//             }
//             result.push(object);
//         }     
//     }
//     return result;
// }

// Array.prototype["findObjectByCondition"] = function (condition) {
//     let foundObject = null;
//     for (var index = 0; index < this.length; index++) {
//         let object = this[index];
//         let keys = Object.keys(condition);
//         for (var i = 0; i < keys.length; i++) {
//             let key = keys[i];
//             let value = condition[key];
//             let _value = object[key];
            
//             if (value != _value) {
//                 break;
//             }
//             foundObject = object;
//         }
//         if (foundObject != null) { break; }
//     }
//     return foundObject;
// }


// Array.prototype["valuesWithKey"] = function (key) {    
//     let values = [];
//     for (var index = 0; index < this.length; index++) {
//         var element = this[index];
//         values.push(element[key]);
//     }
//     return values;
// }

// Array.prototype["appendFromArray"] = function (array) {
//     if(!Utils.isValidArray(array)){
//         return;
//     }
//     for (var index = 0; index < array.length; index++) {
//         var element = array[index];
//         this.push(element);
//     }

// }
// Array.prototype["removeAtIndex"] = function (index) {    
//     this.splice(index, 1);
// }


// Array.prototype["removeAll"] = function () {    
//     this.splice(0, this.length);
// }

// Array.prototype["removeAtIndex"] = function (index) {    
//     this.splice(index, 1);
// }

// Array.prototype["insertAtIndex"] = function (object, index) {    
//     this.splice(index, 0, object);
// }

// Array.prototype["indexWithKeyAndValue"] = function (key,value) {    
//     for (var i = 0; i < this.length; i++) {
//         var instance = this[i];
//         if (instance[key] == value) {
//           return i;
//         }
//       }
//       return -1;
// }


// Array.prototype["indexWithKey"] = function (object,key) {    
//     for (var i = 0; i < this.length; i++) {
//         var instance = this[i];
//         if (instance[key] == object[key]) {
//           return i;
//         }
//       }
//       return -1;
// }

// Array.prototype["indexByKey"] = function (object) {    
//     for (var i = 0; i < this.length; i++) {
//         var instance = this[i];
//         if (instance.key == object.key) {
//           return i;
//         }
//       }
//       return -1;
// }

// Array.prototype["indexOfObject"] = function (object) {    
//     for (var i = 0; i < this.length; i++) {
//         var instance = this[i];
//         if (instance == object) {
//           return i;
//         }
//       }
//       return -1;
// }

// Array.prototype["removeObject"] = function (object) {    
//     var index = this.indexOfObject(object);    
//     if(index == -1){
//         alert("no");
//          return;
//     }
//     this.splice(index, 1);
// }
  

// Array.prototype["removeObjectByKey"] = function (object) {    
//     var index = this.indexByKey(object);
//     this.splice(index, 1);
// }


// Array.prototype["replaceObjectAtIndex"] = function (object,index) {    
//     var currentIndex = this.indexOfObject(object);
//     this.removeAtIndex(currentIndex);
//     this.insertAtIndex(object,index);
// }

// Array.prototype["replaceObjectAtIndexByKey"] = function (object,index) {    
//     var currentIndex = this.indexByKey(object);
//     this.removeAtIndex(currentIndex);
//     this.insertAtIndex(object,index);
// }
