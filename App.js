
import React from 'react';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';

import Login from './Components/Login';
import TabIndexes from './Components/TabIndexes';
import AuthScreen from './Components/auth/StackAuth';
// import AuthComponent from './Components/auth/AuthComponent';
// import Profile from './Components/ProfileScreen';
import CoverScreen from './Components/auth/coverScreen';
import ExploreScreen from './Components/ExploreScreen';

const AppContainer = createStackNavigator(
    {
        CoverScreen:CoverScreen,
        AuthScreen: AuthScreen,
        TabIndex: TabIndexes,
        // ExploreScreen: ExploreScreen
    },
    {
        initialRouteName: 'CoverScreen',
        headerMode: 'none',
        // headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,

    },
);

const App = createAppContainer(AppContainer);

export default App;