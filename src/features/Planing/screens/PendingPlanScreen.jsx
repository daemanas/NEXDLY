import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PlanningList from '../components/PlanningList'

import { usePlaning } from "../../../context/PlaningContext";

const PendingPlanScreen = () => {
    const {
        planing
    } = usePlaning();

    const pendingPlans = planing.filter(
        (item) => item.status === "active"
    )

    return (
        <View>
            <PlanningList planing={pendingPlans}/>
        </View>
    )
}

export default PendingPlanScreen

const styles = StyleSheet.create({})