import React from 'react';
import {createMaterialTopTabNavigator, MaterialTopTabBar} from 'react-navigation';
import { SafeAreaView, Dimensions,Platform, StatusBar } from 'react-native'
import Featured from './TabScreens/Featured';
import Movies from './TabScreens/Movie';
import Series from './TabScreens/Series';
import TvShows from './TabScreens/TvShows';

const HomeScreen = createMaterialTopTabNavigator(
  {
    Featured: Featured,
    Movies: Movies,
    Series: Series,
    TvShows: TvShows,
},

{
  tabBarOptions: {
      style:{
        backgroundColor: 'black'
      }
  }
  // style: {
  //   paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  // }

},

{
  initialLayout : {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
},

},
);

  export default HomeScreen;