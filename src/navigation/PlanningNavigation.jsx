import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PlaningProvider } from '../context/PlaningContext'

import Workflow from '../features/WorkFlow';
import AddPlaning from '../features/Planing/Inputs/PlaningInput'



const Stack = createNativeStackNavigator();


const PlanningNavigation = () => {


  return (
    <PlaningProvider >
      <Stack.Navigator
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

      </Stack.Navigator>
    </PlaningProvider>
  )
}

export default PlanningNavigation

const styles = StyleSheet.create({})