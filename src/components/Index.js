import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native';

const MainNav = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    componente={Home}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}