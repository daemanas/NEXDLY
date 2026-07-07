import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import PersonalCard from '../Cards/PersonalCard'
import PersonalExpList from '../components/PersonalExpenseListItem'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
const PersonalExpense = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.ContaintContainer}>
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
          <Pressable
            onPress={() => navigation.navigate('AllPersonalExpenses')}
          >
            <Text style={{
              ontSize: 15, fontWeight: "500", color: "#192ebd"
            }} >
              See All
            </Text>
          </Pressable>
        </View>
        <View style={{marginTop:20}}>
          <PersonalExpList limit={6} />
        </View>

      </ScrollView>

      <Pressable 
      style={styles.addButton}
      onPress={() => navigation.navigate('AddPersonalExpenses')}
      >
        <AntDesign
          name="plus"
          size={30}
          color="#FFFFFF"
        />
      </Pressable>

    </View>
  )
}

export default PersonalExpense

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%"
  },
  ContaintContainer: {
    flex:1,
    marginTop: 30,
    marginLeft: 21,
    marginRight: 21,
    paddingBottom: 100,
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