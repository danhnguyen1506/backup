
export declare var require: any;

import RNFetchBlob from 'react-native-fetch-blob';
import * as Flow from '../models/ScreenFlow';
import * as define from '../common/define';

let Utils = define.Utils;
let parseString = require('react-native-xml2js').parseString;
let fileSystem = RNFetchBlob.fs;



export async function parseXML(text: string) {
    let result;
    let error;
    let options = {trim:true};
    parseString(text,options, function (err, res) {
        result = res;
        error = err;
        if(err){            
            result = null;
        }
    });
    return {error:error,result:result};
}

export async function isFileExist(path:string){
    return await fileSystem.exists(path);
}

export async function readFile(path: string) {    
    if(! await isFileExist(path)){
        return "";
    }    
    let text = await RNFetchBlob.fs.readFile(path, "utf8");
    return text;
}

export function imagePathWithName(name:string){
    let path = define.ASSETS_PATH + "images/others/";
    path += name;
    return  path;
}

export async function parseScreens() {
    let dir = define.ASSETS_PATH + "cases_list/";
    let files = await fileSystem.ls(dir);
    // console.log("count "+files.length);
    for (let i = 0; i < files.length; i++) {
        // Utils.log("parse_file "+i);
        let file = files[i];
        
        let path = dir + file;        
        let text = await readFile(path);        
        let result = await parseXML(text);
        if(result.error){
            alert("file: "+file+" error: "+result.error);
        }else{
            await Flow.ScreenModel.parse(result.result);
        }
        
            // alert(Utils.objectLogger(result));
        
    }
    
}
