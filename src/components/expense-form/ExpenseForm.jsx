import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import classes from "./ExpenseForm.module.css";
import BasicDatepicker from "../basic-datepicker/BasicDatepicker.jsx";
import {useContext} from "react";
import {ExpenseContext} from "../../contexts/ExpenseContext.jsx";
import {expenseCategories} from "../../constants.js";

export default function ExpenseForm({children, onSubmit}) {
    const {handleAddExpense} = useContext(ExpenseContext);

    const initialValues = {
        category: '',
        description: '',
        amount: '',
        date: null,
    };

    const validationSchema = Yup.object({
        category: Yup.string().required('*Required'),
        description: Yup.string().required('*Required'),
        amount: Yup.string().required('*Required'),
        date: Yup.date().required('*Required'),
    });

    const handleSubmit = values => {
        handleAddExpense(values);
        onSubmit();
    }

    const expenseForm = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
        validateOnMount: true
    });

    return (
        <>
            <form className={classes.formContainer} onSubmit={expenseForm.handleSubmit}>
                <div className="my-2">
                    <FormControl fullWidth>
                        <InputLabel id="category">Category</InputLabel>
                        <Select
                            id="category"
                            labelId="category"
                            label="Category"
                            name="category"
                            value={expenseForm.values.category}
                            onChange={expenseForm.handleChange}
                        >
                            {expenseCategories.map(category => (
                                <MenuItem key={category} value={category}>{category}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {expenseForm.touched.category && expenseForm.errors.category && (<span className="text-danger">{expenseForm.errors.category}</span>)}
                </div>
                <div className="my-2">
                    <TextField
                        fullWidth
                        name="description"
                        value={expenseForm.values.description}
                        onChange={expenseForm.handleChange}
                        placeholder="Enter description"
                        label="Description"
                        variant="outlined"
                    />
                    {expenseForm.touched.description && expenseForm.errors.description && (<span className="text-danger">{expenseForm.errors.description}</span>)}
                </div>
                <div className="my-2">
                    <TextField
                        fullWidth
                        name="amount"
                        value={expenseForm.values.amount}
                        onChange={expenseForm.handleChange}
                        placeholder="Enter amount"
                        label="Amount"
                        variant="outlined"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CurrencyRupeeIcon/>
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                    {expenseForm.touched.amount && expenseForm.errors.amount && (<span className="text-danger">{expenseForm.errors.amount}</span>)}
                </div>
                <div className="my-2">
                    <BasicDatepicker
                        label="Select Date"
                        name="date"
                        value={expenseForm.values.date}
                        onChange={(value) => expenseForm.setFieldValue('date', value)}
                    />
                    {expenseForm.touched.date && expenseForm.errors.date && (<span className="text-danger">{expenseForm.errors.date}</span>)}
                </div>
                <div className="d-flex justify-content-center gap-2">
                    {children}
                    <Button
                        variant="contained"
                        disabled={!expenseForm.isValid}
                        type="submit"
                    >Add</Button>
                </div>
            </form>
        </>
    )
}
