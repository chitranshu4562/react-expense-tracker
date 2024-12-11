import {createContext, useContext, useState} from "react";
import {FilterContext} from "./FilterContext.jsx";
import {EXPENSE_CATEGORY} from "../constants.js";

const ExpenseContext = createContext();

const ExpenseContextProvider = ({children}) => {
    const {filters, handleClearFilters} = useContext(FilterContext);
    const [expenses, setExpenses] = useState([
        {amount: 12, description: 'There is some expense', category: 'Food', date: new Date()},
    ]);

    const [totalExpense, setTotalExpense] = useState(expenses);

    const handleAddExpense = (expenseData) => {
        setExpenses((prevState) => {
            return [...prevState, expenseData];
        })
        setTotalExpense(prevState => [...prevState, expenseData]);
        handleClearFilters(EXPENSE_CATEGORY);
    }

    const handleFilteredExpenses = () => {
        const selectedCategories = filters.expenseCategories.filter(category => category.checked).map(data => data.category);
        let result = [...totalExpense];

        // filter by categories
        if (selectedCategories.length > 0) {
            result = result.filter(expense => selectedCategories.includes(expense.category));
        }

        // filter by search input
        if (filters.searchInput.length > 0) {
            result = result.filter(data => data.description.toLowerCase().includes(filters.searchInput.toLowerCase()));
        }
        setExpenses(result);
    }



    return (
        <ExpenseContext.Provider value={{totalExpense, expenses, setExpenses, handleAddExpense, handleFilteredExpenses}}>
            {children}
        </ExpenseContext.Provider>
    )
}

export {ExpenseContext, ExpenseContextProvider};
