
import  BaseModel from './BaseModel';
import PageModel from './PageModel';

export default class  StepModel extends BaseModel {
    pages = [];
    expanding = false;
    title = "";
    summary = "";

    constructor(props){
        super(props);      
        this.title = props["title"];
        this.summary = props["summary"];
        // console.log("StepModel" +JSON.stringify(props));                               
        this.pages =  PageModel.instancesFromObjects(props["page"],PageModel);
    }
}