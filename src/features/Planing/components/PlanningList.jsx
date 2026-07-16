import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PercentageCircle from "./CircularColorProgress"
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const planningIcons = [
  "🏝️", "🏖️", "✈️",
  "🚗", "⛺", "⛰️",
  "🛍️", "🛒", "🎁",
  "👕", "👟", "💄",
  "🎂", "🎉", "🎈",
  "🥳", "🎀", "🥂",
  "🍯", "💰", "💵",
  "🐷", "🪙", "📈",
  "📅", "📝", "🏠",
  "💻", "🏋️", "🧹"
];

const PlanningList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageTitleContainer}>

          <View style={styles.cardImageContainer}>
            <Text style={{ fontSize: 37 }}>⛰️</Text>
          </View>

          <View style={styles.cardTitleContainer}>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Goa Trip✈️</Text>
            <View style={styles.cardSmallTitleContainer}>
              <EvilIcons name="calendar" size={20} color={"#9d9d9d"} />
              <Text style={styles.cardSmallTitle}>
                15 july 2026
              </Text>
            </View>

            <View
              style={[
                styles.cardSmallTitleContainer,
                { gap: 5, marginLeft: 2 }]}
            >
              <Entypo name="wallet" size={16} color={"#9d9d9d"} />
              <Text style={styles.cardSmallTitle}>
                Budget ₹28,990
              </Text>
            </View>

          </View>
        </View>

        <View style={styles.cardPercentageContainer}>
          <View style={styles.cardPercentage}>
            <PercentageCircle limit={69} />
          </View>

          <View style={styles.cardPercentageTitleContainer}>
            <View style={styles.cardPercentageTitle}>
              <Text style={styles.cardSmallPriceTitle}>₹2657</Text>
              <Text style={styles.cardSmallTitle}>spen</Text>
            </View>
            <View style={styles.cardPercentageTitle}>
              <Text style={styles.cardSmallPriceTitle}>₹270</Text>
              <Text style={styles.cardSmallTitle}>remaining</Text>
            </View>
          </View>

        </View>

        <Pressable style={styles.eyeButton}>
          <AntDesign
            name="eye"
            size={20}
            color="#631c1c"
          />
        </Pressable>

      </View>

    </View>
  )
}

export default PlanningList

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 5
  },

  cardContainer: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 120,
    alignItems: "center",
    position: "relative",
  },

  cardImageTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    gap: 12,
  },

  cardImageContainer: {
    backgroundColor: "#aef9fa",
    height: 70,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },

  cardTitleContainer: {
    gap: 7,
  },

  cardSmallTitleContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 1
  },

  cardSmallTitle: {
    fontSize: 11,
    color: "#9d9d9d",
    alignItems: "center",
    flexDirection: "row",
    fontWeight: 700
  },

  cardPercentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "flex-start",
    flex: 1,
    marginLeft: 9,
    marginRight: 15,


  },

  cardPercentage: {
    // alignItems:"center",
    // justifyContent:"center",

  },

  cardPercentageTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    alignItems: "flex-start",

  },

  cardPercentageTitle: {
  },

  cardSmallPriceTitle: {
    fontSize: 15,
    fontWeight: 500
  },

  eyeButton: {
    position: "absolute",
    top: 6,
    right: 8,

    height: 30,
    width: 30,

    justifyContent: "center",
    alignItems: "center",
  },


})