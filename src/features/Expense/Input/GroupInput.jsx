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

} from 'react-native'
import React, { useState } from 'react';

const expenseIcons = [
  "🍔", "🍕", "🍜", "☕",
  "🥪", "🍦", "🥤", "🍿",
  "🚗", "🚌", "🚕", "⛽",
  "🛍️", "👕", "🎬", "🎮",
  "📚", "💊", "🏠", "💡",
  "📱", "🎁", "✂️", "📦",
];

const GroupInput = () => {

  const [selectedIcon, setSelectedIcon] = useState("🍔");
  const [showIconPicker, setShowIconPicker] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.container}>
          <View style={styles.inputTitleContainer}>
            <View style={styles.inputTitle}>
              <Text style={{ fontSize: 21, fontWeight: 700, color: "#2f2f31" }}> Group Expenses </Text>
              <Text style={{ fontSize: 15, color: "#2f2f31" }}> Add your Group expenses</Text>
            </View>
          </View>
          <View style={styles.inputContentContainer}>
            <View style={styles.inputBoxContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputname}>Expense Name</Text>
                <View style={styles.inputBox}>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>🍔</Text>
                  </View>
                  <TextInput
                    placeholder='Enter Title'
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputname}>Amount</Text>
                <View style={styles.inputBox}>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>₹</Text>
                  </View>
                  <TextInput
                    placeholder='Enter Title'
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputname}>Date</Text>
                <View style={styles.inputBox}>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>📅</Text>
                  </View>
                  <TextInput
                    placeholder='Enter Title'
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputname}>Expense Icon</Text>

                <Pressable
                  style={styles.inputBox}
                  onPress={() => setShowIconPicker(true)}
                >
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>
                      {selectedIcon}
                    </Text>
                  </View>

                  <Text style={styles.iconSelectText}>
                    Select Expense Icon
                  </Text>
                </Pressable>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputname}>Notes (Optional)</Text>
                <View style={styles.noteInputBox}>
                  <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={130}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    style={styles.noteInput}
                  />
                </View>
              </View>

              <Pressable style={styles.Button}>
                <Text style={{ color: "#ffff", fontSize: 17, fontWeight: 500 }}>Add Expenses</Text>
              </Pressable>
            </View>



          </View>
        </View>
      </ScrollView>



      <Modal
        visible={showIconPicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowIconPicker(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowIconPicker(false)}
        >

          <Pressable
            style={styles.iconPickerContainer}
            onPress={(e) => e.stopPropagation()}
          >

            <View style={styles.pickerHeader}>
              <Text style={styles.pickerTitle}>
                Select Expense Icon
              </Text>

              <Pressable
                onPress={() => setShowIconPicker(false)}
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

                    selectedIcon === item &&
                    styles.selectedIconItem
                  ]}
                  onPress={() => {
                    setSelectedIcon(item);
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


  )
}

export default GroupInput

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
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
    gap: 19
  },
  inputname: {
    fontSize: 14,
    color: "#5b5b5b",
    fontWeight: 500
  },
  inputContainer: {
    gap: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 15,
    height: 52,
    borderColor: '#E2E2EA',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15


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
    marginRight: 35,

    fontSize: 17,

  },

  noteInputBox: {
    borderWidth: 1,
    borderRadius: 15,
    height: 100,
    borderColor: '#E2E2EA',
  },
  noteInput: {
    marginTop: 6,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 17,
    fontWeight: 50
  },


  Button: {
    height: 55,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2549b6",
    marginTop: 30
  },
  iconSelectText: {
    marginLeft: 10,
    fontSize: 17,
    color: "#5b5b5b",
  },


  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    justifyContent: "flex-end",
  },


  iconPickerContainer: {
    backgroundColor: "#FFFFFF",

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
})