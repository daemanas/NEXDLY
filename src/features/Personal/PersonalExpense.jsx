import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PersonalCard from '../Cards/PersonalCard'
import PersonalExpList from '../ExpList/PersonalExpList'

const PersonalExpense = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ContaintContainer}>
        <View style={styles.CardTitle}>
          <Text style={styles.CardName}> Quick Summary</Text>
          <Text style={styles.CardMonth}>This Month </Text>
        </View>
        <View style={styles.CardContainer}>
          <PersonalCard />
        </View>

        <View style={styles.expansionList}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }} >
            Recent Expension
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500", color: "#192ebd" }}>
            See All
          </Text>
        </View>
        <View>
          <PersonalExpList />
        </View>
      </View>
    </View>
  )
}

export default PersonalExpense

const styles = StyleSheet.create({
  container: {
    // flex:1,
    width: "100%"
  },
  ContaintContainer: {

    marginTop: 30,
    marginLeft: 21,
    marginRight: 21,
  },
  CardTitle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  CardName: {
    fontSize: 17,
    fontWeight: "bold"

  },
  CardMonth: {
    fontSize: 15
  },
  CardContainer: {
    // flex:1,
    alignItems: "center",
    marginTop: 25
  },
  expansionList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
})