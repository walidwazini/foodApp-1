import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home';



const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
          <Stack.Screen name="Welcome to the Home Page" 
          options = {{
            headerShown: false,
          }}
          component={HomeScreen} />
          {/* <Icon name="ios-person" size={30} color="#4F8EF7" />
          <Text> Welcome to my food app</Text> */}
      </Stack.Navigator>
    </NavigationContainer>
  );

}


