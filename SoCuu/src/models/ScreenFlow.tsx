

export declare var require: any;
import OptionComponentRender from './OptionComponentRender';
import StepComponentRender from './StepComponentRender';
import TextComponentRender from './TextComponentRender';
import { BottomButtonsComponentRender, ButtonComponentRender } from './ButtonComponentRender';
import ImageComponentRender from './ImageComponentRender';
import LeftRightComponentRender from './LeftRightComponentRender';

import * as define from '../common/define';
export let DefaultTextFontSize = define.DefaultTextFontSize;
import { BaseScreen } from '../screens/BaseScreen';

import MeasureText from 'react-native-measure-text';

let Utils = define.Utils;

let attribute_key = "$";
let value_key = "_";
import * as CommonStyles from '../common/StyleSheet';

export enum ComponentType {
    Text,
    Option,
    Step,
    BottomButtons,
    Button,
    Image,
    LeftRight,
}

let css = `
<style>
.bold{
    font-weight:bold;
}
.underline{
    text-decoration: underline;
}
p{
    font-size:${define.DefaultTextFontSize};
    font-family:Helvetica;        
}
span {
    font-family:Helvetica;   
    font-size:${define.DefaultTextFontSize};
}
.center {
    text-align: center;    
}
</style>
`;

export class ComponentModel {
    type: ComponentType;
    key: string;
    align: string;//left, right, center
    width: string;//number or percent
    height: string;//number or percent
    text: string;
    screen: string;
    style: any;

    url:string;
    position: string;//left , right

    image_name: string;
    accidentType: define.AccidentType;
    parentScreen: BaseScreen;

    // OPTIONS / STEPS
    components: Array<ComponentModel> = new Array<ComponentModel>();

    // TEXT    

    // BUTTON
    bottom_full = false;//3 buttons
    title: string = "";
    titleWidth = CommonStyles.buttonWidth;

    //STEP
    button: ComponentModel;

    constructor(props?) {
        this.key = Utils.stringFromDate(Utils.currentTime(), define.DATE_FORMAT_IOS);
    }

    setPlainText(text: string) {
        // text = Utils.replaceInString(text,"{br/}","\n");
        text = Utils.replaceInString(text, "{br/}", "");
        text = Utils.replaceInString(text, "     ", "");
        this.text = text;
    }

    setText(text: string) {
        let html = css + "<p>" + text + '</p>';
        html = Utils.replaceInString(html, "{br/}", "<br/>");
        html = Utils.replaceInString(html, "{bold}", "<span class='bold'>");
        html = Utils.replaceInString(html, "{bold-underline}", "<span class='bold underline'>");
        html = Utils.replaceInString(html, "{bold-center}", "<p class='bold center'>");
        html = Utils.replaceInString(html, "{underline}", "<span class='underline'>");
        html = Utils.replaceInString(html, "{center}", "<p class='center'>");

        html = Utils.replaceInString(html, "{/bold}", "</span>");
        html = Utils.replaceInString(html, "{/underline}", "</span>");
        html = Utils.replaceInString(html, "{/bold-underline}", "</span>");
        html = Utils.replaceInString(html, "{/bold-center}", "</p>");
        html = Utils.replaceInString(html, "{/center}", "</p>");
        this.text = html;
    }

    get image(): string {
        let img = this.getImagePath();
        return img;
    }

    setImage(name: string) {
        this.image_name = name;
    }

    getImagePath() {
        let dir = "assets/images/accidents/" + define.AccidentKeys[this.accidentType];
        dir += "/" + this.image_name;
        // alert(dir);
        return dir;
    }

    async getTitleWidth(){
        // const heights = await MeasureText.measure([]
        //  [this.title],
        //     width, /* container width */
        //     fontSize
        // ]);
    }

    render() {
        if (this.type == ComponentType.Option) {
            let componentRender: OptionComponentRender = new OptionComponentRender({ info: this });
            return componentRender.render();
        }
        if (this.type == ComponentType.Step) {
            let componentRender: StepComponentRender = new StepComponentRender({ info: this });
            return componentRender.render();
        }
        if (this.type == ComponentType.Text) {
            let componentRender: TextComponentRender = new TextComponentRender({ info: this });
            return componentRender.render();
        }
        if (this.type == ComponentType.BottomButtons) {
            let componentRender: BottomButtonsComponentRender = new BottomButtonsComponentRender({ info: this });
            
            return componentRender.render();
        }
        if (this.type == ComponentType.Image) {
            let componentRender: ImageComponentRender = new ImageComponentRender({ info: this });
            return componentRender.render();
        }
        if (this.type == ComponentType.LeftRight) {
            let componentRender: LeftRightComponentRender = new LeftRightComponentRender({ info: this });
            return componentRender.render();
        }
        if (this.type == ComponentType.Button) {
            let componentRender: ButtonComponentRender = new ButtonComponentRender({ info: this });
            return componentRender.render();
        }
        return null;

    }

    setAccidentType(type: define.AccidentType) {
        this.accidentType = type;
        this.components.forEach(element => {
            element.setAccidentType(type);
        });
    }
}


export let ScreenInfos: Array<ScreenModel> = new Array<ScreenModel>();
export class ScreenModel {
    id: string;
    from: string;
    components: Array<ComponentModel> = new Array<ComponentModel>();

    static parse(data: any) {
        let screen_object = new ScreenModel();
        let screen = data[define.SCREEN];
        let screen_id = screen[attribute_key][define.ID];
        screen_object.id = screen_id;
        // console.log("screen_id "+screen_id);
        if(screen_id == "Unconscious09"){
            
        }
        let accidentType: define.AccidentType = accidentTypeFromKey(screen_id);


        let components = screen[define.COMPONENT];
        for (let i = 0; i < components.length; i++) {
            let full_component = components[i];
            let value = full_component[value_key];
            let component = full_component[attribute_key];
            let type = component[define.TYPE];

            let component_object = new ComponentModel();
            if (type == define.TEXT) {
                component_object.type = ComponentType.Text;
                component_object.setText(value);
                component_object.align = component[define.ALIGN];
                // alert(Utils.objectLogger(component_object));
            } else if (type == define.STEP) {
                component_object.type = ComponentType.Step;
                let steps = full_component[define.STEP];
                for (let step_index = 0; step_index < steps.length; step_index++) {
                    let step = steps[step_index];
                    let step_object = new ComponentModel();
                    step_object.setText(step[define.TEXT][0]);
                    step_object.setImage(step[attribute_key][define.IMAGE]);
                    let button_object = step[define.BUTTON];
                    if (button_object) {
                        button_object = button_object[0][attribute_key];
                        let button_component = new ComponentModel();
                        button_component.type = ComponentType.Button;
                        button_component.title = button_object[define.TITLE];
                        button_component.screen = button_object[define.SCREEN];
                        step_object.button = button_component;
                    }
                    component_object.components.push(step_object);
                }
                // alert(Utils.objectLogger(component_object));
            } else if (type == define.OPTION) {
                component_object.type = ComponentType.Option;
                component_object.text = value;
                let options = full_component[define.OPTION];
                for (let i = 0; i < options.length; i++) {
                    let option = options[i];
                    let option_component = new ComponentModel();
                    let attributes = option[attribute_key];
                    option_component.screen = attributes[define.SCREEN];
                    option_component.text = option[value_key];
                    option_component.setImage(attributes[define.IMAGE]);
                    component_object.components.push(option_component);
                }
            } else if (type == define.BOTTOM_BUTTONS) {
                component_object.type = ComponentType.BottomButtons;
                let buttons = full_component[define.BUTTON];
                component_object.bottom_full = buttons.length == 3;                
                for (var index = 0; index < buttons.length; index++) {                    
                    let button = buttons[index][attribute_key];
                    let button_component = new ComponentModel();
                    // Utils.log(Utils.objectLogger(button));
                    button_component.type = ComponentType.Button;
                    button_component.align = button[define.ALIGN];
                    button_component.title = button[define.TITLE];
                    button_component.width = button[define.WIDTH];
                    button_component.url = button[define.URL];    
                    button_component.bottom_full = component_object.bottom_full;  
                    if (button[define.SCREEN]) {
                        button_component.screen = button[define.SCREEN];
                    }
                    button_component.getTitleWidth();

                    component_object.components.push(button_component);
                }
                // alert(Utils.objectLogger(component_object));
            } else if (type == define.IMAGE) {
                component_object.type = ComponentType.Image;
                let attributes = full_component[attribute_key];
                component_object.setImage(attributes[define.IMAGE]);
                component_object.height = attributes[define.HEIGHT];
                component_object.width = attributes[define.WIDTH];
                component_object.align = attributes[define.ALIGN];
                component_object.url = attributes[define.URL];
            } else if (type == define.LEFT_RIGHT) {
                component_object.type = ComponentType.LeftRight;
                let left_object = full_component["left"][0][define.COMPONENT][0][attribute_key];
                let right_object = full_component["right"][0][define.COMPONENT][0][attribute_key];
                let elements = [left_object, right_object];
                for (var index = 0; index < elements.length; index++) {
                    var element = elements[index];
                    let type = element[define.TYPE];
                    if (type == define.IMAGE) {
                        let sub_component = new ComponentModel();
                        sub_component.type = ComponentType.Image;
                        sub_component.position = element == left_object ? "left" : "right";
                        sub_component.setImage(element[define.IMAGE]);
                        sub_component.width = element[define.WIDTH];
                        sub_component.height = element[define.HEIGHT];
                        component_object.components.push(sub_component);
                        // alert(Utils.objectLogger(sub_component));
                    }
                }
                // alert(Utils.objectLogger(right_object));
            }

            if (component_object != null) {
                component_object.setAccidentType(accidentType);
                screen_object.components.push(component_object);
                // alert(Utils.objectLogger(component_object));
            }
        }

        ScreenInfos.push(screen_object);
    }
}

export class FlowModel {
    id: string;
    continue: string;
    from: string;
    yes: string;
    no: string;

    constructor(props?) {
        this.id = props.id;
        this.continue = props.continue;
        this.from = props.from;
        this.yes = props.yes;
        this.no = props.no;

    }

}

export function accidentTypeFromKey(screen_id: string) {
    let accidentType: define.AccidentType;
    for (var index = 0; index < define.AccidentKeys.length; index++) {
        let key = define.AccidentKeys[index];
        if (screen_id.search(key) != -1) {
            return index;
        }
    }
    return -1;
}


export function screenWithParams(params: any): ScreenModel {
    let id = params[define.ID];
    for (let i = 0; i < ScreenInfos.length; i++) {
        let screen: ScreenModel = ScreenInfos[i];        
        if (screen.id == id) {
            return screen;
        }
    }
    
    return null;
}


export let ScreenFlows: Array<FlowModel> = new Array<FlowModel>();

export function pushToAccidentInstruction(data: ComponentModel) {
    let screen = data.screen;
    let params = [];
    Utils.log("pushToAccidentInstruction "+screen);
    params[define.ID] = screen;
    let info = screenWithParams(params);
    params = [];
    params["info"] = info;
    params[define.TITLE] = define.AccidentInVietnamese[accidentTypeFromKey(info.id)];
    if(screen.indexOf("Warning") != -1){
        params[define.TITLE] = "Lưu ý quan trọng";
    }
    // params[define.TITLE] = info.id;//test
    BaseScreen.push("AccidentInstruction", params);
}