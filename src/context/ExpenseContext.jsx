import React, { createContext, useContext, useState, } from "react";

// ১. Context তৈরি করা
const ExpenseContext = createContext();

// ২. Provider তৈরি করা
const ExpenseProvider = ({ children }) => {

    // Personal expenses

    const [personalExpenses, setPersonalExpenses] = useState([]);

    const totalPersonalTransactionExpenses = personalExpenses.length;

    const [personalEditItem, setPersonalEditItem] = useState(null)

    const [ispersonalEdit, setPersonalEdit] = useState(false)

    const totalPersonalMoneyExpenses =
        personalExpenses.reduce(
            (accumulator, item) =>
                accumulator + item.amount, 0
        );

    const handaleDeletePersonalExpenses = (id) => {
        setPersonalExpenses(personalExpenses.filter(
            (item) => item.id != id
        ))
    }

    const editPersonalExpenseshandelar = (item) => {
        setPersonalEdit(true);
        setPersonalEditItem(item);

    }

    const updatePersonalExpense = (updatedItem) => {
        setPersonalExpenses((prevExpenses) =>
            prevExpenses.map((item) =>
                item.id === personalEditItem.id
                    ? updatedItem
                    : item
            )
        );
        setPersonalEditItem(null);
    };



    //group expenses

    const [groupExpenses, setGroupExpenses] = useState([]);

    const totalGroupExpenses = groupExpenses.length;

    const addGroupMemberMoney = (groupId, memberId, newAmount) => {

        setGroupExpenses((prevGroup) =>
            prevGroup.map((group) => {
                if (group.id === groupId) {
                    return {
                        ...group,
                        members: group.members.map((member) => {
                            if (member.id === memberId) {
                                return {
                                    ...member,
                                    amount:
                                        Number(member.amount) + Number(newAmount)
                                }
                            }
                            return member;
                        })
                    }
                }
                return group;
            })
        )
    }

    const addNewGroupMember = (groupId, memberName, memberAmount) => {
        const newMember = {
            id: Date.now().toString(),
            name: memberName,
            amount: memberAmount,
        };

        setGroupExpenses((prev) =>
            prev.map((group) => {
                if (group.id === groupId) {
                    return {
                        ...group,
                        members: [
                            ...group.members,
                            newMember

                        ]
                    }
                }

                return group
            })
        )
    }

    const handaleDeleteGroupExpenses = (id) => {
        setGroupExpenses(groupExpenses.filter(
            (item) => item.id != id
        ))
    }

    const handaleDeleteGroupMember = (groupId, memberId) => {
        setGroupExpenses((prev) =>
            prev.map((item) => {
                if (item.id === groupId) {
                    return {
                        ...item,
                        members: item.members.filter(
                            (member) => member.id != memberId
                        )
                    }
                }
                return item;
            })
        )

    }

    const handleEditGroupName = (
        groupId,
        newGroupName
    ) => {

        setGroupExpenses((prevGroups) =>
            prevGroups.map((group) => {
                if (group.id === groupId) {
                    return {
                        ...group,
                        title: newGroupName,
                    };
                }
                return group;
            })
        );
    };

    const allTotalGroupExpensesSum = groupExpenses.reduce(
        (groupTotal , group) => {
            const memberTotal = group.members.reduce(
                (memberTotal, member) => 
                    memberTotal + Number(member.amount || 0) , 0
            )
            return groupTotal + memberTotal;
        },
        0
            
    )


    return (
        <ExpenseContext.Provider
            value={{
                personalExpenses,
                setPersonalExpenses,
                totalPersonalTransactionExpenses,

                totalPersonalMoneyExpenses,
                handaleDeletePersonalExpenses,

                ispersonalEdit,
                setPersonalEdit,

                personalEditItem,
                editPersonalExpenseshandelar,
                updatePersonalExpense,

                // personalEditId,
                // setPersonalEditItem,

                groupExpenses,
                setGroupExpenses,
                totalGroupExpenses,
                addGroupMemberMoney,
                addNewGroupMember,
                handaleDeleteGroupExpenses,
                handaleDeleteGroupMember,
                handleEditGroupName,
                allTotalGroupExpensesSum,
                // totalGroupMoneyExpenses,


                // isgroupEdit,
                // setGroupEdit,

                // groupEditItem,
                // editGroupExpenseshandelar,
                // updateGroupExpense,

            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};

// ৩. Custom Hook
const useExpense = () => {
    return useContext(ExpenseContext);
};

// Export
export {
    ExpenseProvider,
    useExpense,
};