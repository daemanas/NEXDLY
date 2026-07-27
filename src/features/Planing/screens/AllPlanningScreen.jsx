import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PlanningList from '../components/PlanningList'
import { usePlaning } from "../../../context/PlaningContext";

const AllPlanningScreen = () => {

  const {
    planing
  } = usePlaning();

  const pendingPlans = planing

  return (
    <View>
      <PlanningList planing={pendingPlans} />
    </View>
  )
}

export default AllPlanningScreen

const styles = StyleSheet.create({})