import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginBefore from './LoginBefore';
import Login from './Login';

const Routing = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={LoginBefore}></Stack.Screen>
        <Stack.Screen
          options={{
            animation: 'slide_from_right',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleStyle: {
              color: 'black',
              fontSize: 30,
              fontFamily: 'monospace',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center',
          }}
          name="Login"
          component={Login}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;

const styles = StyleSheet.create({});
