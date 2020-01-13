
import React from 'react';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';

import Login from './Components/Login';
import TabIndexes from './Components/TabIndexes';
import AuthScreen from './Components/auth/StackAuth';
// import Profile from './Components/ProfileScreen';

const AppContainer = createStackNavigator(
    {
        AuthScreen: AuthScreen,
        TabIndex: TabIndexes,
        // Login: Login
    },
    {
        initialRouteName: 'AuthScreen',
        headerMode: 'none',
        // headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,

    },
);

const App = createAppContainer(AppContainer);

export default App;