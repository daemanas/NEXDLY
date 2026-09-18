import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import ProfileCard from './Setting/ProfileCard';

const Setting = () => {
  return (
    <>
      <ScrollView style={styles.container}>

        <View style={styles.contentContainer}>

          <View style={styles.headerContainer}>
            <View style={styles.headerTextContainer}>

              <Text style={{ fontSize: 26, fontWeight: 700 }}>Settings</Text>
              <Text style={{ fontSize: 14, color: "#2e2e2e" }}>Customize your Profile</Text>

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

          <View style={styles.accountContainer} >
            <Text>Account</Text>

            <View style={styles.accountContainerContent}>

              <View style={styles.accountContainerContentItem}>
                <View style={styles.accountContainerContentLogo}>
                  <FontAwesome6
                    name="user"
                    size={20}
                    color="#4444f8"
                  />
                </View>
                <View>
                  <Text style={styles.headerText} >Edit Profile</Text>
                  <Text style={styles.commentText}>Update your personal information</Text>
                </View>
              </View>

            </View>

          </View>

          <View style={styles.accountContainer} >
            <Text>Support</Text>

            <View style={styles.accountContainerContent}>

              <View style={styles.accountContainerContentItem}>
                <View style={styles.accountContainerContentLogo}>
                  <Entypo
                    name="help-with-circle"
                    size={23}
                    color="#4444f8"
                  />
                </View>
                <View>
                  <Text style={styles.headerText} >Help & Support</Text>
                  <Text style={styles.commentText}>FAQs, help articles and contact us</Text>
                </View>
              </View>

              <View style={styles.planCardLine} />

              <View style={styles.accountContainerContentItem}>
                <View style={[styles.accountContainerContentLogo, { backgroundColor: "#fddfdc" }]}>
                  <Entypo
                    name="message"
                    size={23}
                    color="#f84471"
                  />
                </View>
                <View>
                  <Text style={styles.headerText} >Send Feedback</Text>
                  <Text style={styles.commentText}>Help us improve the app</Text>
                </View>
              </View>

            </View>

          </View>

          <View style={styles.accountLogoutContainer} >
            <Text style={{color: "#d42551", fontWeight: 600, fontSize:16}}>Logout</Text>
          </View>

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

  headerContainer: {
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

  accountContainer: {
    marginTop: 10,
  },

  accountContainerContent: {
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 6,
    borderRadius: 12,
  },

  accountContainerContentItem: {
    margin: 10,
    flexDirection: "row",
    gap: 10,
  },

  accountContainerContentLogo: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    backgroundColor: "#dbdbfc",
    borderRadius: 12,
  },

  headerText: {
    fontSize: 16,
    fontWeight: 600,
  },

  commentText: {
    fontSize: 12,
    color: "#2e2e2e"
  },

  planCardLine: {
    width: 280,
    borderWidth: 0.2,
    borderColor: "#d7d0d0",
    marginLeft: 60,
  },

  accountLogoutContainer:{
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    height:50,
    backgroundColor: "#ffdce5",
    borderRadius:12,

  }


})