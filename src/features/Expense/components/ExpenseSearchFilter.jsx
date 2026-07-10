import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
} from 'react-native';

import React, { useState } from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

const months = [
    { id: 0, name: "Jan" },
    { id: 1, name: "Feb" },
    { id: 2, name: "Mar" },
    { id: 3, name: "Apr" },
    { id: 4, name: "May" },
    { id: 5, name: "Jun" },
    { id: 6, name: "Jul" },
    { id: 7, name: "Aug" },
    { id: 8, name: "Sep" },
    { id: 9, name: "Oct" },
    { id: 10, name: "Nov" },
    { id: 11, name: "Dec" },
];

const ExpenseSearchFilter = () => {
    const [month, setMonth] = useState('This Month');
    const [showMonth, setShowMonth] = useState(false);
    const [searchText, setSearchText] = useState("");

    const [selectedMonth, setSelectedMonth] = useState(
        new Date().getMonth()
    );

    return (
        <View style={styles.mainContainer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.monthContainer}
            >
                {months.map((month) => (
                    <Pressable
                        key={month.id}
                        style={[
                            styles.monthButton,
                            selectedMonth === month.id &&
                            styles.activeMonthButton
                        ]}
                        onPress={() =>
                            setSelectedMonth(month.id)
                        }
                    >
                        <Text
                            style={[
                                styles.monthText,

                                selectedMonth === month.id &&
                                styles.activeMonthText
                            ]}
                        >
                            {month.name}
                        </Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};

export default ExpenseSearchFilter;
const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
    },

    monthContainer: {
        gap: 9,
        paddingVertical: 10,
    },

    monthButton: {
        height: 40,
        minWidth: 58,
        paddingHorizontal: 14,
        borderRadius: 12,
        backgroundColor: "#F2F1F7",
        justifyContent: "center",
        alignItems: "center",
    },

    activeMonthButton: {
        backgroundColor: "#6246EA",
    },

    monthText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#77738F",
    },

    activeMonthText: {
        color: "#FFFFFF",
    },
});