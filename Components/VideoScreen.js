import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

class VideoScreen extends React.Component {
  state={
    renderItems: [
      {uri:'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500', name: 'Aquaman'},
      {uri:'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'Aquaman'},
      {uri:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Aquaman'},
      {uri:'https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg', name: 'Aquaman'},
      {uri:'https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689', name: 'Aquaman'}
    ]
  }
    render() {
      let images1 = this.state.renderItems.map((item, i) => {
        console.log("Item", item.name);
          return (
          
            <View style={{padding:4}} key={i}>
              <TouchableOpacity>
                <Image style={{width: 130, height: 150, borderRadius:5}} source={{uri: item.uri}} />
              </TouchableOpacity>
            </View>
          
          )
        })
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={{padding:0}}>
              <TouchableOpacity>
                {/* <LinearGradient colors={['black', 'green', 'red']} style={styles.linearGradient}> */}
                  <Image style={{width:412, height: 280}} source={{uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'}} />
                {/* </LinearGradient> */}
                <View style={{position:'absolute', marginLeft:160, marginTop:90}}><Icons name="md-play-circle" style={{position:'absolute'}} size={100} color='red' /></View>
              </TouchableOpacity>
            </View>  

            <View style={{padding:5}}>
              <Text style={{fontSize:18, marginLeft:10}}>Scared Games - Season 1 Episode 4</Text>
              <Text style={{fontSize:12, marginLeft:10}}>18+ | Series | 1 40 min </Text>
            </View>

            <View style={{padding:5,flexDirection:'row'}}>
              <Text style={{padding:5, borderColor:'grey',borderWidth:1, borderRadius:5, width:100, marginLeft:10, marginRight:37, textAlign:'center'}}>Watch trailer</Text>
              <Text style={{padding:5, borderColor:'grey',borderWidth:1, borderRadius:5, width:100, marginRight:37, textAlign:'center'}}>Share</Text>
              <Text style={{padding:5, borderColor:'grey',borderWidth:1, borderRadius:5, width:100, textAlign:'center'}}>Watch later</Text>
            </View>

            <View style={{padding:5, alignItems:'center'}}>
              <Text style={{fontSize:14, marginLeft:10}}>When police officer Sartaj Singh receives an anonymous tip about the location of criminal overlord Ganesh Gaitonde, he embarks on a chase around Mumbai in what becomes a dangerous cat-and-mouse game. Amidst the chaos, trappings of a corrupt underworld are revealed. After being removed from the Gaitonde case, Singh begins his own investigation as he works to save Mumbai from impending doom. Flashbacks reveal some of the crimes that Gaitonde has committed through the years.</Text>
            </View>

            <View style={{padding:5}}>
              <Text style={{fontSize:14, marginLeft:10}}>Starring</Text>
              <Text style={{fontSize:14, marginLeft:10}}>Saif Ali Khan, Nawazuddin Siddiqui, Radhika Apte, Pankaj Tripathi</Text>
            </View>

            <View style={{flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:''}}>
            <ScrollView horizontal>
                  {images1}
            </ScrollView>
          </View>

          <View style={{flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:''}}>
            <ScrollView horizontal>
                  {images1}
            </ScrollView>
          </View>
          </View>
        </ScrollView>     
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

  export default VideoScreen;