import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import registerScreen from './register';

import HomeScreen from './home';
console.log('log')

const Stack = createStackNavigator();

function AppNavigator() {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='register'      >
          <Stack.Screen
            name="register"
            component={registerScreen}
            options={({ navigation, route }) => ({
              title: 'Home',
              headerStyle: {
                elevation: 20,
              },
              headerTitleStyle: {     
                fontSize:25,
                alignSelf:'center',
                fontFamily:'PermanentMarker-Regular',
  
              },          
            })}
          />
     
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigator;        
  