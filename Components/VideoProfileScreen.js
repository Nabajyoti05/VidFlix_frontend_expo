import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView,SafeAreaView, BackHandler } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { StackActions, withNavigationFocus } from 'react-navigation';

class VideoProfileScreen extends React.Component {
  state={
    VideoData:[]
  }

  componentDidMount(){
    console.log("Props in Video Profile Screen", this.props);

    const {params} =this.props.navigation.state
    console.log("params", params);
    this.setState({
      VideoData: params.item
    })

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this._handleBackHandler);
  }

  _handleBackHandler = () => {

    this.props.navigation.navigate('HomeScreen');
    return true;

  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackHandler);
  }

  onPressVideo=(video)=>{

    const pushAction = StackActions.push({
      routeName: 'VideoScreen',
      params: {
        video
      },
    });
    
    this.props.navigation.dispatch(pushAction);
   
  }


    render() {

      console.log("state", this.state);
      // let images1 = this.state.renderItems.map((item, i) => {
      //   console.log("Item", item.name);
      //     return (
          
      //       <View style={{padding:4}} key={i}>
      //         <TouchableOpacity>
      //           <Image style={{width: 130, height: 150, borderRadius:5}} source={{uri: item.uri}} />
      //         </TouchableOpacity>
      //       </View>
          
      //     )
      //   })
      return (
        
        <SafeAreaView style={{flex:1, justifyContent:'flex-start', backgroundColor:'#121212'}}>
        <ScrollView>
          <View style={styles.container}>
            <View style={{padding:0}}>
              <TouchableOpacity onPress={() => this.onPressVideo(this.state.VideoData.vid_location)}>
                  <Image style={{width:412, height: 280}} source={{uri: this.state.VideoData.vid_thumbs}} />
                <View style={{position:'absolute', marginLeft:170, marginTop:90}}><Icons name="md-play-circle" style={{position:'absolute'}} size={80} color='white' /></View>
              </TouchableOpacity>
            </View>  

            <View style={{padding:5}}>
              <Text style={{fontSize:18, marginLeft:10, color:'white'}}>{this.state.VideoData.vid_name}</Text>
              <Text style={{fontSize:14, marginLeft:10, color:'#e3e3e3'}}>18+ | Series | 1 40 min </Text>
            </View>

            <View style={{padding:5, flexDirection:'row'}}>
              <Text style={{padding:5, borderColor:'white',borderWidth:0.7, borderRadius:5, width:100, marginLeft:10, marginRight:37, textAlign:'center', color:'white'}}>Watch trailer</Text>
              <Text style={{padding:5, borderColor:'white',borderWidth:0.7, borderRadius:5, width:100, marginRight:37, textAlign:'center', color:'white'}}>Share</Text>
              <Text style={{padding:5, borderColor:'white',borderWidth:0.7, borderRadius:5, width:100, textAlign:'center', color:'white'}}>Watch later</Text>
            </View>

            <View style={{padding:5, alignItems:'center'}}>
              <Text style={{fontSize:14, marginLeft:10 ,color:'white'}}>{this.state.VideoData.vid_desc}</Text>
            </View>
          </View>
        </ScrollView>   
        </SafeAreaView>  
      );
    }
  }

  const styles=StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start',
    },
    linearGradient: {
      flex: 1,
      // paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    }
  })

  export default withNavigationFocus(VideoProfileScreen);