import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../features/HomeScreen';
import Workflow from '../features/WorkFlow';
import Expansion from '../features/Expansion';
import Setting from '../features/Setting';

import AllPersonalExpenses from '../features/Expense/screens/PersonalExpAllList';
import AllGroupExpenses from '../features/Expense/screens/GroupExpAllList';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 13,
                },

                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black",
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Entypo
                            name="home"
                            size={30}
                            color="#900"
                        />
                    ),
                }}
            />


            <Tab.Screen
                name="Expense"
                component={Expansion}
                options={{
                    tabBarIcon: () => (
                        <Entypo
                            name="wallet"
                            size={30}
                            color="#900"
                        />
                    ),
                }}
            />


            <Tab.Screen
                name="My Plans"
                component={Workflow}
                options={{
                    tabBarIcon: () => (
                        <Entypo
                            name="star"
                            size={30}
                            color="#900"
                        />
                    ),
                }}
            />


            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name="settings"
                            size={30}
                            color="#900"
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};


const Navigation = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >

                <Stack.Screen
                    name="MainTabs"
                    component={BottomTabs}
                />


                <Stack.Screen
                    name="AllPersonalExpenses"
                    component={AllPersonalExpenses}
                />
                <Stack.Screen
                    name="AllGroupExpenses"
                    component={AllGroupExpenses}
                />


            </Stack.Navigator>

        </NavigationContainer>
    );
};


export default Navigation;