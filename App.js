
import React from 'react';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';

import Login from './Components/Login';
import TabIndexes from './Components/TabIndexes';
// import Profile from './Components/ProfileScreen';

const AppContainer = createStackNavigator(
    {
        Login: Login,
        TabIndex: TabIndexes,
        // Profile: Profile
    },
    {
        initialRouteName: 'TabIndex',
        headerMode: 'none',
        // headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,

    },
);

const App = createAppContainer(AppContainer);

export default App;