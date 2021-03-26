import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Header from '../components/Header';
import About from '../components/About';

const Stack = createStackNavigator();
 
function AboutStackNavigator() {
    return (
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#AA0000',
        }
      }
      }>
        <Stack.Screen name="About" component={About} options={{ headerTitle: () => <Header />}}/>
      </Stack.Navigator>
    )
}

export default AboutStackNavigator
