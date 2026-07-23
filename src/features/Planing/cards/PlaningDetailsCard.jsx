import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const PlaningDetailsCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.planImageContainer}>

                <View style={styles.planImageContaint}>

                    <View style={styles.cardImageContainer}>
                        <Text style={{ fontSize: 35 }}>🏝️</Text>
                    </View>

                    <View style={styles.planNameContainer}>
                        <Text style={{ fontSize: 20, fontWeight: 500, marginTop: 17, color: "#fff" }}>Goa Trip</Text>
                    </View>

                    <View>
                        <View style={styles.planDurationContainer}>
                            <EvilIcons
                                name="calendar"
                                size={22}
                                color="#ffff"
                            />
                            <Text style={styles.planDurationDateText}>23 jun 2026</Text>
                            <Entypo
                                name="dot-single"
                                size={20}
                                color="#ffff"
                            />
                            <Text style={styles.planDurationDateText}>25 jun 2026</Text>
                            <Entypo
                                name="dot-single"
                                size={20}
                                color="#ffff"
                            />
                            <Text style={styles.planDurationDateText}>3 Days</Text>

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
        </View>
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
        backgroundColor: "#49561a",
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

    planDurationContainer: {
        flexDirection: "row",
        gap: 1,
        alignItems: "center"
    },

    planDurationDateText: {
        fontSize: 10,
        fontWeight: 500,
        color: "#ffff"
    },

    backgroundImageContainer: {
        flexDirection: "row",
        gap: 6,
        marginLeft: 30,
        backgroundColor: "#fff",
        height: 26,
        width: 110,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    }
})