import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  BackHandler
} from "react-native";
import { Video } from "expo-av";
import { ScreenOrientation } from 'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class ProfileScreen extends PureComponent {

  componentDidMount(){
    console.log("Props in Video Screen", this.props);
    this._videoRef.stopAsync()
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this._handleBackHandler);
  }

  _handleBackHandler = () => {

    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);

    this.props.navigation.goBack(); // works best when the goBack is async
    return true;

  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackHandler);
  }

  onReady = () => {
      ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
      this._videoRef.playAsync();
  }

  _onDidFinish = (status) => {

    if(status.didJustFinish){
      this._videoRef.stopAsync()
      ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
      // this.props.navigation.navigate('VideoProfileScreen');
      this.props.navigation.goBack();
    }

  }

  render() {

    console.log("Video", this.props.navigation.state.params.video)

    return (
    // <SafeAreaView style={{flex:1, backgroundColor:'#121212', justifyContent:'center', alignItems:'center'}}>

      <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', padding:1, backgroundColor:'#121212'}}>
          <Video
            ref={(ref) => this._videoRef = ref}
            source={{ uri: this.props.navigation.state.params.video }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay={true}
            isLooping
            useNativeControls={true}
            style={{ width: deviceHeight, height: deviceWidth-30}}
            onReadyForDisplay={() => this.onReady()}
            onPlaybackStatusUpdate={(status) => this._onDidFinish(status)}
          />
      </View>
    // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#000000"
  },
  fitImageWithSize: {
    height: 100,
    width: 30
  }
});