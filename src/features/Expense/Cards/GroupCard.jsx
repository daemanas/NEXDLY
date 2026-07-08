import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useExpense } from '../../../context/ExpenseContext'

const GroupCard = () => {
    const { totalGroupTransactionExpenses,totalGroupMoneyExpenses } = useExpense()
    return (
        <View style={styles.Container}>
            <View style={styles.cardContainer}>
                <View style={styles.moneyContainer}>
                    <View style={styles.moneyContainerContent}>
                        <View style={styles.moneyContainerContentMoney}>
                            <Text style={{ color: "#ffff" }}> Total Spent </Text>
                            <Text style={{ color: "#ffff", fontSize: 22, fontWeight: 500 }}> ₹{ totalGroupMoneyExpenses } </Text>
                            <Text style={{ color: "#ffff" }}> This Month </Text>
                        </View>
                        <View style={styles.percentageSection}>
                            <View style={styles.percentageBox}>
                                <Text style={styles.arrow}>↓</Text>
                                <Text style={styles.percentageText}>12.5%</Text>
                            </View>
                            <Text style={styles.lastMonthText}>vs last month</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.FoodContainer}>
                    
                    <View style={styles.FoodContainerbox}>
                        <View style={styles.FoodContainerboxChi} >
                            <Text style={styles.FoodContainerboxTitle}>
                                Transactions
                            </Text>
                            <Text style={styles.FoodContainerboxContent}>
                               {totalGroupTransactionExpenses}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.FoodContainerbox}>
                        <View style={styles.FoodContainerboxChi} >
                            <Text style={styles.FoodContainerboxTitle}>
                                Top Category
                            </Text>
                            <Text style={styles.FoodContainerboxContent}>
                                🍔 Food
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GroupCard

const styles = StyleSheet.create({
    Container: {
        width: "100%",
        alignItems: "center"
    },
    cardContainer: {
        // borderWidth: 1,
        height: 180,
        width: "100%",
        borderRadius: 19,
        overflow: 'hidden',
    },
    moneyContainer: {
        width: "100%",
        height: "60%",
        backgroundColor: "#4a5fed",
    },
    moneyContainerContent: {
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 20
    },
    moneyContainerContentMoney: {
        marginLeft: -10,
        gap: 5
    },
    percentageSection: {
        alignItems: "flex-end",
        gap: 9,
        marginTop: 10,
    },
    percentageBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8
    },
    arrow: {
        color: "#62E6A7",
        fontSize: 20,
        fontWeight: "900",
        marginRight: 6,
    },
    percentageText: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "500",
    },
    lastMonthText: {
        color: "#ffff",
        fontSize: 14,
        // marginTop: ,
    },
    FoodContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F7F7FF",
    },
    FoodContainerbox: {
        height: 73,
        flex: 1,
        borderRadius: 14,
        backgroundColor: "#F7F7FF",
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,

        elevation: 10,

    },
    FoodContainerboxChi: {
        marginTop: 15,
        marginLeft: 23
    },
    FoodContainerboxTitle: {
        fontSize: 14,
        color: "#696A78",
        fontWeight: "500",
    },
    FoodContainerboxContent: {
        fontSize: 16,
        color: "#17171C",
        fontWeight: "700",
        marginTop: 6,
    }
})