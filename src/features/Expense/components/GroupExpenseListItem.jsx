import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React from 'react'
import { useExpense } from "../../../context/ExpenseContext";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'

const formatMoney = (amount) => {
    const money = Number(amount);
    if (money >= 10000000) {
        return `₹${(money / 10000000).toFixed(1)}Cr`;
    }
    if (money >= 100000) {
        return `₹${(money / 100000).toFixed(1)}L`;
    }
    if (money >= 1000) {
        return `₹${(money / 1000).toFixed(1)}K`;
    }
    return `₹${money}`;
};

const formatName = (name) => {
    if (!name) return "";

    if (name.length <= 7) {
        return name;
    }

    return `${name.slice(0, 3)}...${name.slice(-3)}`;
};

const GroupExpList = ({ limit }) => {
    const navigation = useNavigation();

    const {
        groupExpenses,
        handaleDeleteGroupExpenses,
        // editGroupExpenseshandelar
    } = useExpense();

    const confirmDeleteGroup = (groupId) => {
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
                        handaleDeleteGroupExpenses(groupId);
                    },
                },
            ]
        );
    };



    const expensesData = limit
        ? groupExpenses.slice(0, limit)
        : groupExpenses
    return (
        <View style={styles.container}>
            {expensesData.map((item) => {

                const totalGroupMoneyExpenses =
                    item.members.reduce(
                        (accu, member) =>
                            accu + Number(member.amount),
                        0
                    );
                return (
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
                                    <Text style={{ fontSize: 16, fontWeight: 700 }} >{formatName(item.title)}</Text>
                                    <Text style={{ color: "#656164" }}>{item.date.toLocaleDateString("en-GB")}</Text>
                                </View>
                            </View>

                            <View style={styles.itemMoneyContainer}>
                                <Text style={{ fontSize: 16, fontWeight: 700, color: "#e02b34" }}>
                                    {formatMoney(totalGroupMoneyExpenses)}
                                </Text>
                                <Text style={{ fontSize: 15, }}>🏦</Text>
                            </View>

                            <View style={styles.itemButtonContainer}>
                                <Pressable
                                    key={item.id}
                                    style={styles.ButtonContainer}
                                    onPress={() => {
                                        navigation.navigate("GroupSummer", {
                                            groupId: item.id,
                                        })
                                    }}
                                >
                                    <AntDesign
                                        name="eye"
                                        size={20}
                                        color="rgb(88, 67, 222)"
                                    />
                                </Pressable>
                                <Pressable
                                    style={styles.ButtonContainer}
                                onPress={() => confirmDeleteGroup(item.id)}
                                >
                                    <Feather
                                        name="delete"
                                        size={20}
                                        color="#DC2626"
                                    />
                                </Pressable>

                            </View>
                        </View>

                    </View>
                )
            })}
        </View >
    )
}

export default GroupExpList

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    ItemList: {
        height: 78,
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
        // alignItems: "center",
        // width: "100%",

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
        gap: 8
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
        // marginRight:30,
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