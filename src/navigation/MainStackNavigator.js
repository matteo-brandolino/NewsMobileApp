import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../components/Home'
import Header from '../components/Header';
import Search from '../components/Search';
import SearchHeader from '../components/SearchHeader';

const Stack = createStackNavigator();
 
function MainStackNavigator() {
    return (
        <Stack.Navigator 
            screenOptions={{
              headerStyle: {
                backgroundColor: '#AA0000',
              },
              headerTintColor: '#fff'
            }
        }>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerTitle: () => <Header />}} 
        />
        <Stack.Screen 
          name="Search" 
          component={Search} 
          options={{ headerTitle: () => <SearchHeader />}}
        />
      </Stack.Navigator>
    )
}

export default MainStackNavigator
