import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, ToastAndroid, Alert} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import { LinearGradient } from 'expo-linear-gradient';
import config from '../../config';
import { Ionicons } from '@expo/vector-icons';
class SignupScreen extends React.Component {

  state={
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    nameValid: false,
    emailValid:false,
    passwordValid:false,
    confirmPasswordValid:false,
    user_id:null
  }

  onNameChanged = (value) => {
    this.setState({
      name: value,
      nameValid: true
    })
  }


  onEmailChanged = (value) => {
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value.trim())){
      this.setState({
        email: value,
        emailValid: true
      })
    } else {
      this.setState({
        email: value,
        emailValid: false
      })
    }
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
    console.log("onPress")
    let signup_data={
      name:this.state.name,
      email: this.state.email,
      pass: this.state.password
    }

    if(this.state.name.trim() === ''){
      alert("Please enter your Name")

    } else if(this.state.email.trim() === ''){
      alert("Please enter Email Address")

    } else if(!this.state.emailValid){
      alert("Please enter valid Email Address")

    } else if(this.state.password.trim() === ''){
      alert("Please enter Password");

    } else if(this.state.confirmPassword.trim() === ''){
      alert("Please enter Confirm Password");

    } else if(this.state.password.trim() !== this.state.confirmPassword.trim()){
      alert("Password doesn't match");

    } else {
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
          if(responseJson.data){
            if(responseJson.unique){
              if(responseJson.result.affectedRows === 1){
                this.setState({
                  user_id: responseJson.result.insertId,
                    name:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                })
                let user_id= responseJson.result.insertId
                ToastAndroid.show("Signed Up Successfully", ToastAndroid.BOTTOM)
                return this.props.navigation.navigate('TabIndex', {user_id})            
              }
            } else {
              let email=this.state.email
              Alert.alert(
                "Warning",
                "Your Email is already registered, Please Login", 
                [{
                  text:'OK',
                  onPress: () => this.props.navigation.navigate('Login', {email})
                }],
                {cancelable: false},
              )
            }
          } else {
            if(responseJson.dbError){

              ToastAndroid.show("Internal Error! Please try again", ToastAndroid.LONG)

            } else {
              ToastAndroid.show("Something went wrong! Please try again", ToastAndroid.LONG)
            }
          }

    })
    .catch(err => {
      console.log(err)
      ToastAndroid.show("Connection Error! Please try again", ToastAndroid.BOTTOM)
    })
  } 
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


            <View style={{justifyContent:'space-between', flexDirection:'row', padding:10, paddingBottom:20}}>
                <View>

                    <TextField 
                      onChangeText={this.onPasswordChanged}
                      label="Password"
                      value={this.state.password}
                      lineWidth={2}
                      tintColor="white"
                      baseColor="white"
                      textColor="white"
                      containerStyle={{width:300, height: 50}}
                      secureTextEntry={this.state.showPassword ? false : true}
                    />

                </View>

                    {this.state.showPassword ?
                      <View style={{marginTop:40, right:20, position:'absolute'}}>
                        <TouchableOpacity onPress={() => this.setState({showPassword: false})}>
                          <Ionicons name="md-eye-off" color="#ebebeb" size={25}/>
                        </TouchableOpacity>
                      </View>
                    :
                      <View style={{marginTop:40, right:20, position:'absolute'}}>
                        <TouchableOpacity onPress={() => this.setState({showPassword: true})}>
                          <Ionicons name="md-eye" color="#ebebeb" size={25}/>
                        </TouchableOpacity>
                      </View>
                    }
            </View>

            <View style={{justifyContent:'space-between', flexDirection:'row', padding:10, paddingBottom:20}}>

              <View>

                  <TextField 
                    onChangeText={this.onConfirmPasswordChanged}
                    label="Confirm Password"
                    value={this.state.confirmPassword}
                    lineWidth={2}
                    tintColor="white"
                    baseColor="white"
                    textColor="white"
                    containerStyle={{width:300, height: 50}}
                    secureTextEntry={this.state.showConfirmPassword ? false : true}
                  />
                
              </View>
                  {this.state.showConfirmPassword ?
                        <View style={{marginTop:40, right:20, position:'absolute'}}>
                          <TouchableOpacity onPress={() => this.setState({showConfirmPassword: false})}>
                            <Ionicons name="md-eye-off" color="#ebebeb" size={25}/>
                          </TouchableOpacity>
                        </View>
                      :
                        <View style={{marginTop:40, right:20, position:'absolute'}}>
                          <TouchableOpacity onPress={() => this.setState({showConfirmPassword: true})}>
                            <Ionicons name="md-eye" color="#ebebeb" size={25}/>
                          </TouchableOpacity>
                        </View>
                  }
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