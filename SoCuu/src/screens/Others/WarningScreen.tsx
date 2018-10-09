import React from 'react';

import {Animated, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { BaseScreen } from '../BaseScreen';
import * as messages from '../../common/messages';
import * as Utils from '../../common/Utils';
import * as define from '../../common/define';
import * as CommonStyles from '../../common/StyleSheet';
import HeaderComponent from '../common/HeaderComponent';

export default class WarningScreen extends BaseScreen {
    render() {
        let ButtonStyles = CommonStyles.ButtonStyles;
        return (
            <Animated.View style={[styles.container,{ opacity: this.state[define.FADE] }]}>
                <HeaderComponent title="Lưu ý quan trọng"/>
                <View style={styles.content}>
                    <Text>
                        Thứ tự các ưu tiên xử lý cấp cứu bắt buộc:{"\n"}{"\n"}
                        <Text style={styles.bold}>
                            1. Ngưng tim{"\n"}
                            2. Đường thở không thông thoáng {"\n"}
                            3. Mất máu{"\n"}
                            4. Bỏng (phỏng){"\n"}
                            5. Gãy xương{"\n"}
                        </Text>

                    </Text>

                </View>

                <TouchableOpacity style={[ButtonStyles.button_container, styles.button]} onPress={this.click.bind(this)}>
                    <Text style={ButtonStyles.title}> ĐÃ  HIỂU</Text>
                </TouchableOpacity>
            </Animated.View>

        );
    }

    click() {
        this.parentScreen.reload({warning:false});
        BaseScreen.push("AccidentList", { animated: true });        
    }

    componentDidMount() {
        this.show(true);
    }

    show(show: boolean) {
        this.faded = !show;
        this.fade(200);        
    }
}

let appSize = Utils.appSize();
let marginLeft = 20;
let containerWith = appSize.width - 2 * marginLeft;
const styles = StyleSheet.create({
    container: {        
        alignItems: "center",
        position: "absolute",
        width: appSize.width,
        height: appSize.height,
        backgroundColor:"white",
    },
    content: {
        width: containerWith,
        height: 100,
        marginTop: 20,
    },
    button: {
        position: "absolute",
        bottom: 20,
    },
    bold:{
        fontSize:18,
        fontWeight:"bold",
        lineHeight:25,
    }
});
