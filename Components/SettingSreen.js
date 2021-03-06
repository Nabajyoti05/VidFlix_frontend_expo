import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid, AsyncStorage} from 'react-native';


class SettingScreen extends React.Component {


  state ={
    user_id:''
  }


  componentDidMount(){
    AsyncStorage.getItem("hometheaterUser", (err, userDetails) => {
      if(err){
        console.log("Error getting item", err)
      } else {
        if(userDetails !== null){
          console.log("userDetails", userDetails)         
        } else {
          console.log("No userDetails")
        }
      }
    })
  }


  onPressSignOut = () => {
    this.setState({
      user_id:''
    })

    AsyncStorage.removeItem("hometheaterToken", (err, token) => {
      if(err){
        console.log("Error getting item", err)
      } else {
          ToastAndroid.show("Signed Out Successfully", ToastAndroid.BOTTOM)
          this.props.navigation.navigate('Login')
      }
    })

             
  }
  
    render() {
      
      return (
          <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            <View style={styles.outerContainer}>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>Signed in as</Text>
                <Text style={styles.textDecor}>Naufil Shaikh</Text>
              </View>
              
                {/* <View style={styles.innerContainer}>
                  <Text style={styles.text}>Video Streaming Settings</Text>
                  <Text style={styles.textDecor}>480p</Text>
                </View> */}

              <View style={styles.innerContainer}>
                <Text style={styles.text}>Notifications</Text>
              </View>


              <View style={styles.innerContainer}>
                <Text style={styles.text}>Clear Search History</Text>
              </View>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>Contact Us</Text>
              </View>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>About</Text>
              </View>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>Help</Text>
              </View>

              <View style={styles.innerContainer}>
                <TouchableOpacity onPress={() => this.onPressSignOut()}>
                <Text style={styles.text}>Sign Out</Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </View>
      );
    }
  }

  const styles=StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor:'#212121'
    },
    header:{
      color:'white',
      marginTop:20,
      fontSize:20,
      // fontFamily:'Muli'
    },
    outerContainer:{
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      width:'100%',
      padding:10,
      marginTop:40,
      // borderWidth:2,
      // borderColor:'red'
    },
    innerContainer:{
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      width:'100%', 
      padding:15,  
      borderWidth:1,
      // borderColor:'green',
      borderColor:'#212121',
      borderBottomColor:'#b8b8b8'
    },
    text:{
      // fontFamily:'Muli',
      fontSize:18,
      color:'white',
      padding:5
    },
    textDecor:{
      // fontFamily:'Muli',
      fontSize:16,
      padding:5,
      color:'#d1d1d1'
    }
    
  })

  export default SettingScreen;