import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity, Slider } from 'react-native';
import { StackActions, SafeAreaView } from 'react-navigation';

import config from '../../config';

class Featured extends React.Component {
  state={
    renderItems: [],
    renderItems1: [
      {uri:'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500', name: 'Aquaman'},
      {uri:'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'Aquaman'},
      {uri:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Aquaman'},
      {uri:'https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg', name: 'Aquaman'},
      {uri:'https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689', name: 'Aquaman'}
    ],
  }

  componentDidMount(){
    console.log("CDM", config.localhost_url)

    return fetch(config.localhost_url+'/all-features-fetch', {
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
        renderItems: res.check
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


    render() {


      let featuredList=null;
      
      if(this.state.renderItems.length !=0){

      featuredList = this.state.renderItems.map((item,i) => {

        return (

          <View style={{ flex: 1, flexDirection:'column', alignItems: 'flex-start', backgroundColor:'black', marginBottom:10, marginTop:10}} key={i}>              
            <ScrollView horizontal> 
            <FlatList
              horizontal={true}
              data={item}
              renderItem={({item, index, separators}) => (
                <View style={{padding:5, marginTop:10}} key={i}>
                  <TouchableOpacity onPress={() => this.onPressImage(item)}>
                    <Image style={{width: 130, height: 150, borderRadius:5,backgroundColor:'grey'}} source={{uri: item.vid_thumbs}} />
                    <Text style={{color:'white'}}>{item.vid_name}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />        
            </ScrollView>
          </View>

        )
      })
    }

      console.log("state", this.state)


      return (
        <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
          <ScrollView>
          
            <View style={{flex:1}}>
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