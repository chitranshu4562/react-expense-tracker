import classes from "./App.module.css";
import {Button, createTheme, IconButton, ThemeProvider, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExpenseForm from "./components/expense-form/ExpenseForm.jsx";
import Expenses from "./components/expenses/Expenses.jsx";
import BasicModal from "./components/basic-modal/BasicModal.jsx";
import {useContext, useState} from "react";
import BasicDrawer from "./components/basic-drawer/BasicDrawer.jsx";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import OutlinedClickableIcon from "./components/outlined-clickable-icon/OutlinedClickableIcon.jsx";
import {FilterContext} from "./contexts/FilterContext.jsx";
import {EXPENSE_CATEGORY} from "./constants.js";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                }
            }
        }
    }
})

function App() {
    const {handleClearFilters} = useContext(FilterContext);
    const [showForm, setShowForm] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    }

    const handleHideForm = () => {
        setShowForm(false);
    }

    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    }

    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <BasicDrawer
                    open={openDrawer}
                    onClose={handleCloseDrawer}
                >
                    <div className="d-flex justify-content-between my-2">
                        <Button
                            onClick={() => handleClearFilters(EXPENSE_CATEGORY)}
                            variant="contained"
                            sx={{
                                backgroundColor: '#990099',
                                padding: '5px 10px',
                                '&:hover': {
                                    backgroundColor: 'rgba(153,0,153,0.81)',
                                }
                            }}
                        >Clear All</Button>
                        <OutlinedClickableIcon
                            onClick={handleCloseDrawer}

                        >
                            <ChevronLeftIcon sx={{color: '#ffffff'}}/>
                        </OutlinedClickableIcon>
                    </div>
                </BasicDrawer>
                <div className={classes.appContainer}>
                    <div className="d-flex justify-content-between my-2">
                        <div className="d-flex gap-4">
                            <div className="d-flex align-items-center">
                                <OutlinedClickableIcon
                                    onClick={handleOpenDrawer}
                                >
                                    <MenuIcon sx={{color: '#ffffff'}}/>
                                </OutlinedClickableIcon>
                            </div>
                            <Typography variant="h3"
                                        className="text-center">
                                Expense Tracker
                            </Typography>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button variant="contained" onClick={handleShowForm}>+ Add Expense</Button>
                        </div>
                    </div>
                    <BasicModal open={showForm} onClose={handleHideForm}>
                        <ExpenseForm onSubmit={handleHideForm}>
                            <Button variant="outlined" onClick={handleHideForm}>Cancel</Button>
                        </ExpenseForm>
                    </BasicModal>
                    <Expenses/>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
