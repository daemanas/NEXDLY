import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';

const PlanremainingCard = ({ totalPersonalMoneyExpenses }) => {
    return (
        <View style={styles.remaniningContainer}>
            <View style={styles.remaniningContaint}>

                <View style={styles.remaniningPlanContainer}>

                    <View style={styles.remaniningPlanContaint}>

                        <View style={styles.remaniningPlanHeader}>
                            <Text style={{ color: "#0c15cf" }}>
                                Today's Focus
                            </Text>
                            <FontAwesome6
                                name="bullseye"
                                size={20}
                                color="#5B42E7"
                            />
                        </View>

                        <View style={styles.remaniningPlan}>
                            <View style={styles.remaniningPlanImage}>
                                <Text>A</Text>
                            </View>

                            <View style={styles.remaniningPlanDetails}>
                                <Text style={{ fontSize: 16, fontWeight: 700 }}>Goa Trip</Text>
                                <Text style={{ fontSize: 12 }}>3 days remanining</Text>
                                <View style={styles.remaniningPlanLink}>
                                    <Text style={{ fontSize: 14.5, color: "#3123fc" }}>Continue Plan➜</Text>
                                </View>

                            </View>
                        </View>


                    </View>
                </View>

                <View style={[styles.remaniningPlanContainer, { width: "44%", }]}>
                    <View style={styles.remaniningExpensesContaint}>

                        <View style={styles.remainingExpensesHeader}>
                            <Text style={{ fontSize: 12, fontWeight: 700, color: "#1dad37" }}>Monthly Summary</Text>
                            <Text style={{ fontSize: 11, fontWeight: 500 }}>Juny</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center " }}>
                            <View style={[styles.remainingExpencePrice, { marginTop: 14, gap: 5 }]}>
                                <Text style={{ fontSize: 14, fontWeight: 500 }}>Total Spent</Text>
                                <Text style={{ fontSize: 18, fontWeight: 700 }}>₹{totalPersonalMoneyExpenses}</Text>
                            </View>

                            <View style={[styles.remaniningIconContainer, { backgroundColor: "#f4ddc4", }]}>
                                <Feather
                                    name="trending-down"
                                    size={24}
                                    color="#ae6845"
                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 8 }}>
                            <Text style={{ color: "#34b020", fontSize: 12 }}>⬇ 12% vs last month</Text>
                        </View>



                    </View>
                </View>


            </View>
        </View>
    )
}

export default PlanremainingCard

const styles = StyleSheet.create({
    remaniningContainer: {
        width: "100%",
        // height: 120,
        marginTop: 15,
    },

    remaniningContaint: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    remaniningPlanContainer: {
        backgroundColor: "#fff",
        width: "54%",
        height: "100%",
        borderRadius: 16,

    },

    remaniningPlanContaint: {
        margin: 10,

    },

    remaniningPlanHeader: {
        flexDirection: "row",
        justifyContent: "space-between",


    },

    remaniningPlan: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },

    remaniningPlanImage: {
        borderRadius: 40,
        backgroundColor: "#25a9d9",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    remaniningPlanDetails: {
        gap: 4,
    },

    remaniningPlanLink: {
        backgroundColor: "#d1daff",
        marginTop: 5,
        height: 28,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },

    remaniningExpensesContaint: {
        margin: 10,
    },

    remainingExpensesHeader: {
        flexDirection: "row",
        justifyContent: "space-between",

    },

    remaniningIconContainer: {
        height: 40,
        width: 43,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 10,
        marginRight: 10
    }
})