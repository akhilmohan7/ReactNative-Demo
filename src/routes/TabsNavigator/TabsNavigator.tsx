/**
 * File: TabsNavigator.tsx
 * -----
 * Created Date: Thursday November 17th 2022
 * Author: Akhil Mohan
 * -----
 * Last Modified: Thu Nov 17 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import Home from '../../containers/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
    return (
        <Tab.Navigator initialRouteName={'Home'}>
            <Tab.Screen 
                name='Home' 
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name='Home1' 
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarLabel: 'Meals',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='calendar-blank-outline' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name='Home2' 
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-outline" color={color} size={size} />
                    )
                }}
            />            
            <Tab.Screen 
                name='Home3' 
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarLabel: 'More',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="dots-horizontal" color={color} size={size} />
                    )
                }}
            />
            
            
        </Tab.Navigator>
    );
}