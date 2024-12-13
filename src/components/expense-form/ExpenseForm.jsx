import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import classes from "./ExpenseForm.module.css";
import BasicDatepicker from "../basic-datepicker/BasicDatepicker.jsx";
import {useContext} from "react";
import {ExpenseContext} from "../../contexts/ExpenseContext.jsx";
import {expenseCategories} from "../../constants.js";

const muiTextFieldBorderStyle = {
    '& fieldset': {
        borderColor: '#ffffff7a',
    },
    '&:hover fieldset': {
        border: '2px solid #0d6efd',
    }
}

const muiSelectDropdownListStyle = {
    bgcolor: '#29290a',
    borderRadius: '0 0 5px 5px',
    '& .MuiMenuItem-root': {
        fontSize: '16px',
        color: 'aliceblue',
        '&:hover': {
            bgcolor: '#1c1c17',
            color: '#ffffff',
        }
    }
}

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
                    <FormControl
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                ...muiTextFieldBorderStyle,
                                '& .MuiSelect-select': {
                                    color: '#ffffff',
                                },
                                '& .MuiSvgIcon-root': {
                                    color: '#ffffff7a'
                                }
                            }
                        }}
                        fullWidth
                    >
                        <InputLabel sx={{color: '#ffffff7a'}}>Select Expense Category</InputLabel>
                        <Select
                            id="category"
                            name="category"
                            value={expenseForm.values.category}
                            onChange={expenseForm.handleChange}
                            label="Select Expense Category"
                            MenuProps={{
                                PaperProps: {
                                    sx: muiSelectDropdownListStyle
                                }
                            }}
                        >
                            {expenseCategories.map(category => (
                                <MenuItem key={category} value={category}>{category}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {expenseForm.touched.category && expenseForm.errors.category && (
                        <span className="text-danger">{expenseForm.errors.category}</span>)}
                </div>
                <div className="my-2">
                    <Typography className="my-1">Description</Typography>
                    <TextField
                        fullWidth
                        name="description"
                        value={expenseForm.values.description}
                        onChange={expenseForm.handleChange}
                        placeholder="Enter description"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': muiTextFieldBorderStyle
                        }}
                        slotProps={{
                            input: {
                                style: {
                                    color: '#ffffff'
                                }
                            }
                        }}
                    />
                    {expenseForm.touched.description && expenseForm.errors.description && (
                        <span className="text-danger">{expenseForm.errors.description}</span>)}
                </div>
                <div className="my-2">
                    <Typography className="my-1">Amount</Typography>
                    <TextField
                        fullWidth
                        name="amount"
                        value={expenseForm.values.amount}
                        onChange={(event) => {
                            const value = event.target.value;
                            if (/^[0-9\s]*$/.test(value)) {
                                expenseForm.setFieldValue('amount', value);
                            }
                        }}
                        placeholder="Enter amount"
                        variant="outlined"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CurrencyRupeeIcon sx={{color: '#ffffff'}}/>
                                    </InputAdornment>
                                ),
                                style: {
                                    color: '#ffffff'
                                },
                            }
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': muiTextFieldBorderStyle
                        }}
                    />
                    {expenseForm.touched.amount && expenseForm.errors.amount && (
                        <span className="text-danger">{expenseForm.errors.amount}</span>)}
                </div>
                <div className="my-2">
                    <Typography>Select Date</Typography>
                    <BasicDatepicker
                        label="Select Date"
                        name="date"
                        value={expenseForm.values.date}
                        onChange={(value) => expenseForm.setFieldValue('date', value)}
                    />
                    {expenseForm.touched.date && expenseForm.errors.date && (
                        <span className="text-danger">{expenseForm.errors.date}</span>)}
                </div>
                <div className="d-flex justify-content-center gap-4">
                    {children}
                    <Button
                        variant="contained"
                        disabled={!expenseForm.isValid}
                        type="submit"
                        sx={{
                            '&.Mui-disabled': {
                                backgroundColor: '#0d6efd',
                            }
                        }}
                    >Add</Button>
                </div>
            </form>
        </>
    )
}
