import React, { createContext, useContext, useState } from "react";

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

    const totalGroupTransactionExpenses = groupExpenses.length;

    const [groupEditItem, setGroupEditItem] = useState(null)

    const [isgroupEdit, setGroupEdit] = useState(false)

    const totalGroupMoneyExpenses =
        groupExpenses.reduce(
            (accumulator, item) =>
                accumulator + item.amount, 0
        );

    const handaleDeleteGroupExpenses = (id) => {
        setGroupExpenses(groupExpenses.filter(
            (item) => item.id != id
        ))
    }

    const editGroupExpenseshandelar = (item) => {
        setGroupEdit(true);
        setGroupEditItem(item);

    }

    const updateGroupExpense = (updatedItem) => {
        setGroupExpenses((prevExpenses) =>
            prevExpenses.map((item) =>
                item.id === groupEditItem.id
                    ? updatedItem
                    : item
            )
        );

        setGroupEditItem(null);

    };



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
                totalGroupTransactionExpenses,

                totalGroupMoneyExpenses,
                handaleDeleteGroupExpenses,

                isgroupEdit,
                setGroupEdit,

                groupEditItem,
                editGroupExpenseshandelar,
                updateGroupExpense,

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