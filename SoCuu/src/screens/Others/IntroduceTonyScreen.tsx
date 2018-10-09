import React from 'react';

import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { BaseScreen } from '../BaseScreen';
import * as messages from '../../common/messages';
import * as Utils from '../../common/Utils';
import * as define from '../../common/define';
import * as CommonStyles from '../../common/StyleSheet';
import * as FlowProcess from '../../controllers/FlowProcess';

export default class IntroduceTonyScreen extends BaseScreen {

    constructor(prop) {
        super(prop);
        this.addLifeCycle();
    }

    componentDidMount() {
        this.setTitle("Tony Coffey");
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={{ uri: FlowProcess.imagePathWithName("Hinh Tony.JPG") }} style={styles.image} />
                    <Text style={styles.name} >Tony Coffey </Text>
                    <Text style={styles.text} >Paramedic Úc </Text>
                    <Text style={styles.content}>
                        Dự án được cố vấn bởi ông Tony Coffey là chuyên gia cố vấn thuộc Cơ quan cứu hộ khẩn cấp (Emergency Paramedic) tại Sydney, nước Úc.{"\n"}
                        3 năm qua ông đã thường xuyên đến Việt Nam để tổ chức chương trình Huấn Luyện Sơ Cấp cho người Việt, đặc biệt là các bạn trẻ. Đồng thời ông cũng đang đào tạo một cộng đồng tình nguyện viên được tập huấn để trở thành Huấn luyện viên sơ cứu tại địa phương của SSVN giúp nâng cao nhận thức và kỹ năng cấp cứu cho nhiều người
.</Text>
                </View>
            </ScrollView>


        );
    }

}



let appSize = Utils.appSize();
let marginLeft = 20;
let containerWith = appSize.width - 2 * marginLeft;
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: define.MarginTop,
        marginBottom:10,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        fontSize: define.DefaultTextFontSize,
        marginBottom: 20,
    },
    name: {
        fontSize: define.DefaultTextFontSize + 2,
        marginBottom: 20,
    },
    content: {
        marginLeft: 10,
        width: appSize.width - 20,
    },



});
