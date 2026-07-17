import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native'
import PlanningList from './Planing/components/PlanningList'


import AntDesign from 'react-native-vector-icons/AntDesign';

const WorkFlow = () => {

  const navigation = useNavigation()

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
              <Text style={{ fontSize: 20, fontWeight: 500 }}>8</Text>
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
              <Text style={{ fontSize: 20, fontWeight: 500 }}>4</Text>
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
              <Text style={{ fontSize: 20, fontWeight: 500 }}>4</Text>
              <Text style={{ fontSize: 12 }}>Compl..</Text>
            </View>
          </View>

        </View>

        <View style={styles.planListContainer}>

          <View style={styles.planListText}>
            <Text>Plans</Text>
            <Pressable>
              <Text>View All ▶️</Text>
            </Pressable>
          </View>

          <View style={styles.planList}>
            <PlanningList />
          </View>

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
    // justifyContent:"center"
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
    marginTop: 30
  },

  planListText: {
    flexDirection: "row",
    justifyContent: "space-between"
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