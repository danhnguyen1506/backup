
var RNFS = require('react-native-fs');
import  CaseModel from '../Models/CaseModel';
import  StepModel from '../Models/StepModel';

let parseString = require('react-native-xml2js').parseString;
let attribute_key = "$";
let value_key = "_";

export let Cases = [];
export async function readCases() {
    let case_path = RNFS.MainBundlePath + "/assets/cases/";
    
    let case_folers = await RNFS.readDir(case_path);
    for (let index = 0; index < case_folers.length; index++) {        
        await processCase(case_folers[index]);
    }    
}

export async function processStep(folder:any){    
    let path = folder.path;
    let text = await readFile(path);
    let xml =  await parseXML(text);
    xml = xml.result;    
    xml = xml["step"];
    // console.log(JSON.stringify(xml));
    let step = new StepModel(xml);
    step.id = folder.name.split(".")[0];
    return step;
    
}

export async function processCase(folder){    
    let dir = folder.path+"/xml";
    let steps_htmls = await RNFS.readDir(dir);
    
    let case_model = new CaseModel(null);
    case_model.name = folder.name;
    for (let index = 0; index < steps_htmls.length; index++) {        
        let step = await processStep(steps_htmls[index]);        
        case_model.steps[step.id] = step;
        // console.log(JSON.stringify(step));
    }        
    Cases.push(case_model);                
    console.log(JSON.stringify(case_model.steps));
}

export async function readFile(path) {        
    let text = await RNFS.readFile(path, "utf8");
    return text;
}

export async function parseXML(text) {
    let result;
    let error;
    let options = {newline:false,trim:true,mergeAttrs:true,explicitArray:false};
    parseString(text,options, function (err, res) {
        result = res;
        error = err;
        if(err){            
            result = null;
        }
    });
    return {error:error,result:result};
}
