import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PlaningProvider } from '../context/PlaningContext'

import Workflow from '../features/WorkFlow';
import AddPlaning from '../features/Planing/Inputs/PlaningInput'
import PlanDetails from '../features/Planing/screens/PlanDetailssScreen'



const Stack = createNativeStackNavigator();


const PlanningNavigation = () => {


  return (
      <Stack.Navigator
        initialRouteName="Workflow"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* fix this */}

        <Stack.Screen
          name="Workflow"
          component={Workflow}
        />


        <Stack.Screen
          name="AddPlans"
          component={AddPlaning}
        />

        <Stack.Screen
          name="PlanDetails"
          component={PlanDetails}
        />

      </Stack.Navigator>
  )
}

export default PlanningNavigation

const styles = StyleSheet.create({})