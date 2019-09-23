import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Video } from "expo-av";

const deviceWidth = Dimensions.get("window").width;

export default class ProfileScreen extends PureComponent {

  render() {
    return (
    <SafeAreaView>
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          isLooping
          useNativeControls={true}
          style={{ width: deviceWidth, height: 300 }}
        />
    </SafeAreaView>
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