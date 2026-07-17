import { KeyboardAvoidingView, Pressable, TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import {  } from 'react-native/types_generated/index'

const PlaningInput = () => {

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >

      <View style={styles.headingContainer} >
        <Text style={{ fontSize: 21, fontWeight: 500 }}>Add New Plan</Text>
        <Text style={{ fontSize: 15, }}>Create a New Plan</Text>
      </View>


      <View style={styles.containtContainer}>

        <View style={styles.inputContaint}>

          <View style={styles.imageContainer}>

            <View style={styles.iconContainer}>
              <Text style={{ fontSize: 44 }} > 🏝️ </Text>
            </View>

            <Pressable>
              <Text style={{ fontWeight: 500, color: "#3d63ca" }} >Choose Plan Icon</Text>
            </Pressable>

          </View>

          <View style={styles.input}>
            <Text>Plan Name</Text>
            <View style={styles.inputBox}>
              <TextInput style={styles.inputBoxContainer} placeholder=' Ex: Goa Trip' />
            </View>
          </View>

          <View style={styles.input}>
            <Text>Trip Amount (Optional)</Text>
            <View style={styles.inputBox}>
              <TextInput style={styles.inputBoxContainer} placeholder=' Ex: 1000' />
            </View>
          </View>

          <View style={styles.inputDateContainer}>

            <View style={styles.dateInput}>
              <Text>Start Date</Text>
              <View style={styles.inputBox}>
                <TextInput style={styles.inputBoxContainer} placeholder=' Ex: 22/04/2006' />
              </View>
            </View>

            <View style={styles.dateInput}>
              <Text>End Date</Text>
              <View style={styles.inputBox}>
                <TextInput style={styles.inputBoxContainer} placeholder=' Ex: 22/04/2006' />
              </View>
            </View>

          </View>

          <Pressable style={styles.buttonContainer}>
            <Text
              style={{
                fontSize: 18,
                color: "#ffff",
                fontWeight: 500
              }}>Add Plan</Text>
          </Pressable>

        </View>

      </View>


    </KeyboardAvoidingView>
  )
}

export default PlaningInput

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#e3e3ef",
  },

  headingContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 56,
    gap: 6
  },

  containtContainer: {
    backgroundColor: "#ffff",
    marginTop: 35,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
  },

  inputContaint: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },

  imageContainer: {
    alignItems: "center",
    gap: 4
  },
  iconContainer: {
    backgroundColor: "#b9e7df",
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  input: {
    marginTop: 20,
    gap: 15,
  },

  inputBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#d6d6ff",
    height: 48,
    justifyContent: "center",

  },

  inputBoxContainer: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 19
  },

  dateInput: {
    flex: 1,
    marginTop: 20,
    gap: 15,
  },

  inputDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    marginTop: 20,
  },

  buttonContainer: {
    backgroundColor: "#3f5cdb",
    marginTop: 70,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }

})