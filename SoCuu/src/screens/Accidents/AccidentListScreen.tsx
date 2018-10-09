import React from 'react';

import { ListView, StyleSheet, Text } from 'react-native';

import { BaseScreen } from '../BaseScreen';
import * as messages from '../../common/messages';
import * as Utils from '../../common/Utils';
import * as define from '../../common/define';
import ThumbWithTextComponent from '../common/ThumbWithTextComponent';
import * as Flow from '../../models/ScreenFlow';

let ds = Utils.ListViewDataSource;
let accidents = [];


for (let i = 0; i <= define.AccidentType.Poison; i++) {
    let key = define.AccidentKeys[i];
    let object = {};
    object[define.TEXT] = define.AccidentInVietnamese[i];
    object[define.TYPE] = i;
    object[define.IMAGE] = define.ASSETS_PATH + "images/list/" + key.toLowerCase() + ".jpg";
    accidents.push(object);
}
let dataSource = Utils.ListViewDataSource.cloneWithRows(accidents);

export default class AccidentListScreen extends BaseScreen {
    render() {
        return (
            <ListView contentContainerStyle={styles.content}
                style={styles.container}
                enableEmptySections={true}
                dataSource={dataSource}
                renderRow={this.renderItem.bind(this)}
                initialListSize={accidents.length}
            />
        );
    }

    componentDidMount() {
        this.setTitle("Các sự cố thường gặp");
    }

    renderItem(item: any) {
        return (
            <ThumbWithTextComponent data={item} click={this._clickOnItem.bind(this)}/>
        );
    }

    _clickOnItem(data:any){
        let type = data.type;
        let screen_id = define.DefaultOnLoadScreens[type];
        let params = [];
        params[define.ID] = screen_id;
        // Utils.log("screen_id "+screen_id);
        let info:Flow.ScreenModel = Flow.screenWithParams(params);
        if(info == null){
            alert("Nội dung dang cập nhật "+screen_id);
            return;
        }
        // alert("info "+Utils.objectLogger(info));        
        BaseScreen.navigatorCount = 0;
        
        BaseScreen.push("AccidentInstruction",{info:info,title:define.AccidentInVietnamese[type]});
        
    }
}

let appSize = Utils.appSize();

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    container: {
        flex: 1,
    },


});