import {
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Platform,
  Alert,
} from 'react-native';

import React, { useState, useEffect } from 'react';

import { useExpense } from "../../../context/ExpenseContext";

import DateTimePicker
  from '@react-native-community/datetimepicker';


const expenseIcons = [
  "🍔", "🍕", "🍜", "☕",
  "🥪", "🍦", "🥤", "🍿",
  "🚗", "🚌", "🚕", "⛽",
  "🛍️", "👕", "🎬", "🎮",
  "📚", "💊", "🏠", "💡",
  "📱", "🎁", "✂️", "📦",
];


const GroupInput = () => {

  const {
    setGroupExpenses,
    setGroupEdit,
    isgroupEdit,
    groupEditItem,
    updateGroupExpense,
  } = useExpense();


  const [showIconPicker, setShowIconPicker] =
    useState(false);

  const [showDatePicker, setShowDatePicker] =
    useState(false);


  const [inputData, setInputData] = useState({
    itemName: "",
    itemIcon: "🍔",
    amount: "",
    date: new Date(),
    notes: "",
  });

  useEffect(() => {

    if (groupEditItem) {

      setInputData({
        itemName: groupEditItem.title,
        itemIcon: groupEditItem.icon,
        amount: groupEditItem.amount.toString(),
        date: new Date(groupEditItem.date),
        notes: groupEditItem.notes || "",
      });

    }

  }, [groupEditItem]);



  const handleChange = (key, value) => {
    setInputData((prev) => ({
      ...prev,
      [key]: value,
    }));

  };
  const AddInputItems = () => {

    if (
      !inputData.itemName.trim() ||
      !inputData.amount.trim()
    ) {
      Alert.alert(
        "Missing Information",
        "Please enter expense name and amount."
      );

      return;
    }
    const newExpensesItem = {

      id: Date.now(),
      icon: inputData.itemIcon,
      title: inputData.itemName.trim(),
      date: inputData.date,
      amount: Number(inputData.amount),
      time: inputData.date.toLocaleTimeString(
        "en-IN",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      ),

      notes: inputData.notes.trim(),

      iconBg: "#F5F5FA",

    };


    console.log("New Expense:", newExpensesItem);


    if (groupEditItem) {

      updateGroupExpense({
        ...newExpensesItem,
        id: groupEditItem.id,
      });

    } else {

      setGroupExpenses((prev) => [
        newExpensesItem,
        ...prev,
      ]);

    }


    setInputData({
      itemName: "",
      itemIcon: "🍔",
      amount: "",
      date: new Date(),
      notes: "",
    });

    Alert.alert(
      "Expense Added",
      "Your expense has been added successfully."
    );

    setGroupEdit(false)

  };


  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.mainContainer}>
          <View style={styles.inputTitleContainer}>
            <View style={styles.inputTitle}>
              <Text style={styles.title}>
                Group Expenses
              </Text>
              <Text style={styles.subTitle}>
                {isgroupEdit ? 'Edit your Group expenses' : 'Add your Group expenses'}
              </Text>
            </View>
          </View>


          <View style={styles.inputContentContainer}>
            <View style={styles.inputBoxContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputname}>
                  Expense Name
                </Text>
                <View style={styles.inputBox}>

                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>
                      {inputData.itemIcon}
                    </Text>
                  </View>

                  <TextInput
                    placeholder="eg: Kurkuri"
                    value={inputData.itemName}
                    style={styles.input}
                    onChangeText={(value) =>
                      handleChange("itemName", value)
                    }

                  />

                </View>

              </View>


              {/* Amount */}

              <View style={styles.inputContainer}>

                <Text style={styles.inputname}>
                  Amount
                </Text>

                <View style={styles.inputBox}>

                  <View style={styles.iconContainer}>

                    <Text style={styles.icon}>
                      ₹
                    </Text>

                  </View>


                  <TextInput
                    placeholder="eg: 300"
                    keyboardType="numeric"
                    value={inputData.amount}
                    onChangeText={(value) =>
                      handleChange(
                        "amount",
                        value
                      )
                    }
                    style={styles.input}
                  />

                </View>

              </View>


              {/* Date */}

              <View style={styles.inputContainer}>

                <Text style={styles.inputname}>
                  Date
                </Text>


                <Pressable
                  style={styles.inputBox}
                  onPress={() =>
                    setShowDatePicker(true)
                  }
                >

                  <View style={styles.iconContainer}>

                    <Text style={styles.icon}>
                      📅
                    </Text>

                  </View>


                  <Text style={styles.dateText}>

                    {inputData.date.toLocaleDateString(
                      "en-GB"
                    )}

                  </Text>

                </Pressable>

              </View>


              {/* Expense Icon */}

              <View style={styles.inputContainer}>

                <Text style={styles.inputname}>
                  Expense Icon
                </Text>


                <Pressable
                  style={styles.inputBox}
                  onPress={() =>
                    setShowIconPicker(true)
                  }
                >

                  <View style={styles.iconContainer}>

                    <Text style={styles.icon}>
                      {inputData.itemIcon}
                    </Text>

                  </View>


                  <Text style={styles.iconSelectText}>
                    Select Expense Icon
                  </Text>

                </Pressable>

              </View>


              {/* Notes */}

              <View style={styles.inputContainer}>

                <Text style={styles.inputname}>
                  Notes (Optional)
                </Text>


                <View style={styles.noteInputBox}>

                  <TextInput
                    multiline
                    numberOfLines={4}
                    maxLength={130}
                    placeholder="Write a note..."
                    value={inputData.notes}
                    onChangeText={(value) =>
                      handleChange(
                        "notes",
                        value
                      )
                    }
                    style={styles.noteInput}
                    textAlignVertical="top"
                  />

                </View>

              </View>


              {/* Add Button */}

              <Pressable
                style={styles.Button}
                onPress={AddInputItems}
              >

                <Text style={styles.buttonText}>
                  {isgroupEdit ? 'Edit Expenses' : 'Add Expenses'}
                </Text>

              </Pressable>


            </View>

          </View>

        </View>

      </ScrollView>


      {/* DATE PICKER */}

      {showDatePicker && (

        <DateTimePicker
          value={inputData.date}
          mode="date"
          display="default"
          maximumDate={new Date()}
          onChange={(event, selectedDate) => {

            setShowDatePicker(false);


            if (selectedDate) {

              setInputData((prev) => ({
                ...prev,
                date: selectedDate,
              }));

            }

          }}
        />

      )}


      {/* ICON PICKER MODAL */}

      <Modal
        visible={showIconPicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() =>
          setShowIconPicker(false)
        }
      >

        <Pressable
          style={styles.modalOverlay}
          onPress={() =>
            setShowIconPicker(false)
          }
        >


          <Pressable
            style={styles.iconPickerContainer}
            onPress={(e) =>
              e.stopPropagation()
            }
          >


            <View style={styles.pickerHeader}>

              <Text style={styles.pickerTitle}>
                Select Expense Icon
              </Text>


              <Pressable
                onPress={() =>
                  setShowIconPicker(false)
                }
              >

                <Text style={styles.closeButton}>
                  ✕
                </Text>

              </Pressable>

            </View>


            <View style={styles.iconGrid}>


              {expenseIcons.map((item, index) => (

                <Pressable
                  key={index}
                  style={[
                    styles.iconItem,

                    inputData.itemIcon === item &&
                    styles.selectedIconItem,
                  ]}
                  onPress={() => {

                    setInputData((prev) => ({
                      ...prev,
                      itemIcon: item,
                    }));


                    setShowIconPicker(false);

                  }}
                >

                  <Text style={styles.pickerIcon}>
                    {item}
                  </Text>

                </Pressable>

              ))}


            </View>


          </Pressable>


        </Pressable>

      </Modal>


    </KeyboardAvoidingView>

  );

};


export default GroupInput;



const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#e3e3ef",
  },


  scrollContent: {
    flexGrow: 1,
  },


  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#e3e3ef",
  },


  inputTitleContainer: {
    marginTop: 30,
    marginLeft: 21,
    marginRight: 21,
  },


  inputTitle: {
    alignItems: "center",
    marginTop: 30,
    gap: 5,
  },


  title: {
    fontSize: 21,
    fontWeight: "700",
    color: "#2f2f31",
  },


  subTitle: {
    fontSize: 15,
    color: "#2f2f31",
  },


  inputContentContainer: {
    backgroundColor: "#ffffff",
    marginTop: 30,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    flex: 1,
  },


  inputBoxContainer: {
    marginTop: 16,
    marginLeft: 21,
    marginRight: 21,
    marginBottom: 35,

    gap: 19,
  },


  inputname: {
    fontSize: 14,
    color: "#5b5b5b",
    fontWeight: "500",
  },


  inputContainer: {
    gap: 10,
  },


  inputBox: {
    borderWidth: 1,
    borderRadius: 15,

    height: 52,

    borderColor: "#E2E2EA",

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 15,
  },


  iconContainer: {
    backgroundColor: "#dcd1d1",

    height: 35,
    width: 35,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
  },


  icon: {
    fontSize: 21,
  },


  input: {
    flex: 1,

    marginLeft: 10,

    borderLeftWidth: 0.5,
    borderLeftColor: "#E2E2EA",

    paddingLeft: 10,

    fontSize: 17,
  },


  dateText: {
    marginLeft: 10,

    fontSize: 17,

    color: "#2f2f31",
  },


  iconSelectText: {
    marginLeft: 10,

    fontSize: 17,

    color: "#5b5b5b",
  },


  noteInputBox: {
    borderWidth: 1,
    borderRadius: 15,

    height: 100,

    borderColor: "#E2E2EA",
  },


  noteInput: {
    flex: 1,

    paddingHorizontal: 10,
    paddingTop: 10,

    fontSize: 17,
    fontWeight: "500",
  },


  Button: {
    height: 55,

    borderRadius: 16,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#2549b6",

    marginTop: 30,
  },


  buttonText: {
    color: "#ffffff",

    fontSize: 17,

    fontWeight: "500",
  },


  modalOverlay: {
    flex: 1,

    backgroundColor: "rgba(0, 0, 0, 0.35)",

    justifyContent: "flex-end",
  },


  iconPickerContainer: {
    backgroundColor: "#ffffff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingHorizontal: 21,
    paddingTop: 20,
    paddingBottom: 30,
  },


  pickerHeader: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 20,
  },


  pickerTitle: {
    fontSize: 19,

    fontWeight: "700",

    color: "#2f2f31",
  },


  closeButton: {
    fontSize: 20,

    color: "#5b5b5b",
  },


  iconGrid: {
    flexDirection: "row",

    flexWrap: "wrap",

    gap: 12,
  },


  iconItem: {
    width: 50,
    height: 50,

    backgroundColor: "#F5F5FA",

    borderRadius: 13,

    justifyContent: "center",
    alignItems: "center",
  },


  selectedIconItem: {
    borderWidth: 2,

    borderColor: "#6246EA",

    backgroundColor: "#EEEBFF",
  },


  pickerIcon: {
    fontSize: 25,
  },

});