import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { use } from 'react'
import PercentageCircle from "./CircularColorProgress"
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


import { useNavigation } from '@react-navigation/native'


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

const PlanningList = ({planing}) => {
  const navigation = useNavigation()



  const shortenTitle = (title) => {
    return title.length > 10
      ? title.slice(0, 10) + "..."
      : title;
  };

  return (
    <>
      <View
        style={styles.container}

      >
        {planing.map((item) => (
          <Pressable
            style={styles.cardContainer}
            key={item.id}
            onPress={() =>
              navigation.navigate('PlanDetails', {
                planId: item.id
              })}
          >

            <View style={styles.cardImageTitleContainer}>

              <View style={styles.cardImageContainer}>
                <Text style={{ fontSize: 37 }}>{item.planIcon}</Text>
              </View>

              <View style={styles.cardTitleContainer}>
                <Text
                  style={{ fontSize: 16, fontWeight: 500 }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {shortenTitle(item.planName)}
                </Text>
                <View style={styles.cardSmallTitleContainer}>
                  <EvilIcons name="calendar" size={20} color={"#9d9d9d"} />
                  <Text style={styles.cardSmallTitle}>
                    {new Date(item.date).toLocaleDateString("en-GB")}
                  </Text>
                </View>

                <View
                  style={[
                    styles.cardSmallTitleContainer,
                    { gap: 5, marginLeft: 2 }]}
                >
                  <Entypo name="wallet" size={16} color={"#9d9d9d"} />
                  <Text style={styles.cardSmallTitle}>
                    Budget ₹{item.amount}
                  </Text>
                </View>

              </View>
            </View>

            <View style={styles.cardPercentageContainer}>
              {/* <View style={styles.cardPercentage}>
                <PercentageCircle limit={69} />
              </View> */}

              <View style={styles.cardPercentageTitleContainer}>
                <View style={styles.cardPercentageTitle}>
                  <Text style={styles.cardSmallPriceTitle} >{new Date(item.startDate).toLocaleDateString("en-GB")}</Text>
                  <Text style={styles.cardSmallTitle}>Start Time</Text>
                </View>
                <View style={styles.cardPercentageTitle}>
                  <Text style={styles.cardSmallPriceTitle}>{new Date(item.endDate).toLocaleDateString("en-GB")}</Text>
                  <Text style={styles.cardSmallTitle}>End Time</Text>
                </View>
              </View>

            </View>

          </Pressable>
        ))}
      </View>
    </>
  )
}

export default PlanningList

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 9,
    marginTop:14
  },

  cardContainer: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 90,
    alignItems: "center",
    position: "relative",
  },

  cardImageTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    gap: 12,
    flex: 1,
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
    flex: 1,
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
    marginLeft: 9,
    marginRight: 15,
    width: 95


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