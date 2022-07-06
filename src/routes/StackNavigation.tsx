import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pokedex} from '../screens/Pokedex';
import {Pokemon} from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Pokedex">
        <Stack.Screen name="Pokedex" component={Pokedex} />
        <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
