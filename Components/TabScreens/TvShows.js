import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackActions, SafeAreaView } from 'react-navigation';

import config from '../../config';

class Featured extends React.Component {
  state={
    renderItems: []
  }

  componentDidMount(){

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


      let tvShowsList=null;
      
      if(this.state.renderItems.length !=0){

        tvShowsList = this.state.renderItems.map((item,i) => {

        return (

          

          <View style={{ flex: 1, flexDirection:'column', alignItems: 'flex-start', backgroundColor:'#121212', marginBottom:10, marginTop:10}} key={i}>              
            <ScrollView horizontal> 
            <FlatList
              horizontal={true}
              data={item}
              renderItem={({item, index, separators}) => (
                <View style={{padding:5, marginTop:10, flexDirection:'row', width:140}} key={i}>
                  <TouchableOpacity onPress={() => this.onPressImage(item)}>
                    <Image style={{width: 130, height: 150, borderRadius:5,backgroundColor:'grey'}} source={{uri: item.vid_thumbs}} />
                    <Text style={{color:'white', flex:1, flexWrap:'wrap'}}>{item.vid_name}</Text>
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
          <SafeAreaView style={{flex:1, backgroundColor:'#121212'}}>
        <ScrollView>
          <View style={{flex:1}}>
            {tvShowsList}
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