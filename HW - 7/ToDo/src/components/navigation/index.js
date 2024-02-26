import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBackground, Text, View } from 'react-native';
import List from '../screens/List';
import AddTask from '../screens/AddTask';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="My Todo List" component={List} />
        <Stack.Screen name="Add New Task" component={AddTask} />
    </Stack.Navigator>
  )
}

export default RootNavigation

