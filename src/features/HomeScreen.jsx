import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


import LinearGradient from 'react-native-linear-gradient'
import { usePlaning } from "../context/PlaningContext";
import { useExpense } from '../context/ExpenseContext';

import { useNavigation } from '@react-navigation/native'

import PercentageCircle from './Planing/components/CircularColorProgress'
import PlanremainingCard from './HomeScreen/card/PlanremainingCard'
const HomeScreen = () => {

  const navigation = useNavigation()

  const {
    completedPlanPrecentage,
    totalCompletedPlans,
    totalPlans,
    totalPendingPlans,
    totalCancelPlans,
  } = usePlaning();

    const {
    totalPersonalMoneyExpenses,
    totalGroupExpenses,
  } = useExpense();


  return (
    <ScrollView style={styles.container}>
      <View style={styles.contantContainer}>

        <View style={styles.headerContainer}>

          <View style={styles.headerMenuButton}>
            <MaterialIcons
              name="menu"
              size={17}
              color="#0e0d0d"
            />
          </View>
          <View style={styles.headerButtonContainer}>
            <Pressable style={styles.headerNotificationButton}>
              <Entypo
                name="notification"
                size={17}
                color="#0e0d0d"
              />
            </Pressable>

            <Pressable style={styles.headerProfileButton}>
              <MaterialIcons
                name="account-circle"
                size={40}
                color="#1a1818"
              />
            </Pressable>
          </View>

        </View>

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Good Morning</Text>
          <Text style={{ fontSize: 28, fontWeight: 700 }}>Daem Anas</Text>
          <Text style={[styles.headerText, {
            color: "#0e0e0f"
          }]}>Stay focused and make it happent!</Text>
        </View>

        <LinearGradient
          colors={[
            "#5B42E7",
            "#6B4EFF",
            "#B9AEFF",
            "#FFFFFF",
          ]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.planCardContainer}
        >

          <View style={styles.cardContaint}>

            <Text style={styles.cardText}>Today's Progress</Text>
            <Text style={[styles.cardText, { fontSize: 26, fontWeight: 700 }]}>

              {completedPlanPrecentage}%
            </Text>
            <Text style={styles.cardText}>Great! You're on track</Text>

          </View>

          <View style={styles.cardParcentage}>
            <PercentageCircle
              limit={completedPlanPrecentage}
              totalPlans={totalPlans}
            />
          </View>

        </LinearGradient>

        <PlanremainingCard totalPersonalMoneyExpenses = {totalPersonalMoneyExpenses} />

        <View style={styles.planCardTrackContainer}>
          <View style={styles.planCardTrackContaint}>

            <View style={styles.planCardTrackText}>
              <View style={[styles.planCardTrackIcon, { backgroundColor: "#cfd2fe" }]}>
                <FontAwesome
                  name="calendar-check-o"
                  size={16}
                  color="#282626"
                />
              </View>
              <Text style={styles.textNumber}>{totalPlans}</Text>
              <Text style={styles.planText}>Total Plans</Text>
            </View>

            <View style={styles.planCardLine} />

            <View style={styles.planCardTrackText}>
              <View style={[styles.planCardTrackIcon, { backgroundColor: "#cff6d9" }]}>
                <Entypo
                  name="check"
                  size={16}
                  color="#19953e"
                />
              </View>
              <Text style={styles.textNumber}>{totalCompletedPlans}</Text>
              <Text style={styles.planText}>Completed</Text>
            </View>

            <View style={styles.planCardLine} />

            <View style={styles.planCardTrackText}>
              <View style={[styles.planCardTrackIcon, { backgroundColor: "#fcf0e2" }]}>
                <Fontisto
                  name="clock"
                  size={16}
                  color="#e7912e"
                />
              </View>
              <Text style={styles.textNumber}>{totalPendingPlans}</Text>
              <Text style={styles.planText}>Pending</Text>
            </View>

            <View style={styles.planCardLine} />

            <View style={styles.planCardTrackText}>
              <View style={[styles.planCardTrackIcon, { backgroundColor: "#fddfdc" }]}>
                <Entypo
                  name="cross"
                  size={20}
                  color="#eb3a3a"
                />
              </View>
              <Text style={styles.textNumber}>{totalCancelPlans}</Text>
              <Text style={styles.planText}>Cancelled</Text>
            </View>

          </View>
        </View>

        <View style={styles.expensesCardTrackContainer}>
          <View style={styles.expensesCardTrackContaint}>

            <View style={styles.expensesCardContaint}>
              <View style={[styles.expensesCardContaintIcon, {
                backgroundColor: "#e2e2fc"
              }]}>
                <Entypo
                  name="wallet"
                  size={22}
                  color="#423eba"
                />
              </View>
              <Text style={styles.expensesName}>Persona Expenses</Text>
              <Text style={styles.expensesPrice}>{totalPersonalMoneyExpenses}</Text>
              <Text style={styles.expensesMonth}>This Month</Text>
            </View>

            <View style={styles.planCardLine} />

            <View style={styles.expensesCardContaint}>
              <View style={[styles.expensesCardContaintIcon, {
                backgroundColor: "#e5fce2"
              }]}>
                <FontAwesome6
                  name="user-group"
                  size={22}
                  color="#75ec91"
                />
              </View>
              <Text style={styles.expensesName}>Group Expenses</Text>
              <Text style={styles.expensesPrice}>{totalGroupExpenses}</Text>
              <Text style={styles.expensesMonth}>This Month</Text>
            </View>

            <View style={styles.planCardLine} />

            <View style={styles.expensesCardContaint}>
              <View style={[styles.expensesCardContaintIcon, {
                backgroundColor: "#f8eaea"
              }]}>
                <Foundation
                  name="graph-pie"
                  size={27}
                  color="#ef9393"
                />
              </View>
              <Text style={styles.expensesName}>Total Expenses</Text>
              {/* <Text style={styles.expensesName}>Expenses</Text> */}
              <Text style={styles.expensesPrice}>23,443</Text>
              <Text style={styles.expensesMonth}>This Month</Text>
            </View>

          </View>
        </View>

        <View style={styles.addAllContainer}>
          <View style={[styles.addAllHeader, { marginLeft: 17 }]}>
            <Text style={{ fontSize: 11, fontWeight: 700 }}>Quick Actions (Add)</Text>
          </View>

          <View style={styles.addAllContaint}>

            <Pressable
              style={styles.expensesCardContaint}
              onPress={() => navigation.navigate("My Plans", {
                screen: "AddPlans",
              })}
            >
              <View style={[styles.planCardTrackIcon, {
                backgroundColor: "#cfd2fe"
              }]}>
                <FontAwesome
                  name="calendar-plus-o"
                  size={16}
                  color="#282626"
                />
              </View>
              <Text style={styles.addText}>
                Add Plan
              </Text>
            </Pressable>

            <View style={[styles.planCardLine, {
              height: 50
            }]} />

            <Pressable
              style={[styles.expensesCardContaint,]}
              onPress={() => navigation.navigate('AddPersonalExpenses')}
            >
              <View style={[styles.planCardTrackIcon, { backgroundColor: "#cff6d9" }]}>
                <Ionicons
                  name="bag-add"
                  size={18}
                  color="#19953e"
                />
              </View>
              <Text style={styles.addText}>
                Personal Expenses
              </Text>

            </Pressable>

            <View style={[styles.planCardLine, {
              height: 50
            }]} />

            <Pressable
              style={styles.expensesCardContaint}
              onPress={() => navigation.navigate('AddGroupExpenses')}
            >
              <View style={[styles.expensesCardContaintIcon, {
                backgroundColor: "#e2e2fc"
              }]}>
                <MaterialIcons
                  name="groups"
                  size={22}
                  color="#423eba"
                />
              </View>
              <Text style={styles.addText}>
                Group Exprnses
              </Text>
            </Pressable>

            <View style={[styles.planCardLine, {
              height: 50
            }]} />

            <Pressable style={styles.expensesCardContaint}>
              <View style={[styles.planCardTrackIcon, { backgroundColor: "#fcf0e2" }]}>
                <MaterialIcons
                  name="analytics"
                  size={19}
                  color="#e7912e"
                />
              </View>
              <Text style={styles.addText}>
                Report
              </Text>
            </Pressable>

          </View>
        </View>



      </View>
    </ScrollView >
  )
}

export default HomeScreen

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
    marginBottom: 10,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    alignItems: "center"
  },

  headerMenuButton: {
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },

  headerButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },

  headerNotificationButton: {
    height: 34,
    width: 34,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },

  headerProfileButton: {
    height: 44,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#fff"
  },

  headerTextContainer: {
    marginTop: 10,
    gap: 1
  },

  headerText: {
    fontSize: 13,
    color: "#3d5ff2"
  },

  planCardContainer: {
    height: 130,
    width: "100%",
    marginTop: 15,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  cardContaint: {
    marginLeft: 17,
    gap: 6
  },

  cardText: {
    color: "#fff"
  },

  cardParcentage: {
    marginRight: 17
  },

  planCardTrackContainer: {
    marginTop: 15,
    width: "100%",
    height: 120,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center"
  },

  planCardTrackContaint: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 16,
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,

  },

  planCardTrackText: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },

  planCardLine: {
    height: 80,
    borderWidth: 0.2,
    borderColor: "#d7d0d0"
  },

  planCardTrackIcon: {
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  textNumber: {
    fontSize: 16,
    fontWeight: 700
  },

  planText: {
    fontSize: 11,
    fontWeight: 500

  },

  expensesCardTrackContainer: {
    marginTop: 15,
    width: "100%",
    height: 150,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  expensesCardTrackContaint: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 16,
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,

  },

  expensesCardContaint: {
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  expensesCardContaintIcon: {
    height: 39,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  expensesName: {
    fontSize: 12,
    fontWeight: 500
  },

  expensesPrice: {
    fontSize: 19,
    fontWeight: 700
  },

  expensesMonth: {
    fontSize: 10,
    color: "#436ae7"
  },

  addAllContainer: {
    marginTop: 15,
    width: "100%",
    height: 120,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",

  },

  addAllHeader: {
    marginBottom: 10
  },

  addAllContaint: {
    marginLeft: 17,
    marginRight: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },

  addText: {
    fontSize: 9,
    fontWeight: 700
  },


  remaniningContainer: {
    // borderWidth: 1,
    // borderRadius: 10,
    height: 150,
    width: "100%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderColor: "#d7d0d0",
    // backgroundColor: "#fff"
  },


  planRemainingContainer: {
    borderWidth: 1,
    backgroundColor: "#fff",
    width: "50%"
  },
  planRemainingHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  }





})