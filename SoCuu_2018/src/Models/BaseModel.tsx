
import * as Utils from '../Common/Utils';
export default class  BaseModel {
    utils = Utils;
    key;
    id;
    
    constructor(props) {
        if(props == null){
            return;
        }
        // this.id = props.id;
    }

    static instancesFromObjects(objects, _class) {
        let array = [];
        
        if(objects == null){
            return array;
        }
        for(let i=0;i < objects.length;i++){
            
            let object = objects[i];
            let instance = BaseModel.instanceFromJSONObject(object,_class);
            
            array.push(instance);
        }
        return array;
    }

    static instanceFromJSONObject(dict,_class){
        let object = {};
        let keys = Object.keys(dict);
        for(let i=0; i < keys.length;i++){
            let key = keys[i];
            let value = dict[key];            
            object[key] = value;
        }                
        let instance = new _class(object);        
        return instance;
    }
}
