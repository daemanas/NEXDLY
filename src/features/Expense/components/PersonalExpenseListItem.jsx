import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { useExpense } from "../../../context/ExpenseContext";
import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native'

const PersonalExpList = ({ limit, }) => {
    const navigation = useNavigation();
    const {
        personalExpenses,
        handaleDeletePersonalExpenses,
        editPersonalExpenseshandelar
    } = useExpense();

    const confirmDeletePersonal = (presonalId) => {
        Alert.alert(
            "Delete Group?",
            "Are you sure you want to delete this group? This action cannot be undone.",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        handaleDeletePersonalExpenses(presonalId);
                    },
                },
            ]
        );
    };

    const expensesData = limit
        ? personalExpenses.slice(0, limit)
        : personalExpenses
    return (
        <View style={styles.container}>
            {expensesData.map((item) => (
                <View
                    style={styles.ItemList}
                    key={item.id}
                >
                    <View style={styles.item}>
                        <View style={styles.itemNameContainer}>
                            <View style={[styles.itemIconContainer, { backgroundColor: item.iconBg }]}>
                                <Text style={styles.itemIcon}>{item.icon}</Text>
                            </View>

                            <View style={styles.itemName}>
                                <Text style={{ fontSize: 16, fontWeight: 700 }} >{item.title}</Text>
                                <Text style={{ color: "#656164" }}>{item.date.toLocaleDateString("en-GB")}, {item.time}</Text>
                            </View>
                        </View>

                        <View style={styles.itemMoneyContainer}>
                            <Text style={{ fontSize: 16, fontWeight: 700, color: "#e02b34" }}>₹{item.amount}</Text>
                            <Text style={{ fontSize: 15, }}>🏦</Text>
                        </View>

                        <View style={styles.itemButtonContainer}>
                            <Pressable
                                style={styles.ButtonContainer}
                                onPress={() => {
                                    editPersonalExpenseshandelar(item)
                                    navigation.navigate("AddPersonalExpenses");
                                }}
                            >
                                <Feather
                                    name="edit-2"
                                    size={20}
                                    color="rgb(88, 67, 222)"
                                />
                            </Pressable>
                            <Pressable
                                style={styles.ButtonContainer}
                                onPress={() =>
                                    confirmDeletePersonal(item.id)}
                            >
                                <Feather
                                    name="delete"
                                    size={20}
                                    color="rgb(88, 67, 222)"
                                />
                            </Pressable>

                        </View>
                    </View>

                </View>
            ))}



        </View>
    )
}

export default PersonalExpList

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    ItemList: {
        height: 72,
        backgroundColor: "#fcfcfc",
        borderRadius: 14,
        justifyContent: "center",
        marginBottom: 2,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 4,

        elevation: 2,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    itemNameContainer: {
        flexDirection: "row",
        gap: 8,
        marginLeft: 20

    },
    itemIconContainer: {
        height: 43,
        width: 43,
        backgroundColor: "#FFE8D6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    itemIcon: {
        fontSize: 25,
    },
    itemName: {
        marginLeft: 3,
        gap: 1
    },
    itemMoneyContainer: {
        marginRight: 10,
        alignItems: "flex-end",
        gap: 4
    },
    itemButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        gap: 5,
        paddingRight: 10
    },
    ButtonContainer: {
        height: "100%",
        width: 44,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e3e2e2"
    }

})