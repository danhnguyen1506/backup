
import  BaseModel from './BaseModel';
import StepModel from './StepModel';

export default class  CaseModel extends BaseModel {
    steps = new Object();
    name = "";

    constructor(props){
        super(props);          
        // console.log("CaseModel" +JSON.stringify(props));             
    }
}