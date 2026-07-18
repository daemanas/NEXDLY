import { KeyboardAvoidingView, Pressable, TextInput, StyleSheet, Text, View, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

const PlaningInput = () => {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date());

  const [show, setShow] = useState(false);
  const [endShow, setEndShow] = useState(false);



  const onStartDateChange = (even, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShow(false)
    if (currentDate) {
      setStartDate(currentDate);
    }

  }

  const onEndDateChange = (even, selectedDate) => {
    const currentDate = selectedDate || endDate;

    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(currentDate);
    end.setHours(0, 0, 0, 0);

    setEndShow(false)
    if (currentDate) {
      if (end < start) {
        Alert.alert(
          "Invalid Date",
          "End date cannot be before Start date."
        )
        return;
      }
      setEndDate(currentDate);
    }

  }

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

              {show && <DateTimePicker
                mode='date'
                display='spinner'
                value={startDate}
                onChange={onStartDateChange}
              />}
              <View style={styles.inputBox}>
                <Pressable onPress={() => setShow(true)} >
                  <TextInput
                    style={styles.inputBoxContainer}
                    placeholder=' Ex: 22/04/2006'
                    value={startDate.toLocaleDateString("en-GB")}
                    onChangeText={setStartDate}
                    editable={false}
                  />
                </Pressable>
              </View>
            </View>

            <View style={styles.dateInput}>

              <Text>End Date</Text>
              {endShow && <DateTimePicker
                mode='date'
                display='spinner'
                value={endDate}
                onChange={onEndDateChange}
              />}

              <View style={styles.inputBox}>
                <Pressable onPress={() => setEndShow(true)} >
                  <TextInput
                    style={styles.inputBoxContainer}
                    placeholder=' Ex: 22/04/2006'
                    value={endDate.toLocaleDateString("en-GB")}
                    onChangeText={setEndDate}
                    editable={false}
                  />
                </Pressable>
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
    fontSize: 18
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