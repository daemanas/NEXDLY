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
import AddPersonalExpenses from '../features/Expense/Input/PersonalInput'
import AddGroupExpenses from '../features/Expense/Input/GroupInput'
import GroupSummer from '../features/Expense/screens/GroupSummer'

import { ExpenseProvider } from '../context/ExpenseContext'

import PlanningNavigation from './PlanningNavigation'


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
                    transform: [{ translateY: 5 }],
                },

                tabBarStyle: {
                    height: 80,
                    paddingTop: 6,
                    paddingBottom: 8,
                },
                tabBarItemStyle: {
                    justifyContent: "center",
                    alignItems: "center",
                },

                tabBarActiveTintColor: "#3a30c7",
                tabBarInactiveTintColor: "gray",

            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo
                            name="home"
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Expense"
                component={Expansion}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo
                            name="wallet"
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="My Plans"
                component={PlanningNavigation}

               //redirect main workflow page 

                listeners={({ navigation }) => ({  
                    tabPress: () => {
                        navigation.navigate("My Plans", {
                            screen: "Workflow",
                        });
                    },
                })}
                
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo
                            name="star"
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="settings"
                            size={26}
                            color={color}

                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};


const Navigation = () => {
    return (
        <ExpenseProvider>
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
                    <Stack.Screen
                        name="AddPersonalExpenses"
                        component={AddPersonalExpenses}
                    />
                    <Stack.Screen
                        name="AddGroupExpenses"
                        component={AddGroupExpenses}
                    />
                    <Stack.Screen
                        name="GroupSummer"
                        component={GroupSummer}
                    />

                    {/* <Stack.Screen
                        name='MyPlans'
                        component={PlanningNavigatio}
                    /> */}


                </Stack.Navigator>

            </NavigationContainer>
        </ExpenseProvider>
    );
};


export default Navigation;