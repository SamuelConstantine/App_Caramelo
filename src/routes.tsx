import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/Home";

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{headerShown: false}}
                initialRouteName="LoginScreen"
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;