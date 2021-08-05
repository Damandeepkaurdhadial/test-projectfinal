
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Home'


const Stack = createStackNavigator();



function AppNavigator() {

    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Home'    >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({ navigation, route }) => ({
                        title: 'HOME',
                        headerStyle: {
                            elevation: 20,
                        },
                        headerTitleStyle: {
                            fontSize: 25,
                            alignSelf: 'center',
                            fontFamily: 'PermanentMarker-Regular',

                        },
                    })}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}