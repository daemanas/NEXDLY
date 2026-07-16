import { Image, Pressable, ScrollView, StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import walletImage from '../assets/images/wallet.png';

import Personal from './Expense/Personal/PersonalExpense'
import Group from "./Expense/Group/GroupExpense"

const Expansion = () => {
    const [view, serView] = useState(0);


    return (
        <View style={styles.container}>
            <View style={styles.ContaintContainer}>
                <View style={styles.titleContainer}>
                    <View>
                        <Text style={styles.textTitle} >Expansion</Text>
                        <View style={styles.textContentContainer}>
                            <Text style={styles.textContent}>
                                Track, split & manage your
                            </Text>
                            <Text style={styles.textContent}>
                                expenses easily
                            </Text>
                        </View>
                    </View>
                    <View style={styles.walletImages}>
                        <Image
                            source={walletImage}
                            style={styles.walletImage}
                            resizeMode="contain"
                        />
                    </View>
                </View>


                <View style={styles.ItemsContainer}>
                    <View style={styles.ItemCatagory}>
                        <Pressable
                            style={styles.ExpsButton}
                            onPress={() => serView(0)}
                        >
                            <View style={styles.ExpsButtonContainer}>
                                <View style={styles.ExpsButtonIcon}>
                                    <Feather name="user" size={38} color="#573292" />
                                </View>
                                <View>
                                    <Text style={styles.ExpsButtonTitleText}>
                                        Personal
                                    </Text>
                                    <Text style={styles.ExpsButtonTitleText}>
                                        Expense
                                    </Text>
                                    <Text 
                                    style={styles.ExpsButtonTitleTextCom}>
                                        Only my expense
                                    </Text>
                                </View>
                            </View>
                            {view === 0 && (
                                <View style={styles.activeLine} />
                            )}
                        </Pressable>

                        <Pressable
                            style={styles.ExpsButton}
                            onPress={() => serView(1)}

                        >
                            <View style={styles.ExpsButtonContainer}>
                                <View style={styles.ExpsButtonIcon}>
                                    <Feather name="users" size={38} color="rgb(29, 148, 37)" />
                                </View>
                                <View>
                                    <Text style={styles.ExpsButtonTitleText}>
                                        Group
                                    </Text>
                                    <Text style={styles.ExpsButtonTitleText}>
                                        Expense
                                    </Text>
                                    <Text style={styles.ExpsButtonTitleTextCom}>
                                        Split with friend
                                    </Text>
                                </View>
                            </View>
                            {view === 1 && (
                                <View style={styles.activeLine} />
                            )}
                        </Pressable>


                    </View>
                    {view === 0 && <Personal />}
                    {view === 1 && <Group />}
                </View>
            </View>
        </View>
    )
}

export default Expansion

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
    },
    ContaintContainer: {
        flex: 1,
        backgroundColor: "#BCCFEB",
    },
    titleContainer: {
        height: 200,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    textTitle: {
        fontSize: 28,
        marginTop: 70,
        marginLeft: 28,
        fontWeight: "bold",

    },
    textContentContainer: {
        marginTop: 6,
        marginLeft: 28
    },
    textContent: {
        fontSize: 15,
        fontWeight: 500,
    },
    walletImages: {
        transform: [{ translateX: -75 }],
    },
    walletImage: {
        width: 350,
        height: 325,

    },
    ItemsContainer: {
        flex: 1,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    ItemCatagory: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    ExpsButton: {
        height: 110,
        width: 180,
        borderRadius: 20,
        boxShadow: '1px 4px 16px 7px rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,

    },
    activeLine: {
        position: 'absolute',
        bottom: 0,
        left: 14,
        right: 14,
        height: 4,
        backgroundColor: '#6246EA',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    ExpsButtonContainer: {
        marginLeft: 2,
        marginTop: 15,
        flexDirection: 'row',
    },
    ExpsButtonTitleText: {
        fontSize: 18,
        marginLeft: 16,
        fontWeight: 'bold',
    },
    ExpsButtonIcon: {
        marginTop: 2,
        marginLeft: 8,
        borderRadius: 19,
        backgroundColor: "#b0a8b9",
        height: 60,
        width: 57,
        justifyContent: "center",
        alignItems: "center"


    },
    ExpsButtonTitleTextCom: {
        marginLeft: 16,
        fontSize: 12,
        marginTop: 6,
    },
})