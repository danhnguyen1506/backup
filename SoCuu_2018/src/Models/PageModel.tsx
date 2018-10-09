
import  BaseModel from './BaseModel';

export default class  PageModel extends BaseModel {

    image = "";
    audio = "";    
    video = "";    
    text = "";

    constructor(props){
        super(props);        
        this.image = props["image"];                 
        this.audio = props["audio"];                 
        this.video = props["video"];                 
        this.text = props["text"];                 
        
    }
    
}