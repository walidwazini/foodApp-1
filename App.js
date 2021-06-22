import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/Home';
import Details from './components/Details';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
          <Stack.Screen name="HomeScreen" 
          options = {{
            headerShown: false,
          }}
          component={HomeScreen} />
          <Stack.Screen name="Details" 
          options = {{
            headerShown: false,
          }}
          component={Details} />
          {/* <Icon name="ios-person" size={30} color="#4F8EF7" />
          <Text> Welcome to my food app</Text> */}
      </Stack.Navigator>
    </NavigationContainer>
  );

}


