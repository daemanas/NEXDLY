import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../features/HomeScreen';
import Workflow from '../features/WorkFlow';

const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (

//   );
// }

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Daily WorkFlow" component={Workflow} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})