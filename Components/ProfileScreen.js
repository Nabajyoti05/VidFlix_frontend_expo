import React, { PureComponent, Component } from "react";
import {
  View,
  AsyncStorage,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Share,
  Alert,
  Image,
  ScrollView,
  ImageBackground,
  BackHandler
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Video } from "expo";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from "native-base";
// import { ip_address } from "../../../keys";
import {
  MaterialCommunityIcons,
  Entypo,
  SimpleLineIcons
} from "@expo/vector-icons";
// import { Query, graphql, Mutation } from "react-apollo";
// import ConfirmDialog from "../Dialog/ConfirmDialog";
// import ActionSheet from "../ActionSheet";
// import gql from "graphql-tag";
// import { DangerZone } from "expo";
// import ListForPostScreen from "../../screens/HomeStack/Comment-Screen/listForPostScreen.js";
// let { Lottie } = DangerZone;

const deviceWidth = Dimensions.get("window").width;

export default class ProfileScreen extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     likes: 0,
  //     liked: false,
  //     animation: null,
  //     pressed: false
  //   };
  // }

  // static navigationOptions = ({ navigation, screenProps }) => ({
  //   headerStyle: {
  //     backgroundColor: "#000000",
  //     borderBottomColor: "transparent"
  //   },

  //   headerBackTitle: null,
  //   headerTintColor: "white"
  // });
  // componentWillMount = () => {
  //   // let { tag, likes, liked } = this.props;
  //   // console.log(liked, tag);
  //   // this.setState({ likes: likes, liked: liked });
  // };

  // onShare = async () => {
  //   // let { fileUrl } = this.props;
  //   try {
  //     const result = await Share.share({
  //       message: "BAM: You are about to share content from Project Native",
  //       url: fileUrl,
  //       title: "Wow, did you see that?"
  //     });

  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  // openConfirm = show => {
  //   this.setState({ showConfirm: show });
  // };

  // defaultTitles = () => {
  //   var arr = [];
  //   if (this.props.showDelete) {
  //     arr = [
  //       {
  //         title: "Share",
  //         action: () => {
  //           this.onShare();
  //         }
  //       },
  //       {
  //         title: "Delete",
  //         actionStyle: "destructive",
  //         action: () => {
  //           this.openConfirm(true);
  //         }
  //       },
  //       {
  //         title: "Cancel",
  //         actionStyle: "cancel",
  //         action: () => {
  //           console.log("click Cancel");
  //         }
  //       }
  //     ];
  //   } else {
  //     arr = [
  //       {
  //         title: "Share",
  //         action: () => {
  //           this.onShare();
  //         }
  //       },
  //       {
  //         title: "Cancel",
  //         actionStyle: "cancel",
  //         action: () => {
  //           console.log("click Cancel");
  //         }
  //       }
  //     ];
  //   }
  //   return arr;
  // };

  // optionYes = () => {
  //   let { user_id, post_id } = this.props;
  //   this.openConfirm(false);
  //   const config = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       post_id: post_id,
  //       user_id: user_id
  //     })
  //   };
  //   fetch(ip_address + "/delete-post", config)
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       console.log(responseJson);
  //       this.props.closeModalOnDeletePost();
  //     });
  // };

  // optionNo = () => {
  //   this.openConfirm(false);
  //   setTimeout(() => {
  //     Alert.alert("The NO Button touched!");
  //   }, 300);
  // };

  render() {
    // let {
    //   user_id,
    //   user_id_currentuser,
    //   post_id,
    //   name,
    //   photo,
    //   tag,
    //   fileType,
    //   fileUrl,
    //   likes
    // } = this.props;
    // this.setState({ likes: likes });
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* <ActionSheet
          ref="picker"
          titles={this.defaultTitles()}
          separateHeight={3}
          separateColor="#dddddd"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          containerStyle={{ margin: 10, borderRadius: 20 }}
          onClose={obj => {
            console.log("action sheet closed! clicked:" + JSON.stringify(obj));
          }}
        /> */}

        {/* <ConfirmDialog
          title="Are you sure about that ?"
          onTouchOutside={() => this.openConfirm(false)}
          visible={this.state.showConfirm}
          negativeButton={{
            title: "NO",
            onPress: this.optionNo,
            // disabled: true,
            titleStyle: {
              color: "blue",
              colorDisabled: "aqua"
            },
            style: {
              backgroundColor: "transparent",
              backgroundColorDisabled: "transparent"
            }
          }}
          positiveButton={{
            title: "YES",
            onPress: this.optionYes
          }}
        /> */}
        {/* <Card style={{ borderRadius: 20, marginLeft: 5, marginRight: 5 }}>
          <CardItem
            style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          >
            <Left> */}
              {/* <Thumbnail source={{ uri: photo }} /> */}
              {/* <Body>
                <Text
                  style={{ fontWeight: "600" }}
                > */}
                  {/* {name}{" "} */}
                {/* </Text>
              </Body>
            </Left>
            <Right>
              <TouchableOpacity
                style={styles.welcome}
                onPress={() => {
                  this.setState({ titles: this.customTitles }, () => {
                    this.refs.picker.show();
                  });
                }}
              >
                <SimpleLineIcons
                  name="options-vertical"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </Right>
          </CardItem>
          <CardItem cardBody> */}
            {/* {fileType === "Image" ? (
              <ImageBackground
                blurRadius={60}
                resizeMode={"cover"}
                source={{ uri: 'https://www.youtube.com/watch?v=uQF7_gAW4W0' }}
                style={{
                  width: Dimensions.get("window").width - 10,
                  height: Dimensions.get("window").width,
                  alignItems: "center",
                  justifyContent: "center"
                }} */}
              {/* >
                <Image
                  source={{ uri: fileUrl }}
                  resizeMethod={"scale"}
                  resizeMode={"contain"}
                  style={{
                    width: Dimensions.get("window").width - 10,
                    height: Dimensions.get("window").width
                  }}
                />
              </ImageBackground> */}
            {/* ) : ( */}
              <Video
                source={{ uri: 'https://www.youtube.com/watch?v=uQF7_gAW4W0' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                useNativeControls={true}
                style={{
                  width: Dimensions.get("window").width,
                  height: Dimensions.get("window").width,
                  borderRadius: 10
                }}
              />
            {/* )} */}
          {/* </CardItem>
          <CardItem>
            <Body> */}
              {/* {tag === "" ? null : ( */}
                {/* <Text> */}
                  {/* <Text style={{ fontWeight: "600" }}>{name}</Text> */}
                  {/* {" " + tag} */}
                {/* </Text> */}
              {/* )} */}
            {/* </Body>
          </CardItem>
          <CardItem
            style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          >
            <Body>
              <Text>
                <Text
                  style={{
                    fontWeight: "900",
                    marginLeft: "10",
                    // fontFamily: "Montserrat-SemiBold"
                  }}
                >
                  {this.state.likes}
                </Text>
                {this.state.likes == 1 ? " like" : " likes"}
              </Text>
            </Body>
          </CardItem>
        </Card> */}
        <View style={{ flexDirection: "column", paddingTop: 10 }}>
          {/* <ListForPostScreen
            post_id={post_id}
            user_id_currentuser={user_id_currentuser}
            username={name}
            userPhoto={photo}
          /> */}
        </View>
      </ScrollView>
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