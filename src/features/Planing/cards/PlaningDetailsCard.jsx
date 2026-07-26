import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


import { usePlaning } from "../../../context/PlaningContext";

const PlaningDetailsCard = ({ itemName, itemStartDate, itemEndDate, itemIcon, itemDuration, currentPlan, planId }) => {

    const {
        planing,
        setPlaning,

    } = usePlaning();

    const [editName, setEditName] = useState(false);

    const [editPlanName, setEditPlanName] = useState(
        currentPlan?.planName || ""
    );

    const handleEditPlanName = (planId, newPlanName) => {
        setPlaning((prev) =>
            prev.map(plan => 
                plan.id === planId 
                ? { ...plan, planName:newPlanName} 
                : plan
            )
        )
    }


    return (
        <>
            <View style={styles.container}>
                <View style={styles.planImageContainer}>

                    <View style={styles.planImageContaint}>

                        <View style={styles.cardImageContainer}>
                            <Text style={{ fontSize: 35 }}>{itemIcon}</Text>
                        </View>

                        <View style={styles.planNameContainer}>

                            {!editName ? (
                                <>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: "500",
                                            marginTop: 17,
                                            color: "#fff",
                                        }}
                                    >
                                        {itemName}
                                    </Text>

                                    <Pressable
                                        style={styles.nameEditContainer}
                                        onPress={() => {
                                            //     setEditPlanName(itemName); // আগের নামটা Input-এ দেখাবে
                                            setEditName(true);
                                        }}
                                    >
                                        <AntDesign
                                            name="edit"
                                            size={20}
                                            color="#3166d1"
                                        />
                                    </Pressable>
                                </>
                            ) : (
                                <View style={styles.nameEditTextContain}>
                                    <View style={styles.nameEditTextContainer}>
                                        <TextInput
                                            style={styles.inputText}
                                            value={editPlanName}
                                            autoFocus
                                            maxLength={30}
                                            onChangeText={setEditPlanName}
                                        // autoFocus
                                        />
                                    </View>

                                    <Pressable
                                        style={styles.saveNameButton}
                                        onPress={() => {
                                            if (!editPlanName.trim()) return;
                                            handleEditPlanName(
                                                planId,
                                                editPlanName.trim()
                                            );

                                            setEditName(false);
                                        }}
                                    >
                                        <Feather
                                            name="check"
                                            size={17}
                                            color="#FFFFFF"
                                        />
                                    </Pressable>
                                </View>
                            )}



                        </View>

                        <View style={styles.planDurationContainer}>
                            <View style={styles.planDurationContainer}>
                                <EvilIcons
                                    name="calendar"
                                    size={22}
                                    color="#ffff"
                                />
                                <Text style={styles.planDurationDateText}>
                                    {itemStartDate}
                                </Text>
                                <Entypo
                                    name="dot-single"
                                    size={20}
                                    color="#ffff"
                                />
                                <Text style={styles.planDurationDateText}>{itemEndDate}</Text>
                                <Entypo
                                    name="dot-single"
                                    size={20}
                                    color="#ffff"
                                />
                                <Text style={styles.planDurationDateText}>
                                    {itemDuration} {itemDuration === 1 ? "Day" : "Days"}
                                </Text>
                            </View>

                            <Pressable style={styles.backgroundImageContainer}>
                                <Feather
                                    name="camera"
                                    size={14}
                                    color="#3948e7"
                                />
                                <Text style={{ fontSize: 11, color: "#3948e7", fontWeight: 700 }}>Change Photo</Text>
                            </Pressable>

                        </View>

                    </View>

                </View>
            </View>
        </>
    )
}

export default PlaningDetailsCard

const styles = StyleSheet.create({
    container: {
    },

    planImageContainer: {
        height: 165,
        width: "100%",
        borderRadius: 16,
        marginTop: 25,
        backgroundColor: "#6d8712",
    },

    planImageContaint: {
        marginTop: 13,
        marginLeft: 10,
        gap: 8,
    },

    cardImageContainer: {
        backgroundColor: "#aef9fa",
        height: 56,
        width: 56,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },

    planNameContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    nameEditContainer: {
        marginTop: 20,
        backgroundColor: "#dededd",
        marginLeft: 10,
        height: 27,
        width: 27,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
    },
    nameEditTextContain: {
        flexDirection: "row"
    },

    nameEditTextContainer: {
        width: "70%",
        backgroundColor: "#fff",
        borderRadius: 10,
        height: 38,
        marginTop: 10
    },

    inputText: {
        fontSize: 16,
        fontWeight: 500,
        paddingLeft: 9,
        paddingRight: 9,
    },

    saveNameButton: {
        height: 36,
        width: 36,
        borderRadius: 10,
        backgroundColor: "#6246EA",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 10
    },

    planDurationContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: 6,
    },

    planDurationDateText: {
        fontSize: 10,
        fontWeight: 500,
        color: "#ffff"
    },

    backgroundImageContainer: {
        flexDirection: "row",
        gap: 6,
        backgroundColor: "#fff",
        height: 26,
        width: 110,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    }
})