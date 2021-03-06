import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ViewPagerAndroid, BackHandler, Dimensions, DeviceEventEmitter, AppState } from 'react-native'
import PageControl from 'react-native-page-control';
import { YellowBox } from 'react-native';
import { Icon } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'

var {width, height} = Dimensions.get('window')
class Unconscious5 extends Component {

    static navigationOptions = ({ navigation }) => ({
        // headerTitle:<View style={styles.headerTitle}>
          // <Text style={styles.buttonText}>BẤT TỈNH</Text>
          // <Text style={styles.text}>Xác định tư thế nạn nhân</Text>
        // </View>,
        // headerLeft: <HeaderBackButton onPress={() => navigation.goBack()
        //   //  && song.stop()
        //   }/>,
        // headerRight: <TouchableOpacity style={{alignSelf: 'center', paddingRight: 10}}>
        // <Icon name = 'home' type='entyco' size={35} onPress = {() => navigation.navigate('Login')
        // //  && song.stop()
        //  }/>
        // </TouchableOpacity>,
        //  headerTitleStyle : {flex: 1, textAlign: 'center',alignSelf:'center'},
            headerStyle:{
                backgroundColor:'white',
                marginBottom: -15,
                height: 0
            },
        })

        constructor(props) {
            super(props)
              YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
          }
        render() {
            return (
              <View style={styles.container}>
                <View style={styles.headerTitle}>
                  <Text style={styles.buttonText}>BẤT TỈNH</Text>
                  <Text style={styles.text}>Xác định tư thế nạn nhân</Text>

                  <TouchableOpacity style={{position: 'absolute', alignSelf: 'flex-end', left: 20, width: 50, height: 50, justifyContent: 'center'}}
                    onPress = {() => this.props.navigation.goBack()}>
                    <Icon name = 'ios-undo' type='ionicon' size={35}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={{position: 'absolute', alignSelf: 'flex-start', right: 20}}
                    onPress = {() => this.props.navigation.navigate('Login')}>
                    <Icon name = 'home' type='entyco' size={35}/>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious6')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/nannhannamsap.webp')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Nạn nhân nằm sấp</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious7')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/tuthephuctap.webp')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Nạn nhân nằm tư thế phức tạp</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious9')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/khongchanthuongco.webp')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Nạn nhân nằm ngửa KHÔNG</Text>
                    <Text style={styles.buttonText1}>nghi ngờ chấn thương cột sống cổ</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious8')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/cochanthuongco.webp')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Nạn nhân nằm ngửa CÓ</Text>
                    <Text style={styles.buttonText1}>nghi ngờ chấn thương cột sống cổ</Text>
                </TouchableOpacity>
              </View>
            )
          }
      }
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  semiButtonText: {
    color: 'black',
    fontSize: 16,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    bottom: 3
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#2699FB',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    alignContent: 'center',
  },
  
  buttonText1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    alignContent: 'center'
  },

  image: {
    flex: 1,
    width: width/1.3,
    height: height/5.65,
    // marginTop: 20,
    alignSelf: 'center',
    justifyContent:'center',
    
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width/1.3,
    height: height/5.65,
    
  },

  button: {
    marginBottom: 15,
    marginRight: 5,
    marginLeft: 5,
    width: width/1.3,
    height: height/5.65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  headerTitle: {
    width: '100%', 
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 50,
    top: 20,
  },
})

export default Unconscious5