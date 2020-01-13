import React from 'react';
import { TextInput, View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class SignupScreen extends React.Component {
  
    render() {
      return (
        <SafeAreaView style={{flex:1}}>

        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>

            <View style={{flexDirection:'column', padding:10}}>
              <Text style={{fontSize: 18,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            textAlign: 'left',
                            color: '#eeeeee',
                            paddingBottom:5
                            }}>Name</Text>

              <TextInput style={{width:300, height: 50, borderRadius: 8, backgroundColor: '#404040', textDecorationColor:'white'}}/>

            </View>
            <View style={{flexDirection:'column', padding:10}}>

              <Text style={{  fontSize: 18,
                              fontWeight: 'normal',
                              fontStyle: 'normal',
                              textAlign: 'left',
                              color: '#eeeeee',
                              paddingBottom:5,

                            }}>Email</Text>

              <TextInput style={{width:300, height: 50, borderRadius: 8, backgroundColor: '#404040'}}/>
              
            </View>

            <View style={{flexDirection:'column', padding:10}}>

              <Text style={{  fontSize: 18,
                              fontWeight: 'normal',
                              fontStyle: 'normal',
                              textAlign: 'left',
                              color: '#eeeeee',
                              paddingBottom:5,

                            }}>Password</Text>

              <TextInput style={{width:300, height: 50, borderRadius: 8, backgroundColor: '#404040'}}/>
              
            </View>

            <View style={{flexDirection:'column', padding:10}}>

              <Text style={{  fontSize: 18,
                              fontWeight: 'normal',
                              fontStyle: 'normal',
                              textAlign: 'left',
                              color: '#eeeeee',
                              paddingBottom:5,

                            }}>Confirm Password</Text>

              <TextInput style={{width:300, height: 50, borderRadius: 8, backgroundColor: '#404040'}}/>
              
            </View>

            <View style={{padding:20}}>
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