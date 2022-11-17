/**
 * File: StackNavigator.tsx
 * -----
 * Created Date: Saturday August 28th 2021
 * Author: Akhil Mohan
 * -----
 * Last Modified: Fri Nov 18 2022
 * @packageDocumentation
 */

import React from 'react';
import Login from '../../containers/Login/Login';
import TabsNavigator from '../TabsNavigator/TabsNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const StackNavigator = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen 
        name='Tab' 
        component={TabsNavigator} 
        options={{
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name='Login' 
        component={Login} 
        options={{
          headerShown: false
        }} 
        />
    </Stack.Navigator>
  );
};

export default StackNavigator;