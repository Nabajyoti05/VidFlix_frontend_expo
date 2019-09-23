import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';


class Featured extends React.Component {
  state={
    renderItems: []
  }

  componentDidMount(){

    fetch('/featureData', {
      method: 'GET'
    })
    .then(response => response.json())
    .then((res) => {
      console.log("Response", res);
    })

  }

  
    render() {
      console.log("state", this.state)
      let images = this.state.renderItems.map((item, i) => {
      console.log("Item", item.name);
        return (
        
          <View style={{padding:10, marginTop:10}} key={i}>
            <TouchableOpacity>
              <Image style={{width: 250, height: 170, borderRadius:5,backgroundColor:'grey'}} source={{uri: item.uri}} />
            </TouchableOpacity>
          </View>
        
        )
      })

      let images1 = this.state.renderItems.map((item, i) => {
        console.log("Item", item.name);
          return (
          
            <View style={{padding:10}} key={i}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')}>
                <Image style={{width: 180, height: 100, borderRadius:5,backgroundColor:'grey'}} source={{uri: item.uri}} />
              </TouchableOpacity>
              {/* <Text style={{color:'white'}}>{item.name}</Text> */}
            </View>
          
          )
        })

        let images2 = this.state.renderItems.map((item, i) => {
          console.log("Item", item.name);
            return (
            
              <View style={{padding:10}} key={i}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')}>
                  <Image style={{width: 120, height: 150, borderRadius:5,backgroundColor:'grey'}} source={{uri: item.uri}} />
                </TouchableOpacity>
                <Text style={{color:'white'}}>{item.name}</Text>
              </View>
            
            )
          })

          let images3 = this.state.renderItems.map((item,i) => {
            console.log("Item", item.name);
              return (
              
                <View style={{padding:10}} key={i}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')}>
                    <Image style={{width: 120, height: 150, borderRadius:5,backgroundColor:'grey'}} source={{uri: item.uri}} />
                  </TouchableOpacity>
                  <Text style={{color:'white'}}>{item.name}</Text>
                </View>
              
              )
            })

            let images4 = this.state.renderItems.map((item, i) => {
              console.log("Item", item.name);
                return (
                
                  <View style={{padding:10}} key={i}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')}>
                      <Image style={{width: 120, height: 150, borderRadius:5,backgroundColor:'grey'}} source={{uri: item.uri}} />
                    </TouchableOpacity>
                    <Text style={{color:'white'}}>{item.name}</Text>
                  </View>
                
                )
              })
      return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView>

          <View style={{ flex: 1, flexDirection:'column', alignItems: 'flex-start', backgroundColor:'black'}}>              
            <ScrollView horizontal>            
                {images}
            </ScrollView>
          </View>


          <View style={{flex: 1, flexDirection:'column', alignItems: 'flex-start', backgroundColor:'black'}}>
            <Text style={{color:'white'}}>Continue Watching</Text> 
            <ScrollView horizontal>
                  {images1}
            </ScrollView>
          </View>

          <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:'black'}}>
            <ScrollView horizontal>
                {images2}
            </ScrollView>
          </View>

          <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:'black'}}>
            <ScrollView horizontal>
                {images3}
            </ScrollView>
          </View>

          <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:'black'}}>
            <ScrollView horizontal>
                {images4}
            </ScrollView>
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