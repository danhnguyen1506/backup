import * as Utils from '../common/Utils';
import * as define from '../common/define';

let JSON_DATE_FORMAT_KEY = "######";
let JSON_DATE_FORMAT = JSON_DATE_FORMAT_KEY + define.API_DATE_FORMAT;

export class BaseModel {
    id: number;
    key: string;
    thumbnail: string;
    title: string;
    created_at: Date;
    content: string;
    image:string;
    infinitive: boolean = false;

    constructor(props?) {
        if (props == null) {
            return;
        }
        this.id = props["id"];
        this.key = props["key"];
        this.thumbnail = props["thumbnail"];
        this.title = props["title"];
        this.content = props["content"];        
        this.created_at = this.convertDate(props["created_at"]);
    }

    public convertDate(text: string): Date {
        return Utils.dateFromString(text, define.API_DATE_FORMAT);
    }

    static instancesFromObjects(objects: any, _class):any {
        let array = [];
        for(let i=0;i < objects.length;i++){
            let object = objects[i];
            let instance = new _class(object);
            array.push(instance);
        }
        return array;
    }

    static instanceFromJSONObject(dict:any,_class:any):any{
        let object = {};
        let keys = Object.keys(dict);
        for(let i=0; i < keys.length;i++){
            let key = keys[i];
            let value = dict[key];
            if(Utils.stringContainSubString(value,JSON_DATE_FORMAT_KEY)){
                let date = Utils.dateFromString(value,JSON_DATE_FORMAT);
                value = date;
            }
            object[key] = value;
        }
        // alert(Utils.objectLogger(object));
        
        let instance = new _class(object);
        return instance;
    }

    public toJSON():string{
        let string ;
        let keys = Object.keys(this);
        let object = {};
        for(let i=0; i < keys.length;i++){
            let key = keys[i];
            let value = this[key];
            if(value == null){
                continue;
            }
            if(Utils.isDate(value) ){
                value = Utils.stringFromDate(value,JSON_DATE_FORMAT);
            }
            object[key] = value;
        }
        string = JSON.stringify(object);
        return string;
    }
}

