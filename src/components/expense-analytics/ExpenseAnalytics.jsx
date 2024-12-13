import {Box, Typography} from "@mui/material";
import classes from "./ExpenseAnalytics.module.css";
import {useContext, useEffect, useState} from "react";
import VerticalBar from "./vertical-bar/VerticalBar.jsx";
import {ExpenseContext} from "../../contexts/ExpenseContext.jsx";

const initialMonthlyExpenses = [
    {name: 'Jan', amount: 0},
    {name: 'Feb', amount: 0},
    {name: 'Mar', amount: 0},
    {name: 'Apr', amount: 0},
    {name: 'May', amount: 0},
    {name: 'Jun', amount: 0},
    {name: 'Jul', amount: 0},
    {name: 'Aug', amount: 0},
    {name: 'Sep', amount: 0},
    {name: 'Oct', amount: 0},
    {name: 'Nov', amount: 0},
    {name: 'Dec', amount: 0},
];

export default function ExpenseAnalytics() {
    const {totalExpense} = useContext(ExpenseContext);
    const [expenseData, setExpenseData] = useState(null);

    const handleSetExpenseData = () => {
        const totalExpenseAmount = getTotalExpenseAmount();
        const monthlyExpenses = JSON.parse(JSON.stringify(initialMonthlyExpenses));
        totalExpense.forEach((item) => {
            const month = getShortMonthName(item.date);
            const exp = monthlyExpenses.find(data => data.name === month);
            if (exp) {
                exp.amount += parseInt(item.amount);
            }
        })
        setExpenseData({totalExpenseAmount, monthlyExpenses});
    }

    const getShortMonthName = (value) => {
        const date = new Date(value);
        return date.toLocaleString('en-US', {month: 'short'})
    }

    const getTotalExpenseAmount = () => {
        return totalExpense.reduce((sum, current) => sum + parseInt(current.amount), 0);
    }

    const getPercentageExpense = (totalAmount, value) => {
        return Math.floor((value / totalAmount) * 100);
    }

    useEffect(() => {
        handleSetExpenseData()
    }, [totalExpense]);

    return (
        <>
            {expenseData && (
                <Box className={`${classes.expenseAnalyticsContainer} my-3`}>
                    <div className="d-flex justify-content-between mx-2">
                        <Typography variant="h5">Total Amount: {expenseData.totalExpenseAmount}</Typography>
                    </div>
                    <div className={`row p-2 m-2 ${classes.verticalBarContainer}`}>
                        {expenseData.monthlyExpenses.map(data => (
                            <div key={data.name} className="col d-flex justify-content-center">
                                <VerticalBar
                                    monthName={data.name}
                                    amountPercentage={getPercentageExpense(expenseData.totalExpenseAmount, data.amount)}
                                    amount={data.amount}
                                />
                            </div>
                        ))}
                    </div>
                </Box>
            )}
        </>
    )
}
