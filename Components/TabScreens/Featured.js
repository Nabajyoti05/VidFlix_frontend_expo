import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { StackActions, SafeAreaView } from 'react-navigation';

import config from '../../config';

const DEVICE_WIDTH= Dimensions.get("window").width;
class Featured extends React.Component {
  _scrollRef= React.createRef()

  state={
    renderItems: [],
    carouselItems:[],
    selectedIndex:0
  }


  componentDidMount(){
    console.log("DEVICE_WIDTH", DEVICE_WIDTH)

    setInterval(() => {
      this.setState(prevState => ({selectedIndex: prevState.selectedIndex + 1}),
      () => {
        if(this.state.carouselItems.length !==0){
          this._scrollRef.current.scrollTo({
            animated: true,
            y:0,
            x: DEVICE_WIDTH * this.state.selectedIndex
          })
        }
      })
    }, 3000)

    fetch(config.localhost_url+'/all-features-fetch', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then((res) => {
      console.log("Response", res);
      this.setState({
        renderItems: res.check,
        carouselItems: res.check[0]
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  onPressImage=(item)=>{

    const pushAction = StackActions.push({
      routeName: 'VideoProfileScreen',
      params: {
        item
      },
    });
    
    this.props.navigation.dispatch(pushAction);
   
  }

  setSelectedIndex = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize)
    this.setState({selectedIndex})
  }


    render() {


      const {selectedIndex}=this.state;


      let carouselItems=null;
      
      if(this.state.carouselItems.length !=0){

        carouselItems= (

          <View style={{ flex: 1, flexDirection:'column', alignItems: 'flex-start', backgroundColor:'#121212', marginBottom:10, marginTop:10}}>              
            <ScrollView horizontal pagingEnabled 
                onMomentumScrollEnd={this.setSelectedIndex}
                ref={this._scrollRef}
            > 
            <FlatList
              horizontal={true}
              data={this.state.carouselItems}
              renderItem={({item, index, separators}) => (
                <View style={{paddingTop:0, paddingRight:5.2, paddingLeft:6.3, paddingBottom:5, width:DEVICE_WIDTH}} key={index}>
                  <TouchableOpacity onPress={() => this.onPressImage(item)}>
                    <Image style={{width: '100%', height: 270, borderRadius:5,backgroundColor:'grey'}} source={{uri: item.vid_thumbs}} />
                    {/* <Text style={{color:'white'}}>{item.vid_name}</Text> */}
                  </TouchableOpacity>
                </View>
              )}
            />        
            </ScrollView>
          </View>

        )
    }


      let featuredList=null;
      let featname=null;
      
      if(this.state.renderItems.length !=0){

      featuredList = this.state.renderItems.map((item,i) => {
        item.map(feat => featname=feat.feature_name)
        
        return (
          
          <View style={{ flex: 1, flexDirection:'column', alignItems: 'flex-start', backgroundColor:'#121212', marginBottom:10, marginTop:10}} key={i}> 
            <Text style={{padding:5,color:'white', fontSize:18}}>{featname}</Text>
            <ScrollView horizontal> 
            <FlatList
              horizontal={true}
              data={item}
              renderItem={({item, index, separators}) => (
                <View style={{padding:5, marginTop:10, flexDirection:'row', width:140}} key={index}>
                  <TouchableOpacity onPress={() => this.onPressImage(item)}>
                    <Image style={{width: 130, height: 150, borderRadius:5,backgroundColor:'#121212'}} source={{uri: item.vid_thumbs}} />
                    <Text style={{color:'white',flex:1, flexWrap:'wrap', paddingTop:5}}>{item.vid_name}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />        
            </ScrollView>
          </View>

        )
      })
    }


      return (
        <SafeAreaView style={{flex:1, backgroundColor:'#121212'}}>
          <ScrollView>
          
            <View style={{flex:1}}>
              {carouselItems}
              {featuredList}
            </View>

          </ScrollView>
        </SafeAreaView>
        
      );
    }
  }
  
  // Later on in your styles..
  var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
  export default Featured;