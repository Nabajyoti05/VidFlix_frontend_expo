import React from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView,Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Icons from 'react-native-vector-icons/Ionicons';


export default class ExploreScreen extends React.Component{
  state={
    renderItems: [
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      {uri:'', name: 'Aquaman'},
      // {uri:'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500', name: 'Aquaman'},
      // {uri:'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'Aquaman'},
      // {uri:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Aquaman'},
      // {uri:'https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg', name: 'Aquaman'},
      // {uri:'https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689', name: 'Aquaman'}
    ],
    categories:[
      {id:1,name:'Horror'},
      {id:2,name:'Comedy'},
      {id:3,name:'Adventure'},
      {id:4,name:'Action'},
      {id:5,name:'Thriller'},
      {id:6,name:'Entertainment'},
    ],
    subCategories:[
      {id:1,name:'Movies'},
      {id:2,name:'Series'},
      {id:3,name:'Tv Shows'},
    ],
    language:[
      {id:1,name:'Hollywood'},
      {id:2,name:'Bollywood'},
    ],
    cat: false,
    search:'',
    searchValid: false
  }

  onCatHandler = (id) => {
    let cat=[];
    this.state.categories.filter(item => {
      cat = item.id === id  
    })
    this.setState({cat:true})
  }

  onSearchChanged = (value) => {
    this.setState({
      search: value,
      searchValid: true
    })
  }

  render(){
        let images1 = this.state.renderItems.map((item, i) => {
        console.log("Item", item.name);
          return (
          
            <View style={{padding:5}} key={i}>
              <TouchableOpacity>
                <Image style={{width: 130, height: 150, borderRadius:5, backgroundColor:'grey'}} source={{uri: item.uri}} />
              </TouchableOpacity>
            </View>
          
          )
        })

        let images2 = this.state.renderItems.map((item, i) => {
          console.log("Item", item.name);
            return (
            
              <View style={{padding:4}} key={i}>
                <TouchableOpacity>
                  <Image style={{width: 130, height: 150, borderRadius:5, backgroundColor:'grey'}} source={{uri: item.uri}} />
                </TouchableOpacity>
              </View>
            
            )
          })

        let categories = this.state.categories.map((item) => {
          return (
            <TouchableOpacity onPress={this.onCatHandler.bind(item.id)}>            
              <Text style={{padding:5, borderColor:'grey',borderWidth:1, borderRadius:5, width:100, marginRight:10, textAlign:'center'}}>{item.name}</Text>
            </TouchableOpacity>
          )
        })
    return(
      <ScrollView contentContainerStyle={{flexGrow:1}} style={{backgroundColor:'black'}}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>

            <TextField 
              onChangeText={this.onSearchChanged}
              label="Search"
              value={this.state.search}
              lineWidth={0.5}
              tintColor="white"
              baseColor="white"
              textColor="white"
              containerStyle={{width:'80%', height: 50}}
            />

        </View>

      {this.state.cat ? null :
        <View style={{padding:10}}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>Recent Searches</Text>
        </View>
      }

      {this.state.cat ? null :
          <View style={{flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:''}}>
            <ScrollView horizontal>
                  {images1}
            </ScrollView>
          </View>
      }

        <View style={{paddingTop:5, paddingBottom:5, marginTop:20}}>
          <FlatList 
            // horizontal={true}
            data={this.state.categories}
            numColumns={3}
            renderItem={({item, index, separators}) => (
                <View style={{padding:10,flex:1, flexDirection:'column'}}>
                  <TouchableOpacity onPress={this.onCatHandler.bind(item.id)} key={index}>            
                    <Text style={{padding:5, borderColor:'grey',borderWidth:1, borderRadius:5, width:105, marginRight:10, textAlign:'center', color:'white'}}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
            )}
          />
          </View>

          
{/* {this.state.cat ? null : */}
          <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:''}}>
            <ScrollView horizontal>
                {images2}
            </ScrollView>
          </View>
{/* } */}

{/* {this.state.cat ? null : */}
          <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:''}}>
            <ScrollView horizontal>
                {images2}
            </ScrollView>
          </View>
{/* } */}

{/* {this.state.cat ? null : */}
          <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:''}}>
            <ScrollView horizontal>
                {images2}
            </ScrollView>
          </View>
{/* } */}
          
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'black'
  },
  innerContainer:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:20,
  },
  textInput:{
    width:'90%',
    height:50,
    fontSize:18,
    borderRadius:20,
    borderWidth:1,
    // flex: 1,
    padding: 15,
    // paddingRight: 10,
    // paddingBottom: 10,
    // paddingLeft: 0,
    marginRight:'5%'
  }
})