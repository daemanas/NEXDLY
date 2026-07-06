import { Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../features/HomeScreen';
import Workflow from '../features/WorkFlow';
import Expansion from '../features/Expansion'
import Setting from '../features/Setting'
const Tab = createBottomTabNavigator();



const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'
            screenOptions ={{
                headerShown: false,
                tabBarLabelStyle:{
                    fontSize:13
                },
                tabBarActiveTintColor:"red",
                tabBarInactiveTintColor:"black"
            }}
            >

                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options ={{
                        tabBarIcon : () => (
                            <Entypo name="home" size={30} color="#900" />
                        )
                    }}
                />
                <Tab.Screen

                    name="Expension"
                    component={Expansion}
                    options ={{
                        tabBarIcon : () => (
                            <Entypo name="wallet" size={30} color="#900" />
                        )
                    }}
                />
                <Tab.Screen
                    name="My Plans"
                    component={Workflow}
                    options ={{
                        tabBarIcon : () => (
                            <Entypo name="star" size={30} color="#900" />
                        )
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options ={{
                        tabBarIcon : () => (
                            <Ionicons name="settings" size={30} color="#900" />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})