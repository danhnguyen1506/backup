import React from 'react';

import {
    ScrollView,
    AppRegistry,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { BaseScreen } from './screens/BaseScreen';

import * as messages from './common/messages';

import * as define from './common/define';
let Utils = define.Utils;

import * as FlowProcess from './controllers/FlowProcess';
import AccidentListScreen from './screens/Accidents/AccidentListScreen';
import AccidentInstructionScreen from './screens/Accidents/AccidentInstructionScreen';
import WarningScreen from './screens/Others/WarningScreen';
import IntroduceTonyScreen from './screens/Others/IntroduceTonyScreen';
import AboutAppScreen from './screens/Others/AboutAppScreen';

import * as Flow from './models/ScreenFlow';

export default class HomeScreen extends BaseScreen {
    
    private warningScreen:WarningScreen;

    constructor(prop) {
        super(prop);
        Utils.setNavigator(this.props.navigator);
        this.addLifeCycle();
    }

    viewWillAppear() {
        this.hideNavigationBar(true);
    }

    render() {
        FlowProcess.parseScreens();

        return (
            <View style={{ flex: 1 }}>
                <ScrollView >
                    <View style={styles.container}>
                        <Image source={{ uri: FlowProcess.imagePathWithName("featured_photo.jpg") }} style={styles.cover} />
                        <TouchableOpacity style={styles.button} onPress={this._instructionClicked.bind(this)}>
                            <Text style={styles.button_title}> HƯỚNG DẪN SƠ CẤP CỨU </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._TonyCoffeyIntroductionClicked.bind(this)}>
                            <Text style={styles.button_title}> GIỚI THIỆU CHUYÊN GIA TONY COFFEY </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._appIntroductionClicked.bind(this)}>
                            <Text style={styles.button_title}> GIỚI THIỆU VỀ ỨNG DỤNG </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._trainingProgramClicked.bind(this)}>
                            <Text style={styles.button_title}> CHƯƠNG TRÌNH ĐÀO TẠO </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._partnerIntroduction.bind(this)}>
                            <Text style={styles.button_title}> GIỚI THIỆU NHÓM CỘNG SỰ </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._donateUs.bind(this)}>
                            <Text style={styles.button_title}> HỖ TRỢ CHÚNG TÔI </Text>
                        </TouchableOpacity>
                        <Text>
                            Lưu ý: ứng dụng này chỉ mang tính chất tham khảo và hỗ trợ và không thay thế được việc đào tạo sơ cấp cứu và thực hành thường xuyên.
                    </Text>
                    </View>

                </ScrollView>   
                {this.renderWarningScreen()}             
            </View>

        );
    }


    renderWarningScreen() {
        if (this.state.warning == true) {
            return (
                <WarningScreen faded={true} parentScreen={this}/>
            );
        }
        return null;
    }
    _instructionClicked() {
        this.reload({warning:true});
        // BaseScreen.present("Warning", { title: "Lưu ý quan trọng" });
    }

    _TonyCoffeyIntroductionClicked() {
        BaseScreen.push("IntroduceTony");
    }

    _appIntroductionClicked() {
        let data = new Flow.ComponentModel();
        data.screen = "AboutApp";
        Flow.pushToAccidentInstruction(data);

    }

    _trainingProgramClicked() {
        let data = new Flow.ComponentModel();
        data.screen = "TrainingProgram";
        Flow.pushToAccidentInstruction(data);

    }

    _partnerIntroduction() {
        let data = new Flow.ComponentModel();
        data.screen = "IntroducePartner";
        Flow.pushToAccidentInstruction(data);

    }

    _donateUs() {
        let data = new Flow.ComponentModel();
        data.screen = "DonateUs";
        Flow.pushToAccidentInstruction(data);
    }


}

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('AccidentList', () => AccidentListScreen);
Navigation.registerComponent('AccidentInstruction', () => AccidentInstructionScreen);
Navigation.registerComponent('Warning', () => WarningScreen);
Navigation.registerComponent('IntroduceTony', () => IntroduceTonyScreen);
Navigation.registerComponent('AboutApp', () => AboutAppScreen);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'Home',
        title: null,
    }
});

let appSize = Utils.appSize();
let marginLeft = 20;
let containerWith = appSize.width - 2 * marginLeft;
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: marginLeft,
        width: containerWith,
        alignItems: "center",
        marginBottom: 10,
    },
    cover: {
        width: 200,
        height: 139,
        marginBottom: 20,
    },
    button: {
        borderColor: "red",
        borderWidth: 1,
        width: 300,
        height: 35,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    button_title: {
        fontSize: define.DefaultTextFontSize,
        color: "red",
        fontWeight: "bold",
    },

});