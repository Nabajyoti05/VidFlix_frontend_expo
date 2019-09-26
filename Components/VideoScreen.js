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

    console.log("Video", this.props.navigation.state.params.video)

    return (
    <SafeAreaView>
        <Video
          source={{ uri: this.props.navigation.state.params.video.mp4 }}
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