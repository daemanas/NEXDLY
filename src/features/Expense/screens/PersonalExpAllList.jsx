import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import PersonalExpList from '../components/PersonalExpenseListItem'

const PersonalExpAllList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contantContainer}>

                <View style={styles.titleContainer}>
                    <Text style={{ fontSize: 19, fontWeight: 700 }}>
                        All Expenses
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
                    {/* <PersonalExpList /> */}
                </View>
                <View style={styles.itemContainer}>
                    <PersonalExpList />
                </View>


            </View>
        </View>
    )
}

export default PersonalExpAllList


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    contantContainer: {
        // backgroundColor:"pink",
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
    itemContainer:{
        marginTop:30,
    }
})