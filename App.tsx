/**
 * File: App.tsx
 * -----
 * Created Date: Tuesday October 4th 2022
 * Author: Akhil Mohan
 * -----
 * Last Modified: Fri Nov 18 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/routes/StackNavigator/StackNavigator';


export default function App() {
  
  return (
    <NavigationContainer>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='white'
      />
      <StackNavigator/>
    </NavigationContainer>
  );
}

