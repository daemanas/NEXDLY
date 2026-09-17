import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ProfileCard from './Setting/ProfileCard';

const Setting = () => {
  return (
    <>
      <ScrollView style={styles.container}>

        <View style={styles.contentContainer}>

          <View style={styles.headerContainer}>
            <View style={styles.headerTextContainer}>

              <Text style={{fontSize:26, fontWeight:700}}>Settings</Text>
              <Text style={{fontSize:14,color:"#2e2e2e"}}>Customize your Profile</Text>

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

          <ProfileCard />

        </View>

      </ScrollView>
    </>

  )
}

export default Setting

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
    marginBottom: 10,
  },

  headerContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
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
})