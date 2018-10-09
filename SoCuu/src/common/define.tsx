import RNFetchBlob from 'react-native-fetch-blob';
import * as _Utils from './Utils';
export let Utils = _Utils;


export let DATE_FORMAT_IOS = "YYYY-MM-DDTHH:mm:ss.SSSZ";
export let DATE_KEY_FORMAT = "YYYY-MM-DDTHH:mm:ss.ms";
export let LIMIT_RECORD = 12;
export let API_DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

export enum AccidentType {
    Unconscious = 0,
    Bleeding,
    Burn,
    Bone,
    Stroke,
    Heart,
    Choke,
    Drown,
    ElectricShock,
    Bite,
    Poison,
    Bluish,
    AboutApp,
    DonateUs,
    TrainingProgram,
    IntroducePartner,
};

// export enum AccidentType {
//     Unconscious = 0,
//     VictimPosition,
//     OpenAirWay,
//     CPR,
//     Stroke,
//     Heart,
//     SuddenCardiacArrest,
//     Choke,
//     Bleeding,
//     Burn,
//     Bone,
    
//     Bluish,
//     Drown,
//     ElectricShock,
//     Bite,
//     Poison,
    
//     AboutApp,
//     DonateUs,
//     TrainingProgram,
//     IntroducePartner,
// };


//key
export let AccidentKeys = [];
// AccidentKeys[AccidentType.VictimPosition] = "VictimPosition";
// AccidentKeys[AccidentType.OpenAirWay] = "OpenAirWay";
AccidentKeys[AccidentType.Unconscious] = "Unconscious";
AccidentKeys[AccidentType.Bleeding] = "Bleeding";
AccidentKeys[AccidentType.Burn] = "Burn";
AccidentKeys[AccidentType.Bone] = "Bone";
AccidentKeys[AccidentType.Stroke] = "Stroke";
AccidentKeys[AccidentType.Heart] = "Heart";
AccidentKeys[AccidentType.Choke] = "Choke";
AccidentKeys[AccidentType.Drown] = "Drown";
AccidentKeys[AccidentType.ElectricShock] = "ElectricShock";
AccidentKeys[AccidentType.Bite] = "Bite";
AccidentKeys[AccidentType.Poison] = "Poison";
AccidentKeys[AccidentType.Bluish] = "Bluish";
AccidentKeys[AccidentType.AboutApp] = "AboutApp";
AccidentKeys[AccidentType.DonateUs] = "DonateUs";
AccidentKeys[AccidentType.TrainingProgram] = "TrainingProgram";
AccidentKeys[AccidentType.IntroducePartner] = "IntroducePartner";
// AccidentKeys[AccidentType.CPR] = "CPR";
// AccidentKeys[AccidentType.SuddenCardiacArrest] = "SuddenCardiacArrest";

export let AccidentInVietnamese = [];
AccidentInVietnamese[AccidentType.Unconscious] = "Bất tỉnh";
// AccidentInVietnamese[AccidentType.VictimPosition] = "Định vị tư thế Nạn Nhân";
// AccidentInVietnamese[AccidentType.SuddenCardiacArrest] = "Ngưng tim đột ngột";

// AccidentInVietnamese[AccidentType.CPR] = "Cách làm hồi sinh tim phổi(CPR)";

AccidentInVietnamese[AccidentType.Bleeding] = "Chảy máu";
AccidentInVietnamese[AccidentType.Burn] = "Bỏng";
AccidentInVietnamese[AccidentType.Bone] = "Gãy xương";
AccidentInVietnamese[AccidentType.Stroke] = "Đột quỵ";
AccidentInVietnamese[AccidentType.Heart] = "Nhồi máu cơ tim";
AccidentInVietnamese[AccidentType.Choke] = "Hóc";
AccidentInVietnamese[AccidentType.Drown] = "Đuối nước";
AccidentInVietnamese[AccidentType.ElectricShock] = "Điện giật";
AccidentInVietnamese[AccidentType.Bite] = "Rắn, côn trùng, sinh vật biển cắn/chích";
AccidentInVietnamese[AccidentType.Poison] = "Ngộ độc, nhiễm độc";
AccidentInVietnamese[AccidentType.Bluish] = "Gân,cơ,bầm";
AccidentInVietnamese[AccidentType.AboutApp] = "Về ứng dụng";
AccidentInVietnamese[AccidentType.DonateUs] = "Hỗ trợ chúng tôi";
AccidentInVietnamese[AccidentType.TrainingProgram] = "Chương trình đào tạo";
AccidentInVietnamese[AccidentType.IntroducePartner] = "Nhóm cộng sự";
// AccidentInVietnamese[AccidentType.OpenAirWay] = "Cách mở và kiểm tra hơi thở(Airway)";

export let DefaultOnLoadScreens = [];
DefaultOnLoadScreens[AccidentType.Bleeding] = "Bleeding1";
DefaultOnLoadScreens[AccidentType.Burn] = "Burn1";
DefaultOnLoadScreens[AccidentType.Bone] = "Bone1";
DefaultOnLoadScreens[AccidentType.Stroke] = "Stroke1";
DefaultOnLoadScreens[AccidentType.Choke] = "Choke1";
DefaultOnLoadScreens[AccidentType.Heart] = "Heart1";
DefaultOnLoadScreens[AccidentType.Drown] = "Drown1";
DefaultOnLoadScreens[AccidentType.ElectricShock] = "ElectricShock1";
DefaultOnLoadScreens[AccidentType.Bite] = "Bite1";
DefaultOnLoadScreens[AccidentType.Poison] = "Poison1";
DefaultOnLoadScreens[AccidentType.Bluish] = "Bluish1";
DefaultOnLoadScreens[AccidentType.Unconscious] = "Unconscious1";
// DefaultOnLoadScreens[AccidentType.VictimPosition] = "VictimPosition1";
// DefaultOnLoadScreens[AccidentType.OpenAirWay] = "OpenAirWay1";
// DefaultOnLoadScreens[AccidentType.CPR] = "CPR1";
// DefaultOnLoadScreens[AccidentType.SuddenCardiacArrest] = "SuddenCardiacArrest1";

export let TEXT = "text";
export let IMAGE = "image";
export let ALIGN = "align";
export let LEFT = "left";
export let RIGHT = "right";
export let CENTER = "center";
export let URL = "url";
export let WIDTH = "width";
export let HEIGHT = "height";
export let FONT_SIZE = "font_size";
export let TITLE = "title";
export let SCREEN = "screen";
export let ID = "id";
export let COMPONENT = "component";
export let TYPE = "type";
export let BOLD = "bold";
export let STEP = "step";
export let OPTION = "option";
export let BOTTOM_BUTTONS = "bottom_buttons";
export let BUTTON = "button";
export let LEFT_RIGHT = "left_right";

//images
export declare var require: any;
export let localImages = {};
// localImages["switch_list_icon"] = require("../../resources/images/switch_list_icon.png");
//callbacks
export type BooleanCallBack = (success: boolean) => void;
export type ObjectCallBack = (object: Object) => void;

export let tabbarColors = ["transparent", "#8CD036", "#c44b3d", "#5c92d2", "transparent"];

let debug = false;


let dirs = RNFetchBlob.fs.dirs;
let bundlePath = dirs.MainBundleDir;
if (Utils.isAndroid()) {
    bundlePath = dirs.DCIMDir;
}
bundlePath += "/";

export let ASSETS_PATH = bundlePath + "assets/";

export let DefaultTextFontSize = 14;
export let MarginTop = 20;
export let FADE = "fade";