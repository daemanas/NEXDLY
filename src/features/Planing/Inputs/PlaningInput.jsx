import {
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
  Modal
} from 'react-native'

import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

import { usePlaning } from '../../../context/PlaningContext';

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


const PlaningInput = () => {

  const {
    setPlaning
  } = usePlaning()

  const [show, setShow] = useState(false);
  const [endShow, setEndShow] = useState(false);
  const [showIconPicker, setShowIconPicker] = useState(false)

  const [inputData, setInputDate] = useState({
    planName: '',
    amount: '',
    planIcon: '🏝️',
    date: new Date(),
    startDate: new Date(),
    endDate: new Date(),
  })



  const onStartDateChange = (even, selectedDate) => {
    setShow(false)
    if (selectedDate) {
      setInputDate((prev) => ({
        ...prev,
        startDate: selectedDate
      }));
    }

  }

  const onEndDateChange = (even, selectedDate) => {

    const start = new Date(inputData.startDate);;
    start.setHours(0, 0, 0, 0);

    const end = new Date(selectedDate);
    end.setHours(0, 0, 0, 0);

    setEndShow(false)
    if (selectedDate) {
      if (end < start) {
        Alert.alert(
          "Invalid Date",
          "End date cannot be before Start date."
        )
        return;
      }
      setInputDate((prev) => ({
        ...prev,
        endDate: selectedDate
      }));
    }

  }

  const handelChange = (key, value) => {
    setInputDate((prev) => ({
      ...prev,
      [key]: value
    }))
  }


  const AddInputData = () => {
    const newInputAdd = {
      id: Date.now(),
      planName: inputData.planName,
      amount: inputData.amount,
      planIcon: inputData.planIcon,
      date: inputData.date,
      startDate: inputData.startDate,
      endDate: inputData.endDate,
    };
    console.log("new planing : ", newInputAdd)

    console.log("new date : ", newInputAdd.date.toLocaleDateString("en-GB"))

    setPlaning((prev) => [
      newInputAdd,
      ...prev,
    ])

    setInputDate({
      planName: '',
      amount: '',
      planIcon: '🏝️',
      date: new Date(),
      startDate: new Date(),
      endDate: new Date(),
    })

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
              <Text style={{ fontSize: 44 }} > {inputData.planIcon} </Text>
            </View>

            <Pressable onPress={() => setShowIconPicker(true)}>
              <Text style={{ fontWeight: 500, color: "#3d63ca" }} >Choose Plan Icon</Text>
            </Pressable>

          </View>

          <View style={styles.input}>
            <Text>Plan Name</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.inputBoxContainer}
                placeholder=' Ex: Goa Trip'
                value={inputData.planName}
                onChangeText={(value) =>
                  handelChange("planName", value)
                }
              />
            </View>
          </View>

          <View style={styles.input}>
            <Text>Trip Amount (Optional)</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.inputBoxContainer}
                placeholder=' Ex: 1000'
                value={inputData.amount}
                onChangeText={(value) =>
                  handelChange("amount", value)}
              />
            </View>
          </View>

          <View style={styles.inputDateContainer}>

            <View style={styles.dateInput}>
              <Text>Start Date</Text>

              {show && <DateTimePicker
                mode='date'
                display='spinner'
                value={inputData.startDate}
                onChange={onStartDateChange}
              />}
              <View style={styles.inputBox}>
                <Pressable onPress={() => setShow(true)} >
                  <TextInput
                    style={styles.inputBoxContainer}
                    placeholder=' Ex: 22/04/2006'
                    value={inputData.startDate.toLocaleDateString("en-GB")}
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
                value={inputData.endDate}
                onChange={onEndDateChange}
              />}

              <View style={styles.inputBox}>
                <Pressable onPress={() => setEndShow(true)} >
                  <TextInput
                    style={styles.inputBoxContainer}
                    placeholder=' Ex: 22/04/2006'
                    value={inputData.endDate.toLocaleDateString("en-GB")}
                    editable={false}
                  />
                </Pressable>
              </View>
            </View>

          </View>

          <Pressable
            style={styles.buttonContainer}
            onPress={AddInputData}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#ffff",
                fontWeight: 500
              }}>Add Plan</Text>
          </Pressable>

        </View>

      </View>

      <Modal
        visible={showIconPicker}
        animationType='slide'
        transparent={true}
        onRequestClose={() => setShowIconPicker(false)}
      >
        <Pressable
          onPress={() => setShowIconPicker(false)}
          style={styles.planingIconContainer}>

          <Pressable style={styles.planingIconBox}>

            <View style={styles.planingIconBoxContainer}>

              <View style={styles.pickerHeader}>

                <Text style={styles.pickerTitle}>
                  Select Plan Icon
                </Text>

                <Pressable
                  onPress={() => setShowIconPicker(false)}
                  style={styles.closeContainer}
                >
                  <Text>❌</Text>
                </Pressable>

              </View>

              <View style={styles.pickerIconHome}>

                {planningIcons.map((item, index) =>

                  <Pressable
                    key={index}
                    style={[styles.iconItem,
                    inputData.planIcon === item &&
                    styles.selectedIconItem,
                    ]}
                    onPress={() => {
                      setInputDate((prev) => ({
                        ...prev,
                        planIcon: item,
                      }));

                      setShowIconPicker(false)
                    }}
                  >

                    <Text style={styles.iconItemContainer}>
                      {item}
                    </Text>

                  </Pressable>

                )}


              </View>

            </View>

          </Pressable>

        </Pressable>

      </Modal>


    </KeyboardAvoidingView >
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
  },

  planingIconContainer: {
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    flex: 1
  },

  planingIconBox: {
    backgroundColor: "#ffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  planingIconBoxContainer: {
    margin: 20
  },

  pickerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },

  pickerTitle: {
    fontSize: 17,
    fontWeight: 700
  },

  closeContainer: {
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "#9e3b3b"

  },

  pickerIconHome: {
    flexDirection: "row",
    gap: 13,
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 10

  },

  iconItem: {
    height: 50,
    width: 50,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e1ec",
  },

  selectedIconItem: {
    borderWidth: 2,
    borderColor: "#6246EA",
    backgroundColor: "#EEEBFF",
  },

  iconItemContainer: {
    fontSize: 28
  }


})