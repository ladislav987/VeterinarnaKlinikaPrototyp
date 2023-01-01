import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Onboarding from '../../screens/Welcome/Onboarding';
import Home from '../../screens/Home/Home';
import LogIn from '../../screens/LogIn/LogIn';
import Calendar from '../../screens/Calendar';
import Blog from '../../screens/Blog';
import ArticleOne from '../../screens/ArticleOne';
import Comments from '../../screens/Comments';

const Stack = createNativeStackNavigator();

export const AppStateContext = React.createContext();

export const Navigation = ({ onboarded }) => {
    return (
        <>
            <Stack.Navigator
                initialRouteName={onboarded ? 'Calendar' : 'Calendar'}>


                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{ title: 'Onboarding', headerShown: false, }}
                />

                <Stack.Screen
                    name="Login"
                    component={LogIn}
                    options={{ title: 'Login', headerShown: false, }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home', headerShown: false, }}
                />


                <Stack.Screen
                    name="Calendar"
                    component={Calendar}
                    options={{ title: 'Calendar', headerShown: false, }}
                />

                <Stack.Screen
                    name="Blog"
                    component={Blog}
                    options={{ title: 'Blog', headerShown: false, }}
                />

                <Stack.Screen
                    name="ArticleOne"
                    component={ArticleOne}
                    options={{ title: 'ArticleOne', headerShown: false, }}
                />

                <Stack.Screen
                    name="Comments"
                    component={Comments}
                    options={{ title: 'Comments', headerShown: false, }}
                />

            </Stack.Navigator>
        </>
    );
};