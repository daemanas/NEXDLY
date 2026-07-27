import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PlanningList from '../components/PlanningList'
import { usePlaning } from "../../../context/PlaningContext";
const CancelPlanScreen = () => {
      const {
        planing
      } = usePlaning();
    
      const pendingPlans = planing.filter(
        (item) => item.status === "❌ Cancel Plan"
      )
  return (
    <View>
      <PlanningList planing={pendingPlans} />
    </View>
  )
}

export default CancelPlanScreen

const styles = StyleSheet.create({})