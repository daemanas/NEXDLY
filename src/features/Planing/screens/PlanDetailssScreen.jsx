import { StyleSheet, Text, View, ScrollView, Pressable, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import PlaningDetailsCard from '../cards/PlaningDetailsCard'
import DateTimePicker from '@react-native-community/datetimepicker';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


import images from '../../../assets/images/images.jpg';

import { usePlaning } from "../../../context/PlaningContext";
import {
  useRoute,
} from "@react-navigation/native";

const PlanDetailssScreen = () => {

  const route = useRoute();
  const { planId } = route.params || {};

  const {
    planing,
    setPlaning
  } = usePlaning();

  const currentPlan = planing.find(
    (item) => item.id === planId

  )

  const [showModal, setShowModal] = useState(false);
  const [showExtendStart, setShowExtendStart] = useState(false);
  const [showExtendEnd, setShowExtendEnd] = useState(false);

  const [newStartDate, setNewStartDate] = useState(null);
  const start = new Date(currentPlan.startDate);
  const end = new Date(currentPlan.endDate);

  const duration =
    Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;


  const shortenTitle = (title) => {
    return title.length > 25
      ? title.slice(0, 25) + "..."
      : title;
  };



  const handelOnModal = () => {
    setShowModal(true)
  };

  const handleOnComplete = (id) => {
    setPlaning(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, status: "✔️ Completed Plan" }
          : item
      )
    )
    setShowModal(false)
  }

  const handleOnCancel = (id) => {
    setPlaning(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, status: "❌ Cancel Plan" }
          : item
      )
    )
    setShowModal(false)
  }

  const handleOnActive = (id) => {
    setPlaning(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, status: "active" }
          : item
      )
    )
    setShowModal(false)
  }

  const handleExtendStart = (event, selectedDate) => {
    setShowExtendStart(false);
    if (!selectedDate) return;
    setNewStartDate(selectedDate);
    setShowExtendEnd(true);
  };

  const handleExtendEnd = (event, selectedDate) => {
    setShowExtendEnd(false);
    if (!selectedDate) return;
    if (selectedDate < newStartDate) {
      Alert.alert(
        "Invalid Date",
        "End Date cannot be before Start Date."
      );
      return;
    }

    setPlaning(prev =>
      prev.map(item =>
        item.id === currentPlan.id
          ? {
            ...item,
            startDate: newStartDate,
            endDate: selectedDate,
            status: "active"
          }
          : item
      )
    );

    Alert.alert(
      "Plan Updated",
      "Plan dates have been updated successfully."
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerName}>Plan Details</Text>
        </View>

        <View style={styles.planImageCardContainer}>
          <PlaningDetailsCard
            itemName={shortenTitle(currentPlan.planName)}

            itemStartDate={new Date(currentPlan.startDate)
              .toLocaleDateString("en-GB")}

            itemEndDate={new Date(currentPlan.endDate).toLocaleDateString("en-GB")}

            itemIcon={currentPlan.planIcon}
            itemDuration={duration}
            currentPlan={currentPlan}
            planId={planId}
          />
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
              <Text style={styles.amount}>{currentPlan.amount}</Text>
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
                height: 55,
                width: 55,
                backgroundColor:
                  currentPlan.status === "active"
                    ? "#FFF3D6"
                    : currentPlan.status === "✔️ Completed Plan"
                      ? "#DCFCE7"
                      : "#FEE2E2",

              }]}>
                {currentPlan.status === "active" ? (
                  <Feather
                    name="clock"
                    size={37}
                    color="#F59E0B"
                  />
                ) : currentPlan.status === "✔️ Completed Plan" ? (
                  <Text style={{ fontSize: 18 }}>✔️</Text>
                ) : (
                  <Text style={{ fontSize: 18 }}>❌</Text>
                )}
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
                  <Text style={styles.planDateNum}>
                    {new Date(currentPlan.startDate)
                      .toLocaleDateString("en-GB")}
                  </Text>
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
                  <Text style={styles.planDateNum}>
                    {new Date(currentPlan.endDate)
                      .toLocaleDateString("en-GB")}
                  </Text>
                </View>
              </View>

            </View>

            <View style={styles.planDuration}>
              <View style={styles.planDurationff}>
                <View style={styles.planDurationIcon}>
                  <FontAwesome6
                    name="calendar-days"
                    size={18}
                    color="#5754f3"
                  />
                </View>
                <View>
                  <Text style={styles.planDateName}>Duration</Text>
                  <Text style={styles.planDateNum}>
                    {duration} {duration === 1 ? "Day" : "Days"}
                  </Text>
                </View>
              </View>
            </View>

          </View>
        </View>

        <View style={styles.planStatusContainer}>

          <View style={styles.planStatusContaint}>

            <View style={styles.statusContainer}>

              <View
                style={[
                  styles.statusIconContainer,
                  {
                    backgroundColor:
                      currentPlan.status === "active"
                        ? "#FFF3D6"
                        : currentPlan.status === "✔️ Completed Plan"
                          ? "#DCFCE7"
                          : "#FEE2E2",
                  },
                ]}
              >
                {currentPlan.status === "active" ? (
                  <Feather
                    name="clock"
                    size={24}
                    color="#F59E0B"
                  />
                ) : currentPlan.status === "✔️ Completed Plan" ? (
                  <Text style={{ fontSize: 18 }}>✔️</Text>
                ) : (
                  <Text style={{ fontSize: 18 }}>❌</Text>
                )}
              </View>

              <View style={styles.statusIconTextContainer}>
                <Text style={{ fontSize: 14, fontWeight: 700, }}>Plan Status</Text>

                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -10 }}>
                  <Entypo
                    name="dot-single"
                    size={26}
                    color={
                      currentPlan.status === "active"
                        ? "#fdae02"
                        : currentPlan.status === "✔️ Completed Plan"
                          ? "#16A34A"
                          : "#ca2d12"
                    }
                  />
                  <Text style={{
                    fontSize: 13, fontWeight: 500,
                    color:
                      currentPlan.status === "active"
                        ? "#fdae02"
                        : currentPlan.status === "✔️ Completed Plan"
                          ? "#16A34A"
                          : "#ca2d12"

                  }}>
                    {currentPlan.status === "active"
                      ? "Active"
                      : currentPlan.status === "✔️ Completed Plan"
                        ? "Completed"
                        : "Cancel"
                    }
                  </Text>

                </View>

                <Text style={{
                  fontSize: 10,
                  color: "#060605"
                }}>Your plan is ongoing</Text>

              </View>

            </View>

            <View style={styles.statusButtonContainer}>


              {
                currentPlan.status === "active" ? (
                  <Pressable
                    style={styles.statusButtonContaint}
                    onPress={handelOnModal}
                  >
                    <View style={{ flexDirection: "row", gap: 3 }}>
                      <Text style={{ fontSize: 16, }}>⚙️</Text>
                      <Text style={{ color: "#4F46E5", fontSize: 16, fontWeight: 500 }}> Manage Plan </Text>
                      <Text style={{ color: "#4F46E5", fontSize: 16, fontWeight: 500 }}>▼</Text>

                    </View>

                  </Pressable>
                ) : (
                  <Pressable
                    style={styles.statusButtonContaint}
                    onPress={handelOnModal}
                  >
                    <View style={{ flexDirection: "row", gap: 3 }}>
                      <Text style={{ color: "#4F46E5", fontSize: 16, fontWeight: 500 }}>{currentPlan.status}</Text>
                    </View>
                  </Pressable>
                )
              }

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

              <Pressable style={styles.planNoteHeaderContentText}>
                <FontAwesome6
                  name="pencil"
                  size={16}
                  color="#5754f3"
                />
                <Text style={{ color: "#1d50b7" }}>Add Note</Text>
              </Pressable>

            </View>

            <View style={styles.planNoteTextContainer}>
              <Text>
                {currentPlan.planNote}
              </Text>
            </View>
          </View>

          <View>

          </View>

        </View>

        <View style={styles.planAlbemContainer}>
          <View style={styles.planAlbemContaint}>

            <View style={styles.planAlbamHeaderContainer}>

              <View style={styles.planAlbamHeader}>
                <View style={styles.planAlbamHeaderIcon}>
                  <Ionicons
                    name="image"
                    size={18}
                    color="#3d3aff"
                  />
                </View>
                <Text>Trip Memories</Text>
              </View>

              <Pressable style={styles.planAlbamHeaderButton}>
                <Text style={{ color: "#3d3aff" }}>View All </Text>
              </Pressable>

            </View>

            <View style={styles.planAlbamPhotosContainer}>
              <View style={styles.planAlbamPhotos}>
                <Image source={images} style={styles.image} />
                <Image source={images} style={styles.image} />
                <Image source={images} style={styles.image} />
              </View>
              <Pressable style={styles.planPhotoAddButton}>
                <AntDesign
                  name="plus"
                  size={18}
                  color="#3d3aff"
                />
                <Text style={{ color: "#3d3aff", fontSize: 10, fontWeight: 500 }}>Add Photos</Text>
              </Pressable>
            </View>
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

        <Modal
          visible={showModal}
          animationType='slide'
          transparent={true}
          onRequestClose={() => setShowModal(false)}
        >

          <Pressable
            style={styles.modelContainer}
            onPress={() => setShowModal(false)}
          >
            <View style={styles.modelContaint}>
              <Pressable
                style={styles.modeButtons}
                onPress={() => handleOnComplete(currentPlan.id)}
              >
                <Text style={styles.modeButtonsText}>✔️ Completed Plan</Text>
              </Pressable>
              <View style={styles.modelLine} />
              <Pressable
                style={styles.modeButtons}
                onPress={() => {
                  setShowModal(false);
                  setShowExtendStart(true);
                }}
              >
                <Text style={styles.modeButtonsText}>⏳ Extend Plan</Text>
              </Pressable>

              <View style={styles.modelLine} />
              <Pressable
                style={styles.modeButtons}
                onPress={() => handleOnCancel(currentPlan.id)}
              >
                <Text style={styles.modeButtonsText}>❌ Cancel Plan</Text>
              </Pressable>

              <View style={styles.modelLine} />
              <Pressable
                style={styles.modeButtons}
                onPress={() => handleOnActive(currentPlan.id)}
              >
                <Text style={styles.modeButtonsText}>⛔No Completed</Text>
              </Pressable>
            </View>
          </Pressable>

        </Modal >

        {
          showExtendStart && (
            <DateTimePicker
              mode="date"
              value={new Date(currentPlan.startDate)}
              onChange={handleExtendStart}
            />
          )
        }

        {
          showExtendEnd && (
            <DateTimePicker
              mode="date"
              value={new Date(currentPlan.endDate)}
              minimumDate={newStartDate}
              onChange={handleExtendEnd}
            />
          )
        }

      </View >
    </ScrollView >
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
    width: 'auto',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dee0f9",
  },

  planDurationff: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    gap: 10,
    flexDirection: "row",
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

  // Plan Albems Styles

  planAlbemContainer: {
    marginTop: 10,
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#fff"
  },

  planAlbemContaint: {
    margin: 10
  },

  planAlbamHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  planAlbamHeader: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },

  planAlbamHeaderIcon: {
    backgroundColor: "#cae6ff",
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6
  },

  planAlbamPhotosContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"

  },

  planAlbamPhotos: {
    flexDirection: "row",
    marginTop: 10,
    gap: 6
  },

  image: {
    height: 80,
    width: 80,
    borderRadius: 9
  },

  planPhotoAddButton: {
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 6,
    height: 80,
    width: 80,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#6188ff",
    borderStyle: "dashed"
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
  },

  modelContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },

  modelContaint: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#cccccc",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 18,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOpacity: .15,
    shadowRadius: 25,
    elevation: 20,
  },
  modeButtons: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40
  },

  modelLine: {
    borderWidth: 0.2,
  },

  modeButtonsText: {
    fontSize: 20,
    fontWeight: 700
  }


})