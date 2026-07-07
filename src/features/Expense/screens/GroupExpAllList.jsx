import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import GroupExpList from '../components/GroupExpenseListItem'
import SearchFilter from '../components/ExpenseSearchFilter'



const GroupExpAllList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contantContainer}>

                <View style={styles.titleContainer}>
                    <Text style={{ fontSize: 19, fontWeight: 700 }}>
                        All Group Expenses
                    </Text>
                </View>
                <View style={styles.walletContainer}>
                    <View style={styles.moneyWallet}>
                        <View style={styles.walletIcon}>
                            <Entypo
                                name="wallet"
                                size={25}
                                color="rgb(236, 162, 162)"
                            />
                        </View>
                        <View style={styles.walletContant}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: "rgb(62, 61, 61)",
                                    fontWeight: 470
                                }}>
                                Total Expenses
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 800
                                }}>
                                ₹8450.90
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 490,
                                    color: "rgb(36, 73, 195)"
                                }}>
                                This Month
                            </Text>
                        </View>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.transactionWallet}>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "rgb(62, 61, 61)",
                                fontWeight: 470
                            }}>
                            Total Transaction
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 800
                            }}>
                            31
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: 490,
                                color: "rgb(36, 73, 195)"
                            }}>
                            This Month
                        </Text>
                    </View>
                </View>
                <View style={styles.searceContainer}>
                    <SearchFilter />
                </View>
                <View style={styles.expensesTitleContainer}>
                    <View style={styles.rightTitleContainer}>
                        <Text style={styles.titles}>31</Text>
                        <Text style={styles.titles}>Expenses Found</Text>
                    </View>
                    <View style={styles.leftTitleContainer}>
                        <Text style={styles.titles}>Sort</Text>
                        <Text style={styles.titles}>↑↓</Text>
                    </View>
                </View>
                <ScrollView
                    style={styles.itemContainer}
                    showsVerticalScrollIndicator={false}>
                    <GroupExpList />
                </ScrollView>


            </View>
        </View>
    )
}

export default GroupExpAllList


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    contantContainer: {
         flex: 1,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,


    },

    titleContainer: {
        marginTop: 30,
        alignItems: 'center'
    },
    walletContainer: {

        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 14,
        backgroundColor: "#e8e8ff",
        height: 90,
        alignItems: "center",
        marginTop: 25,

    },
    moneyWallet: {
        flexDirection: "row",
        gap: 12,
        marginLeft: 15,


    },
    walletIcon: {
        backgroundColor: "rgb(78, 109, 214)",
        height: 50,
        width: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    walletContant: {
        gap: 2
    },
    divider: {
        width: 1.6,
        height: 60,
        backgroundColor: "#E2E2EA",
        transform: [{ translateX: -7 }]
    },
    transactionWallet: {
        transform: [{ translateX: -34 }]
    },
    itemContainer: {
        flex:1,
        marginTop: 20,
    },
    expensesTitleContainer: {
        marginTop: 19,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rightTitleContainer: {
        flexDirection: "row",
        gap: 6,
        marginLeft: 4,
    },
    leftTitleContainer: {
        flexDirection: "row",
        gap: 6,
        marginRight: 4,
    },
    titles: {
        fontSize: 15,
        fontWeight: 500,
        color: "#47474a"
    }
})