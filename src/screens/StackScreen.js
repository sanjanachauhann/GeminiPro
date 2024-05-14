import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "./StartScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";

const Stack = createStackNavigator();
const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
