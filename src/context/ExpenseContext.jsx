import React, { createContext, useContext, useState } from "react";

// ১. Context তৈরি করা
const ExpenseContext = createContext();

// ২. Provider তৈরি করা
const ExpenseProvider = ({ children }) => {

    // Personal expenses

    const [personalExpenses, setPersonalExpenses] = useState([]);

    const totalPersonalTransactionExpenses = personalExpenses.length;

    const totalPersonalMoneyExpenses =
        personalExpenses.reduce(
            (accumulator, item) =>
                accumulator + item.amount, 0
        );


    //group expenses

    const [groupExpenses, setGroupExpenses] = useState([]);

    const totalGroupTransactionExpenses = groupExpenses.length;

    const totalGroupMoneyExpenses =
        groupExpenses.reduce(
            (accumulator, item) =>
                accumulator + item.amount, 0
        );




    return (
        <ExpenseContext.Provider
            value={{
                personalExpenses,
                setPersonalExpenses,
                totalPersonalTransactionExpenses,

                totalPersonalMoneyExpenses,

                groupExpenses,
                setGroupExpenses,
                totalGroupTransactionExpenses,

                totalGroupMoneyExpenses

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