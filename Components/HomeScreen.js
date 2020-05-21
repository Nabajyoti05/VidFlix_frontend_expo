import React from 'react';
import {createMaterialTopTabNavigator, MaterialTopTabBar} from 'react-navigation';
import { SafeAreaView, Dimensions,Platform, StatusBar } from 'react-native'
import Featured from './TabScreens/Featured';
import Movies from './TabScreens/Movie';
import Series from './TabScreens/Series';
import TvShows from './TabScreens/TvShows';

const HomeScreen = createMaterialTopTabNavigator(
  {
    Originals: Featured,
    Movies: Movies,
    ShortFilms: Series,
    Comedy : TvShows,
},
{
  tabBarOptions: {
      style:{
        backgroundColor: 'black'
      },
      'scrollEnabled': true,
      'tabStyle': {
        width: 120
      },
      'indicatorStyle': {
        backgroundColor: '#eb754f'
      },
      activeTintColor: '#eb754f',
      inactiveTintColor: 'white',
      labelStyle:{
        fontSize:14,
        fontWeight:'500',

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

  export default HomeScreen;