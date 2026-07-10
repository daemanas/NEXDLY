import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import React, { useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

import {
    useNavigation,
    useRoute,
} from "@react-navigation/native";

import { useExpense } from "../../../context/ExpenseContext";

const GroupSummary = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { groupId } = route.params || {};

    const {
        groupExpenses,
        addGroupMemberMoney,
        addNewGroupMember
    } = useExpense();


    const [
        activeMoneyMemberId,
        setActiveMoneyMemberId,
    ] = useState(null);


    const [
        addMoneyAmount,
        setAddMoneyAmount,
    ] = useState("");

    const [
        activeNewMember,
        setActiveNewMember,
    ] = useState(false)

    const [addNewMember, setAddNewMember,] = useState({
        name: "",
        amount: "",
    })

    // FIND CURRENT GROUP
    const currentGroup = groupExpenses.find(
        (item) => item.id === groupId
    );

    // GROUP NOT FOUND
    if (!currentGroup) {

        return (

            <View style={styles.errorContainer}>

                <Ionicons
                    name="alert-circle-outline"
                    size={55}
                    color="#6246EA"
                />

                <Text style={styles.errorTitle}>
                    Group Not Found
                </Text>

                <Text style={styles.errorText}>
                    This group is no longer available.
                </Text>

                <Pressable
                    style={styles.errorButton}
                    onPress={() => navigation.goBack()}
                >

                    <Text style={styles.errorButtonText}>
                        Go Back
                    </Text>

                </Pressable>

            </View>
        );
    }


    // MEMBERS

    const members = currentGroup.members || [];

    // TOTAL MONEY
    const totalMoney = members.reduce(
        (total, member) =>
            total + Number(member.amount || 0),
        0
    );

    // PER PERSON SHARE
    const perPersonShare =
        members.length > 0
            ? totalMoney / members.length
            : 0;

    // MEMBERS WITH BALANCE
    const membersWithBalance = members.map(
        (member) => ({
            ...member,
            balance:
                Number(member.amount || 0)
                - perPersonShare,
        })
    );

    // OPEN / CLOSE ADD MONEY INPUT
    const handleAddMoneyInput = (memberId) => {

        if (activeMoneyMemberId === memberId) {
            setActiveMoneyMemberId(null);
        } else {
            setActiveMoneyMemberId(memberId);
        }

        setAddMoneyAmount("");
    };

    // SAVE MEMBER MONEY
    const handleSaveMoney = (memberId) => {
        const amount = Number(addMoneyAmount);
        if (!addMoneyAmount.trim()) {
            Alert.alert(
                "Amount Required",
                "Please enter an amount."
            );
            return;
        }

        addGroupMemberMoney(
            groupId,
            memberId,
            amount
        );

        setAddMoneyAmount("");
        setActiveMoneyMemberId(null)
    };

    const hendelAddMember = () => {
        setActiveNewMember(true);
    }

    const handleNewMemberChange = (key, value) => {
        setAddNewMember((prev) => ({
            ...prev,
            [key]: value,
        }))

    }

    const handelSaveMember = () => {
        if (!addNewMember.name.trim()) {
            Alert.alert(
                "Member Name Required",
                "Please enter member name."
            );
            return;
        }
        const amount = Number(addNewMember.amount);

        if (
            addNewMember.amount &&
            (Number.isNaN(amount) || amount < 0)
        )
            return;

        addNewGroupMember(
            groupId,
            addNewMember.name,
            amount || 0

        )

        setAddNewMember({
            name: "",
            amount: "",
        })

        setActiveNewMember(false);



    }

    // FORMAT DATE
    const formattedDate = currentGroup.date
        ? new Date(currentGroup.date).toLocaleDateString(
            "en-GB"
        )
        : "No date";


    return (
        <KeyboardAvoidingView

            style={styles.container}
            behavior={
                Platform.OS === "ios"
                    ? "padding"
                    : undefined
            }
        >

            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.scrollContent}
            >
                {/* HEADER */}
                <View style={styles.header}>

                    <Pressable
                        style={styles.headerButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="chevron-back"
                            size={27}
                            color="#31258F"
                        />
                    </Pressable>

                    <Text style={styles.headerTitle}>
                        Group Summary
                    </Text>

                    <Pressable style={styles.headerButton}>

                        <Entypo
                            name="dots-three-vertical"
                            size={20}
                            color="#31258F"
                        />
                    </Pressable>
                </View>

                {/* GROUP INFORMATION */}
                <View style={styles.groupCard}>
                    <View style={styles.groupInfo}>

                        <View style={styles.groupIconContainer}>

                            <Text style={styles.groupIcon}>
                                {currentGroup.icon || "👥"}
                            </Text>

                        </View>

                        <View style={styles.groupDetails}>

                            <View style={styles.groupTitleContainer}>

                                <Text
                                    style={styles.groupName}
                                    numberOfLines={1}
                                >
                                    {currentGroup.title}
                                </Text>

                                <Pressable style={styles.editButton}>
                                    <Feather
                                        name="edit-2"
                                        size={14}
                                        color="#6246EA"
                                    />

                                    <Text style={styles.editText}>
                                        Edit
                                    </Text>

                                </Pressable>
                            </View>

                            <View style={styles.groupSubInfo}>

                                <Ionicons
                                    name="calendar-outline"
                                    size={17}
                                    color="#77738F"
                                />

                                <Text style={styles.groupSubText}>
                                    {formattedDate}
                                </Text>

                            </View>

                            <View style={styles.groupSubInfo}>
                                <Ionicons
                                    name="people-outline"
                                    size={18}
                                    color="#77738F"
                                />

                                <Text style={styles.groupSubText}>
                                    {members.length} Members
                                </Text>

                            </View>
                        </View>
                    </View>
                </View>

                {/* SUMMARY */}
                <View style={styles.summaryContainer}>

                    <View style={styles.summaryItem}>

                        <Text style={styles.summaryLabel}>
                            Total Money
                        </Text>

                        <Text style={styles.totalMoney}>
                            ₹{totalMoney.toFixed(2)}
                        </Text>

                        <Text style={styles.summarySubText}>
                            Total contributed
                        </Text>

                    </View>

                    <View style={styles.summaryDivider} />

                    <View style={styles.summaryItem}>

                        <Text style={styles.summaryLabel}>
                            Per Person Share
                        </Text>

                        <Text style={styles.perPersonMoney}>
                            ₹{perPersonShare.toFixed(2)}
                        </Text>

                        <Text style={styles.summarySubText}>
                            Each person should pay
                        </Text>

                    </View>

                </View>

                {/* MEMBER TITLE */}
                <View style={styles.memberTitleContainer}>

                    <Text style={styles.memberTitle}>
                        Members ({members.length})
                    </Text>

                </View>

                {/* MEMBER LIST */}
                <View style={styles.memberList}>
                    {membersWithBalance.map(
                        (member, index) => (
                            <View
                                key={member.id}
                                style={[
                                    styles.memberContainer,
                                    index ===
                                    membersWithBalance.length - 1
                                    && styles.lastMemberContainer,
                                ]}
                            >
                                {/* MEMBER ROW */}
                                <View style={styles.memberItem}>

                                    <View style={styles.memberLeft}>
                                        <View style={styles.memberAvatar}>
                                            <Ionicons
                                                name="person"
                                                size={29}
                                                color="#1686DB"
                                            />
                                        </View>

                                        <View style={styles.memberInfo}>

                                            <Text
                                                style={styles.memberName}
                                                numberOfLines={1}
                                            >
                                                {member.name}
                                            </Text>

                                            <Text style={styles.memberPaid}>
                                                Paid ₹{Number(
                                                    member.amount || 0
                                                ).toFixed(2)}
                                            </Text>

                                        </View>
                                    </View>

                                    <View style={styles.memberActions}>
                                        <Pressable
                                            style={[
                                                styles.addMoneyButton,
                                                activeMoneyMemberId ===
                                                member.id
                                                && styles.activeAddMoneyButton,
                                            ]}
                                            onPress={() =>
                                                handleAddMoneyInput(
                                                    member.id
                                                )
                                            }
                                        >
                                            <Text

                                                style={[
                                                    styles.addMoneyText,
                                                    activeMoneyMemberId ===
                                                    member.id
                                                    && styles.activeAddMoneyText,
                                                ]}
                                            >
                                                {activeMoneyMemberId ===
                                                    member.id
                                                    ? "Cancel"
                                                    : "Add Money"}
                                            </Text>

                                            <Ionicons

                                                name={
                                                    activeMoneyMemberId ===
                                                        member.id
                                                        ? "close-circle-outline"
                                                        : "add-circle-outline"
                                                }
                                                size={17}
                                                color={
                                                    activeMoneyMemberId ===
                                                        member.id
                                                        ? "#FFFFFF"
                                                        : "#6246EA"
                                                }
                                            />
                                        </Pressable>

                                        <Pressable style={styles.memberMenu}>
                                            <Entypo
                                                name="dots-three-vertical"
                                                size={18}
                                                color="#31258F"
                                            />
                                        </Pressable>
                                    </View>
                                </View>

                                {/* INLINE ADD MONEY INPUT */}
                                {activeMoneyMemberId === member.id && (
                                    <View style={styles.addMoneySection}>

                                        <Text style={styles.addMoneyLabel}>
                                            Add money for {member.name}
                                        </Text>

                                        <View style={styles.addMoneyInputContainer}>
                                            <View style={styles.moneyInputBox}>

                                                <Text style={styles.rupeeText}>
                                                    ₹
                                                </Text>

                                                <TextInput
                                                    placeholder="Enter amount"
                                                    placeholderTextColor="#A09DAE"
                                                    keyboardType="decimal-pad"
                                                    value={addMoneyAmount}
                                                    onChangeText={setAddMoneyAmount}
                                                    style={styles.moneyInput}
                                                    autoFocus
                                                />
                                            </View>
                                            <Pressable
                                                style={styles.saveMoneyButton}
                                                onPress={() =>
                                                    handleSaveMoney(
                                                        member.id
                                                    )
                                                }
                                            >

                                                <Ionicons
                                                    name="checkmark"
                                                    size={19}
                                                    color="#FFFFFF"
                                                />

                                                <Text style={styles.saveMoneyText}>
                                                    Save
                                                </Text>

                                            </Pressable>
                                        </View>
                                    </View>
                                )}

                            </View>
                        )
                    )}

                </View>

                {activeNewMember && (
                    <View style={styles.addMoneySection}>

                        <Text style={styles.addMoneyLabel}>
                            Add money for
                        </Text>

                        <View style={styles.addMoneyInputContainer}>
                            <View style={styles.moneyInputBox}>

                                <View style={styles.smallAvatar}>
                                    <Ionicons
                                        name="person"
                                        size={17}
                                        color="#1686DB"
                                    />
                                </View>

                                <TextInput
                                    placeholder="Name..."
                                    placeholderTextColor="#A09DAE"
                                    keyboardType="decimal-pad"
                                    value={addNewMember.name}
                                    onChangeText={(value) =>
                                        handleNewMemberChange("name", value)
                                    }
                                    style={styles.moneyInput}
                                    autoFocus
                                />
                            </View>

                            <View style={styles.moneyInputBox}>

                                <Text style={styles.rupeeText}>
                                    ₹
                                </Text>

                                <TextInput
                                    placeholder="Amount..."
                                    placeholderTextColor="#A09DAE"
                                    keyboardType="decimal-pad"
                                    value={addNewMember.amount}
                                    onChangeText={(value) =>
                                        handleNewMemberChange("amount", value)
                                    }
                                    style={styles.moneyInput}
                                    autoFocus
                                />
                            </View>

                            <Pressable
                                style={styles.saveMoneyButton}
                                onPress={() =>
                                    handelSaveMember()
                                }
                            >
                                <Ionicons
                                    name="checkmark"
                                    size={19}
                                    color="#FFFFFF"
                                />

                                <Text style={styles.saveMoneyText}>
                                    Save
                                </Text>

                            </Pressable>
                        </View>
                    </View>
                )}

                {/* ADD MEMBER */}
                <Pressable
                    style={styles.addNewMemberButton}
                    onPress={() => hendelAddMember()}
                >

                    <Ionicons
                        name="person-add-outline"
                        size={23}
                        color="#6246EA"
                    />

                    <Text style={styles.addNewMemberText}>
                        Add New Member
                    </Text>
                </Pressable>







                {/* BALANCE SECTION */}
                <View style={styles.settlementContainer}>
                    <Text style={styles.settlementTitle}>
                        BALANCE SUMMARY
                    </Text>
                    {membersWithBalance.map((member) => (

                        <View
                            key={member.id}
                            style={styles.settlementItem}
                        >
                            <View style={styles.settlementLeft}>

                                <View style={styles.smallAvatar}>

                                    <Ionicons
                                        name="person"
                                        size={19}
                                        color="#1686DB"
                                    />
                                </View>
                                <View>
                                    <Text style={styles.settlementText}>
                                        {member.name}
                                    </Text>
                                    <Text style={styles.balanceStatus}>
                                        {member.balance > 0
                                            ? "Will receive"
                                            : member.balance < 0
                                                ? "Needs to pay"
                                                : "Settled"}
                                    </Text>
                                </View>
                            </View>

                            <Text
                                style={[
                                    styles.memberBalance,
                                    member.balance > 0
                                    && styles.receiveBalance,
                                    member.balance < 0
                                    && styles.payBalance,
                                    member.balance === 0
                                    && styles.settledBalance,
                                ]}
                            >
                                {member.balance > 0
                                    ? `+ ₹${member.balance.toFixed(2)}`
                                    : member.balance < 0
                                        ? `- ₹${Math.abs(
                                            member.balance
                                        ).toFixed(2)}`
                                        : "₹0.00"}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
};


export default GroupSummary;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F7F7FC",
    },

    scrollContent: {
        paddingTop: 28,
        paddingHorizontal: 8,
        paddingBottom: 120,
    },

    header: {
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerButton: {
        height: 42,
        width: 42,
        justifyContent: "center",
        alignItems: "center",
    },

    headerTitle: {
        fontSize: 21,
        fontWeight: "700",
        color: "#171522",
    },

    groupCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        padding: 18,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 6,
    },

    groupInfo: {
        flexDirection: "row",
        alignItems: "center",
    },

    groupIconContainer: {
        height: 65,
        width: 65,
        borderRadius: 33,
        backgroundColor: "#E7F3FF",
        justifyContent: "center",
        alignItems: "center",
    },

    groupIcon: {
        fontSize: 35,
    },

    groupDetails: {
        flex: 1,
        marginLeft: 14,
        gap: 5,
    },

    groupTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    groupName: {
        maxWidth: "65%",
        fontSize: 20,
        fontWeight: "700",
        color: "#181622",
    },

    editButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        backgroundColor: "#F1ECFF",
        paddingHorizontal: 9,
        paddingVertical: 5,
        borderRadius: 7,
    },

    editText: {
        color: "#6246EA",
        fontWeight: "600",
    },

    groupSubInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    groupSubText: {
        fontSize: 14,
        color: "#77738F",
    },

    summaryContainer: {
        marginTop: 18,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        flexDirection: "row",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 6,
    },

    summaryItem: {
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 20,
    },

    summaryDivider: {
        width: 1,
        backgroundColor: "#E5E5EE",
    },

    summaryLabel: {
        fontSize: 13,
        color: "#68647A",
    },

    totalMoney: {
        marginTop: 8,
        fontSize: 22,
        fontWeight: "700",
        color: "#6246EA",
    },

    perPersonMoney: {
        marginTop: 8,
        fontSize: 22,
        fontWeight: "700",
        color: "#2876E8",
    },

    summarySubText: {
        marginTop: 5,
        fontSize: 11,
        color: "#77738F",
    },

    memberTitleContainer: {
        marginTop: 25,
    },

    memberTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#171522",
    },

    memberList: {
        marginTop: 12,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        overflow: "hidden",
    },

    memberContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEF4",
    },

    lastMemberContainer: {
        borderBottomWidth: 0,
    },

    memberItem: {
        minHeight: 82,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
    },

    memberLeft: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    memberAvatar: {
        height: 48,
        width: 48,
        borderRadius: 24,
        backgroundColor: "#F0EDFF",
        justifyContent: "center",
        alignItems: "center",
    },

    memberInfo: {
        flex: 1,
        marginLeft: 10,
    },

    memberName: {
        fontSize: 15,
        fontWeight: "700",
        color: "#191725",
    },

    memberPaid: {
        marginTop: 4,
        fontSize: 13,
        color: "#77738F",
    },


    memberActions: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    addMoneyButton: {
        height: 38,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#6246EA",
        borderRadius: 9,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },

    activeAddMoneyButton: {
        backgroundColor: "#6246EA",
    },

    addMoneyText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#6246EA",
    },

    activeAddMoneyText: {
        color: "#FFFFFF",
    },

    memberMenu: {
        padding: 6,
    },

    addMoneySection: {
        paddingHorizontal: 14,
        paddingBottom: 16,
    },

    addMoneyLabel: {
        marginBottom: 8,
        fontSize: 12,
        fontWeight: "500",
        color: "#77738F",

    },

    addMoneyInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    moneyInputBox: {
        flex: 1,
        height: 46,
        borderWidth: 1,
        borderColor: "#D8D4FF",
        borderRadius: 11,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 13,
        backgroundColor: "#F9F8FF",

    },


    rupeeText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#6246EA",
        marginRight: 7,
    },

    moneyInput: {
        flex: 1,
        fontSize: 16,
        color: "#252333",
        paddingVertical: 0,
    },

    saveMoneyButton: {
        height: 46,
        paddingHorizontal: 14,
        backgroundColor: "#6246EA",
        borderRadius: 11,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },

    saveMoneyText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#FFFFFF",
    },

    addNewMemberButton: {
        marginTop: 15,
        height: 60,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "#9C8CF4",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 9,
    },

    addNewMemberText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#6246EA",
    },

    settlementContainer: {
        marginTop: 18,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        padding: 16,
    },

    settlementTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#171522",
        marginBottom: 12,
    },

    settlementItem: {
        minHeight: 62,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEF4",
    },

    settlementLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    smallAvatar: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: "#F0EDFF",
        justifyContent: "center",
        alignItems: "center",
    },

    settlementText: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: "600",
        color: "#343142",
    },

    balanceStatus: {
        marginLeft: 10,
        marginTop: 3,
        fontSize: 11,
        color: "#77738F",
    },

    memberBalance: {
        fontSize: 15,
        fontWeight: "700",
    },

    receiveBalance: {
        color: "#07966F",
    },

    payBalance: {
        color: "#E94343",
    },

    settledBalance: {
        color: "#07966F",
    },

    floatingButton: {
        position: "absolute",
        right: 20,
        bottom: 25,
        height: 58,
        paddingHorizontal: 20,
        borderRadius: 29,
        backgroundColor: "#6246EA",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },

    floatingButtonText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "600",
    },

    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7F7FC",
        paddingHorizontal: 25,
    },

    errorTitle: {
        marginTop: 15,
        fontSize: 22,
        fontWeight: "700",
        color: "#171522",
    },

    errorText: {
        marginTop: 7,
        fontSize: 14,
        color: "#77738F",
    },

    errorButton: {
        marginTop: 20,
        backgroundColor: "#6246EA",
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 10,
    },

    errorButtonText: {
        color: "#FFFFFF",
        fontWeight: "600",
    },

});