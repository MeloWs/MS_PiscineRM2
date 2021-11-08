import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  TeslaModelS,
  TeslaModel3,
  TeslaModelX,
  TeslaModelY,
} from "./src/screens/tesla_screen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="right"
        initialRouteName="ModelS"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="ModelS" component={TeslaModelS} />
        <Drawer.Screen name="Model3" component={TeslaModel3} />
        <Drawer.Screen name="ModelX" component={TeslaModelX} />
        <Drawer.Screen name="ModelY" component={TeslaModelY} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
