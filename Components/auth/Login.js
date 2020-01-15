import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import {TextField} from 'react-native-material-textfield';
import { LinearGradient } from 'expo-linear-gradient';
import config from '../../config';

class LoginScreen extends React.Component {

  state = {
    email:'',
    password:'',
    emailValid: false,
    passwordValid: false
  }

  onEmailChanged = (value) => {
    this.setState({
      email: value,
      emailValid: true
    })
  }


  onPasswordChanged = (value) => {
    this.setState({
      password: value,
      passwordValid: true
    })
  }

  onPressSubmit = () => {

    let login_data={
      email: this.state.email,
      pass: this.state.password
    }

    fetch(config.localhost_url+'/login',{
      method: 'POST',
      headers: {
          // 'x-Auth':this.props.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login_data)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("Response", responseJson)
      alert("Logged In Successfully")

    })
  }
  
    render() {

      console.log("State", this.state);

      return (
        <SafeAreaView style={{flex:1}}>

        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>

            <View style={{flexDirection:'column', padding:10, paddingBottom:20}}>
              {/* <Text style={{fontSize: 18,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            textAlign: 'left',
                            color: '#eeeeee',
                            paddingBottom:5
                            }}>Email</Text> */}

              <TextField
                onChangeText={this.onEmailChanged}
                label="Email Address"
                value={this.state.email}
                lineWidth={2}
                tintColor="white"
                baseColor="white"
                textColor="white"
                containerStyle={{width:300, height: 50}}
              />

            </View>
            <View style={{flexDirection:'column', padding:10, paddingBottom:30}}>

              <TextField 
                onChangeText={this.onPasswordChanged}
                label="Password"
                secureTextEntry={true}
                value={this.state.password}
                lineWidth={2}
                tintColor="white"
                baseColor="white"
                textColor="white"
                containerStyle={{width:300, height: 50}}
              />
              
            </View>

            <View style={{padding:20}}>
              <TouchableOpacity onPress={() => this.onPressSubmit()}>
                <LinearGradient colors={['#5a76fd', '#2de4af']} style={{width: 300,
                              height: 50,
                              borderRadius: 8,
                              justifyContent:'center'
                              }}>


                                <Text 
                                  style={{width: 60,
                                      fontFamily: 'Roboto',
                                      fontSize: 19,
                                      fontWeight: '500',
                                      fontStyle: 'normal',
                                      alignSelf:'center',
                                      color: '#ffffff'}} 
                                >LOGIN</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
      container : {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor:'black',
      }
  })

  export default LoginScreen;