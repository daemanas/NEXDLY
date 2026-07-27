import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native'
import PlanningList from './Planing/components/PlanningList'


import AntDesign from 'react-native-vector-icons/AntDesign';

import { usePlaning } from "../context/PlaningContext";

import AllPlaningScreen from './Planing/screens/AllPlanningScreen';
import PendingPlanScreen from './Planing/screens/PendingPlanScreen';
import CompletePlanScreen from './Planing/screens/CompletePlanScreen';
import CencelPlanScreen from './Planing/screens/CancelPlanScreen';

const WorkFlow = () => {

  const navigation = useNavigation()

  const {
    totalCompletedPlans,
    totalPlans,
    totalPendingPlans
  } = usePlaning();

  const [selecetedTab, setSelecetedTab] = useState(0)


  return (
    <View style={styles.container}>
      <ScrollView style={styles.contantContainer}>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 23, fontWeight: 500 }}>My Plans</Text>
          <Text>Plan smart, spend better</Text>
        </View>

        <View style={styles.planeCheckContainer}>

          <View style={[styles.planContainer, { marginLeft: 10 }]}>
            <View style={[styles.planContainerIcon, { backgrozundColor: "#cfd2fe" }]}>
              <FontAwesome6
                name="calendar-check"
                size={24}
                color="#2107cd"
              />
            </View>
            <View style={styles.planContainerText}>
              <Text style={{ fontSize: 20, fontWeight: 500 }}>{totalPlans}</Text>
              <Text style={{ fontSize: 12 }}>Total Plans</Text>
            </View>
          </View>

          <View style={styles.planContainerMidilLine} />

          <View style={styles.planContainer}>
            <View style={[styles.planContainerIcon, { backgroundColor: "#fde1bd" }]}>
              <Feather
                name="clock"
                size={26}
                color="#fdae02"
              />
            </View>
            <View style={styles.planContainerText}>
              <Text style={{ fontSize: 20, fontWeight: 500 }}>
                {totalPendingPlans}
              </Text>
              <Text style={{ fontSize: 12 }}>Pending</Text>
            </View>
          </View>

          <View style={styles.planContainerMidilLine} />

          <View style={[styles.planContainer, { marginRight: 10 }]}>
            <View style={[styles.planContainerIcon, { backgroundColor: "#cff6d9" }]}>
              <Ionicons
                name="cloud-done-outline"
                size={26}
                color="#05741b"
              />
            </View>
            <View style={styles.planContainerText}>
              <Text style={{ fontSize: 20, fontWeight: 500 }}>{totalCompletedPlans}</Text>
              <Text style={{ fontSize: 12 }}>Compl..</Text>
            </View>
          </View>

        </View>

        <View style={styles.planListContainer}>

          <View style={styles.planListText}>

            <Pressable style={[styles.planButtons, {
              width: "12%",
            }, selecetedTab === 0 ? { backgroundColor: "#5B4CF6" } : {}]}
              onPress={() => setSelecetedTab(0)}
            >
              <Text style={[
                styles.planButtonsText,
                selecetedTab === 0 ? { color: "#fff" } : {}
              ]}
              >
                All
              </Text>
            </Pressable>

            <Pressable style={[styles.planButtons,
            { width: "22%", },
            selecetedTab === 1 ? { backgroundColor: "#5B4CF6" } : {}]}
              onPress={() => setSelecetedTab(1)}
            >
              <Text style={[
                styles.planButtonsText,
                selecetedTab === 1 ? { color: "#fff" } : {}
              ]}
              >
                Pending
              </Text>
            </Pressable>

            <Pressable style={[
              styles.planButtons, {
                width: "22%",
              }, selecetedTab === 2 ? { backgroundColor: "#5B4CF6" } : {}]}
              onPress={() => setSelecetedTab(2)}
            >
              <Text style={[
                styles.planButtonsText,
                selecetedTab === 2 ? { color: "#fff" } : {}
              ]}>
                Complete
              </Text>
            </Pressable>

            <Pressable style={[styles.planButtons, {
              width: "20%",
            }, selecetedTab === 3 ? { backgroundColor: "#5B4CF6" } : {}]}
              onPress={() => setSelecetedTab(3)}
            >
              <Text style={[
                styles.planButtonsText,
                selecetedTab === 3 ? { color: "#fff" } : {}
              ]}>
                Cancel
              </Text>
            </Pressable>

          </View>

          {selecetedTab === 0 && <AllPlaningScreen />}
          {selecetedTab === 1 && <PendingPlanScreen />}
          {selecetedTab === 2 && <CompletePlanScreen />}
          {selecetedTab === 3 && <CencelPlanScreen />}

        </View>

      </ScrollView>

      <View style={styles.InputContainerButton}>
        <Pressable
          style={styles.addButton}
          onPress={() => navigation.navigate('AddPlans')}
        >
          <AntDesign
            name="plus"
            size={30}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
    </View>
  )
}

export default WorkFlow

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#e3e3ef",
  },
  contantContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  headerContainer: {
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  planeCheckContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 30,
    height: 90,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#ffff"
  },
  planContainer: {
    flexDirection: "row",
    gap: 6,

  },

  planContainerIcon: {
    backgroundColor: "#cfd2fe",
    height: 44,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  planContainerMidilLine: {
    borderWidth: 0.2,
    height: 46,
    borderColor: "#d0d0dc",
  },

  planListContainer: {
    marginTop: 17
  },

  planListText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  planButtons: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 16,
    backgroundColor: "#ffff"
  },

  planButtonsText: {
    color: "#444444"
  },

  planList: {
    marginTop: 20
  },
  addButton: {
    height: 58,
    width: 58,
    backgroundColor: "#6246EA",
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 22,
    bottom: 25,
    elevation: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  }



})