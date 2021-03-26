import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackNavigator from "./MainStackNavigator";
import AboutStackNavigator from "./AboutStackNavigator";
import SideMenu from "../components/SideMenu";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
      // Here we are setting our custom sidebar menu 
      drawerContent={(props) => <SideMenu {...props} />}
    >
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="About" component={AboutStackNavigator} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;