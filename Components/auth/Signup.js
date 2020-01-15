import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import {TextField} from 'react-native-material-textfield';
import { LinearGradient } from 'expo-linear-gradient';
import config from '../../config';

class SignupScreen extends React.Component {

  state={
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    nameValid: false,
    emailValid:false,
    passwordValid:false,
    confirmPasswordValid:false
  }

  onNameChanged = (value) => {
    this.setState({
      name: value,
      nameValid: true
    })
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

  onConfirmPasswordChanged = (value) => {
    this.setState({
      confirmPassword: value,
      confirmPasswordValid: true
    })
  }

  onPressSubmit = () => {
    let signup_data={
      name:this.state.name,
      email: this.state.email,
      pass: this.state.password
    }

    fetch(config.localhost_url+'/signup',{
      method: 'POST',
      headers: {
          // 'x-Auth':this.props.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signup_data)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("Response", responseJson)
      alert("Signed Up Successfully")

    })
  }
  
    render() {
      return (
        <SafeAreaView style={{flex:1}}>

        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>

            <View style={{flexDirection:'column', padding:10, paddingBottom:20}}>

              <TextField 
                onChangeText={this.onNameChanged}
                label="Name"
                value={this.state.name}
                lineWidth={2}
                tintColor="white"
                baseColor="white"
                textColor="white"
                containerStyle={{width:300, height: 50}}
              />

            </View>
            <View style={{flexDirection:'column', padding:10, paddingBottom:20}}>

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

            <View style={{flexDirection:'column', padding:10, paddingBottom:20}}>

              <TextField 
                onChangeText={this.onPasswordChanged}
                label="Password"
                value={this.state.password}
                lineWidth={2}
                tintColor="white"
                baseColor="white"
                textColor="white"
                containerStyle={{width:300, height: 50}}
              />
              
            </View>

            <View style={{flexDirection:'column', padding:10, paddingBottom:30}}>

              <TextField 
                onChangeText={this.onConfirmPasswordChanged}
                label="Confirm Password"
                value={this.state.confirmPassword}
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


                                <Text style={{width: 80,
                                    fontFamily: 'Roboto',
                                    fontSize: 19,
                                    fontWeight: '500',
                                    fontStyle: 'normal',
                                    alignSelf:'center',
                                    color: '#ffffff'}}>SIGN UP</Text>


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

  export default SignupScreen;