import React from 'react';
import {createMaterialTopTabNavigator, Image, StyleSheet} from 'react-navigation';
import { Dimensions,Platform } from 'react-native'
import Login from './Login';
import Signup from './Signup';

const AuthScreen = createMaterialTopTabNavigator(
  {
    Login: Login,
    Signup: Signup,
},
// {
//   navigationOptions: {
//     headerTitle: (
//       <Image source={require('../../assets/Logo.jpg')}/>
//   ),
//   }
// },

{
  tabBarOptions: {
      style:{
        backgroundColor: 'black'
      }
  }
},


{
  initialLayout : {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
},

},
);

  export default AuthScreen;