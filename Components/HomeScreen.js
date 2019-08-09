import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';

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
  },
}
);

  export default HomeScreen;