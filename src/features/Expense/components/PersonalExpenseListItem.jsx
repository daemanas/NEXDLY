import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import personalExpenseData from '../data/PersonalExpStore';

const PersonalExpList = ({ limit }) => {
    const expensesData = limit
        ? personalExpenseData.slice(0, limit)
        : personalExpenseData
    return (
        <View style={styles.container}>
            {expensesData.map((item) => (
                <View
                    style={styles.ItemList}
                    key={item.id}
                >
                    <View style={styles.item}>
                        <View style={styles.itemNameContainer}>
                            <View style={styles.itemIconContainer}>
                                <Text style={styles.itemIcon}>🍔</Text>
                            </View>

                            <View style={styles.itemName}>
                                <Text style={{ fontSize: 16, fontWeight: 700 }} >Lunch</Text>
                                <Text style={{ color: "#656164" }}>Today,1:20PM</Text>
                            </View>
                        </View>
                        <View style={styles.itemMoneyContainer}>
                            <Text style={{ fontSize: 16, fontWeight: 700, color: "#e02b34" }}>₹180.00</Text>
                            <Text style={{ fontSize: 15, }}>🏦</Text>
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
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        justifyContent: "center",
        marginBottom: 12,

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
    }
})