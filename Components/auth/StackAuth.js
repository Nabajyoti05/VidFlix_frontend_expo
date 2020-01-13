import React from 'react';
import {createMaterialTopTabNavigator, Image, StyleSheet} from 'react-navigation';
import { Dimensions,Platform } from 'react-native'
import Login from './Login';
import Signup from './Signup';
import Logo from '../../assets/Logo.jpg';

const AuthScreen = createMaterialTopTabNavigator(
  {
    Login: Login,
    Signup: Signup,
},
// {
//   navigationOptions: {
//     headerBackground: (
//       <Image
//       width={100}
//         style={{width:100, height: 100}}
//         source={{uri: Logo}}
//       />
//     ),
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