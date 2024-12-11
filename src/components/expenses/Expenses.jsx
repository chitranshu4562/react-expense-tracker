import {Typography} from "@mui/material";
import classes from "./Expenses.module.css";
import {useContext, useEffect} from "react";
import {ExpenseContext} from "../../contexts/ExpenseContext.jsx";
import ExpenseItem from "./expense-item/ExpenseItem.jsx";
import {FilterContext} from "../../contexts/FilterContext.jsx";
import DelayedSearchExpense from "../delayed-search-expense/DelayedSearchExpense.jsx";

export default function Expenses() {
    const {expenses, handleFilteredExpenses} = useContext(ExpenseContext);
    const {filters, updateSearchInput} = useContext(FilterContext);

    const handleDelayedSearchExpenses = (value) => {
        updateSearchInput(value);
    }

    useEffect(() => {
        handleFilteredExpenses()
    }, [filters]);

    return (
        <>
            <DelayedSearchExpense onDelayedSearch={handleDelayedSearchExpenses}/>
            <div className={classes.cardContainer}>
                <Typography variant="h3"
                            className={`${classes.cardContainerTitle} text-center`}
                >Expense List</Typography>
                {expenses.map(expense => (
                    <ExpenseItem key={expense.description} expense={expense}/>
                ))}
            </div>
        </>
    )
}
