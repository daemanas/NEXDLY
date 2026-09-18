import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';;


import { usePlaning } from "../../context/PlaningContext";

import { useNavigation } from '@react-navigation/native'

const ProfileCard = () => {

  const navigation = useNavigation()

  const {
    totalCompletedPlans,
    totalPlans,
    totalPendingPlans,
    totalCancelPlans,
  } = usePlaning();

  return (
    <View style={styles.container}>

      <View style={{
        backgroundColor: "#d5d8ff",
        borderRadius: 12,
      }}>
        <View style={styles.headerContainer}>
          <View style={styles.profileImage}>
            <Image
              source={require('../../assets/images/profileImg.jpg')}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileData}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Daem Anas</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>daemanas03@gmail.com</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>Stay focused and make it happen!</Text>
          </View>
        </View>
      </View>

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
            <View>
              <Text style={styles.textNumber}>{totalPlans}</Text>
            </View>
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
            <View>
              <Text style={styles.textNumber}>{totalCompletedPlans}</Text>
            </View>
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
            <View>
              <Text style={styles.textNumber}>{totalPendingPlans}</Text>
            </View>
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
            <View>
              <Text style={styles.textNumber}>{totalCancelPlans}</Text>
            </View>
          </View>

        </View>
      </View>



    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#fff",
    borderColor: "#ffffff",
    borderWidth: 2,
    marginTop: 12
  },

  headerContainer: {
    flexDirection: "row",
    margin: 10,
    gap: 10,
  },

  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderColor: "#ffffff",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  profileData: {
    gap: 4
  },

  planCardTrackContainer: {
    marginTop: 15,
    width: "100%",
    height: 55,
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
    gap: 7,
    flexDirection: "row",
  },

  planCardLine: {
    height: 40,
    borderWidth: 0.2,
    borderColor: "#d7d0d0"
  },

  planCardTrackIcon: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  textNumber: {
    fontSize: 16,
    fontWeight: 700
  },



})