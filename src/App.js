import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigation";

import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GlobalProvider>
  );
};


export default App;
