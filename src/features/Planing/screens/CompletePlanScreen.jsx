import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PlanningList from '../components/PlanningList'
import { usePlaning } from "../../../context/PlaningContext";
const CompletePlanScreen = () => {

    const {
        planing
    } = usePlaning();

    const completedPlans = planing.filter(
        (item) => item.status === "✔️ Completed Plan"
    )

    return (
        <View>
            <PlanningList planing={completedPlans} />
        </View>
    )
}

export default CompletePlanScreen

const styles = StyleSheet.create({})