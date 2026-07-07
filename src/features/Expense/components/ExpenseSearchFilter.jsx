import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import React, { useState } from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

const ExpenseSearchFilter = () => {
    const [month, setMonth] = useState('This Month');
    const [showMonth, setShowMonth] = useState(false);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>

                <View style={styles.searchContainer}>
                    <Fontisto
                        name="search"
                        size={19}
                        color="rgb(88, 84, 84)"
                    />

                    <TextInput
                        placeholder="Search expenses..."
                        style={styles.searchBox}
                    />
                </View>


                <Pressable
                    style={styles.monthContainer}
                    onPress={() => setShowMonth(!showMonth)}
                >
                    <Text style={styles.monthText}>
                        {month}
                    </Text>

                    <Feather
                        name="chevron-down"
                        size={18}
                        color="#555"
                    />
                </Pressable>

            </View>


            {showMonth && (
                <View style={styles.monthDropdown}>

                    <Pressable
                        onPress={() => {
                            setMonth('This Month');
                            setShowMonth(false);
                        }}
                    >
                        <Text style={styles.monthOption}>
                            This Month
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            setMonth('Last Month');
                            setShowMonth(false);
                        }}
                    >
                        <Text style={styles.monthOption}>
                            Last Month
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            setMonth('All');
                            setShowMonth(false);
                        }}
                    >
                        <Text style={styles.monthOption}>
                            All
                        </Text>
                    </Pressable>

                </View>
            )}

        </View>
    );
};

export default ExpenseSearchFilter;
const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
    },

    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    },

    searchContainer: {
        width: '64%',
        height: 52,

        borderWidth: 1,
        borderColor: '#E2E2EA',
        borderRadius: 13,

        flexDirection: 'row',
        alignItems: 'center',

        paddingHorizontal: 15,
    },

    searchBox: {
        flex: 1,
        marginLeft: 8,
        fontSize: 15,
    },

    monthContainer: {
        width: '32%',
        height: 52,

        borderWidth: 1,
        borderColor: '#E2E2EA',
        borderRadius: 13,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 12,
    },

    monthText: {
        fontSize: 14,
        fontWeight: '500',
    },

    monthDropdown: {
        position: 'absolute',
        top: 82,
        right: 0,

        width: '32%',

        backgroundColor: '#FFFFFF',
        borderRadius: 10,

        paddingVertical: 6,

        elevation: 5,

        zIndex: 10,
    },

    monthOption: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
    },
});