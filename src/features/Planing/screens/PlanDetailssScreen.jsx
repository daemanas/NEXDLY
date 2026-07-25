import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import PlaningDetailsCard from '../cards/PlaningDetailsCard'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const PlanDetailssScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerName}>Plan Details</Text>
        </View>

        <View style={styles.planImageCardContainer}>
          <PlaningDetailsCard />
        </View>

        <View style={styles.planCheckCardContainer}>
          <View style={styles.planCheckCardContaint}>

            <View style={styles.planBudgedContainer}>
              <View style={[styles.planBudgedIcon, {
                backgroundColor: "#cfd2fe",
              }]}>
                <Ionicons
                  name="wallet-outline"
                  size={22}
                  color="#212aa4"
                />
              </View>
              <Text style={styles.name}>Total Budget</Text>
              <Text style={styles.amount}>555</Text>
            </View>

            <View style={styles.boxLine} />

            <View style={styles.planBudgedContainer}>
              <View style={[styles.planBudgedIcon, {
                backgroundColor: "#fdbdbd",
              }]}>
                <Ionicons
                  name="wallet-outline"
                  size={22}
                  color="#fd0202"
                />
              </View>
              <Text style={styles.name}>Total Budget</Text>
              <Text style={styles.amount}>555</Text>
            </View>

            <View style={styles.boxLine} />

            <View style={styles.planBudgedContainer}>
              <View style={[styles.planBudgedIcon, {
                backgroundColor: "#fddabd", height: 55,
                width: 55,
              }]}>
                <Feather
                  name="clock"
                  size={38}
                  color="#fdae02"
                />
              </View>
              <Text style={styles.name}>Plan Status</Text>
            </View>
          </View>
        </View>

        <View style={styles.planDurationContainer}>
          <View style={styles.planDurationContaint}>
            <View style={styles.planDateContainer}>

              <View style={styles.planDateContainerContaint}>
                <View style={styles.planDateIcon}>
                  <EvilIcons
                    name="calendar"
                    size={18}
                    color="#ffffff"
                  />
                </View>
                <View style={styles.planDate}>
                  <Text style={styles.planDateName}>Start Date</Text>
                  <Text style={styles.planDateNum}>23 jun 2026</Text>
                </View>
              </View>

              <View style={styles.planDateContainerContaint}>
                <View style={styles.planDateIcon}>
                  <EvilIcons
                    name="calendar"
                    size={18}
                    color="#ffffff"
                  />
                </View>
                <View style={styles.planDate}>
                  <Text style={styles.planDateName}>Start Date</Text>
                  <Text style={styles.planDateNum}>23 jun 2026</Text>
                </View>
              </View>

            </View>

            <View style={styles.planDuration}>
              <View style={styles.planDurationIcon}>
                <FontAwesome6
                  name="calendar-days"
                  size={18}
                  color="#5754f3"
                />
              </View>
              <View>
                <Text style={styles.planDateName}>Duration</Text>
                <Text style={styles.planDateNum}>4 Days</Text>
              </View>
            </View>

          </View>
        </View>

        <View style={styles.planStatusContainer}>

          <View style={styles.planStatusContaint}>

            <View style={styles.statusContainer}>

              <View style={styles.statusIconContainer}>
                <Feather
                  name="clock"
                  size={27}
                  color="#fdae02"
                />
              </View>
              <View style={styles.statusIconTextContainer}>
                <Text style={{ fontSize: 14, fontWeight: 700, }}>Plan Status</Text>

                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -10 }}>
                  <Entypo
                    name="dot-single"
                    size={26}
                    color="#fdae02"
                  />
                  <Text style={{
                    fontSize: 13, fontWeight: 500,
                    color: "#fdae02"
                  }}>Active</Text>

                </View>

                <Text style={{
                  fontSize: 10,
                  color: "#060605"
                }}>Your plan is ongoing</Text>

              </View>

            </View>

            <View style={styles.statusButtonContainer}>

              <Pressable
                style={styles.statusButtonContaint}
                onPress={() => console.log("pressed")}
              >

                <View style={{ flexDirection: "row", gap: 3 }}>

                  <Text style={{ fontSize: 16, }}>⚙️</Text>
                  <Text style={{ color: "#4F46E5", fontSize: 16, fontWeight: 500 }}> Manage Plan </Text>
                  <Text style={{ color: "#4F46E5", fontSize: 16, fontWeight: 500 }}>▼</Text>

                </View>

              </Pressable>

            </View>

          </View>

        </View>

        <View style={styles.planNoteInpuatOutputContainer}>

          <View style={styles.planNoteHeaderContainer}>

            <View style={styles.planNoteHeaderContent}>
              <View style={styles.planNoteHeaderContentText}>
                <SimpleLineIcons
                  name="notebook"
                  size={18}
                  color="#5754f3"
                />
                <Text style={{ color: "#000000", fontWeight: 700, fontSize: 16, marginLeft: 10 }}>Notes</Text>
              </View>

              <View style={styles.planNoteHeaderContentText}>
                <FontAwesome6
                  name="pencil"
                  size={16}
                  color="#5754f3"
                />
                <Text style={{ color: "#1d50b7" }}>Add Note</Text>
              </View>

            </View>

            <View style={styles.planNoteTextContainer}>
              <Text>
                A "story" is a narrative account of a connected series of events, whether factual or fictional. It is designed to entertain, educate, or inform an audience, often featuring characters navigating a plot arc with a beginning, middle, and end.
              </Text>
            </View>
          </View>

          <View>

          </View>

        </View>



        <Pressable
          style={({ pressed, hovered }) => [
            styles.planDeleteButtonContainer,
            {
              backgroundColor: pressed
                ? "#efe7e7" // Darker blue when active/pressed
                : hovered
                  ? "#ffd2d2" // Lighter blue when hovering (Web/Desktop)
                  : "#ffd2d2", // Default blue color
            },
          ]}>
          <MaterialIcons
            name="delete"
            size={22}
            color="#f02323"
          />
          <Text style={styles.deleteButtonText}>Delete Plan</Text>
        </Pressable>

      </View>
    </ScrollView>
  )
}

export default PlanDetailssScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#e3e3ef",

  },

  contentContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },

  headerContainer: {
    alignItems: "center",
    marginTop: 25,
  },

  headerName: {
    fontSize: 22,
    fontWeight: 500
  },

  planCheckCardContainer: {
    borderRadius: 10,
    height: 120,
    marginTop: 12,
    justifyContent: "center",
    backgroundColor: "#ffff"
  },

  planCheckCardContaint: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16
  },

  planBudgedContainer: {
    justifyContent: "center",
    alignItems: "center"
  },

  planBudgedIcon: {
    height: 44,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  name: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: 500
  },

  amount: {
    fontSize: 16,
    marginTop: 1,
    fontWeight: 500
  },

  boxLine: {
    height: 60,
    borderWidth: 0.2,
  },

  planDurationContainer: {
    borderRadius: 10,
    marginTop: 12,
    backgroundColor: "#ffff",
    height: 110,
    width: "100%",
    justifyContent: "center"
  },
  planDurationContaint: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },

  planDateContainer: {
    gap: 14,
    justifyContent: "center",
    alignItems: "center"
  },

  planDateContainerContaint: {
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    alignItems: "center"
  },

  planDateIcon: {
    backgroundColor: "#5754f3",
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  planDate: {
    marginLeft: 10
  },

  planDateName: {
    fontSize: 12
  },

  planDateNum: {
    fontSize: 14,
    fontWeight: 700
  },

  planDuration: {
    marginRight: 20,
    borderRadius: 8,
    height: 50.2,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dee0f9",
    flexDirection: "row",
    gap: 10
  },

  //status style

  planStatusContainer: {
    marginTop: 12,
    height: 90,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  planStatusContaint: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"

  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  statusIconContainer: {
    backgroundColor: "#ffd895",
    height: 39,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },

  statusIconTextContainer: {
    flexDirection: "column",
    gap: 3,
    marginLeft: 10
  },

  statusButtonContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },

  statusButtonContaint: {
    width: 160,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF2FF",
    borderColor: "#D8D7FF",

    shadowColor: "#6366F1",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },

  //Plan notes styles

  planNoteInpuatOutputContainer: {
    borderRadius: 10,
    marginTop: 12,
    backgroundColor: "#ffff"
  },

  planNoteHeaderContainer: {
    margin: 10
  },

  planNoteHeaderContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  planNoteHeaderContentText: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center"
  },

  planNoteTextContainer: {
    marginTop: 10,
    marginLeft: 12,
    marginRight: 9
  },

  //Delete Plan style

  planDeleteButtonContainer: {
    height: 48,
    marginTop: 12,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffd2d2",
    flexDirection: "row",
    gap: 4,

  },

  deleteButtonText: {
    fontSize: 17,
    color: "#f80707"
  }


})