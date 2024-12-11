import {Box, Checkbox, Drawer, FormControlLabel, IconButton, Stack, Typography} from "@mui/material";
import {useContext} from "react";
import {FilterContext} from "../../contexts/FilterContext.jsx";

export default function BasicDrawer({open, onClose, children}) {
    const {filters, updateExpenseCategories} = useContext(FilterContext);
    const handleChecked = (event) => {
        updateExpenseCategories({
            category: event.target.name,
            checked: event.target.checked,
        })
    }

    return (
        <>
            <Drawer
                open={open}
                onClose={onClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#020a1b',
                        padding: '10px',
                    }
                }}
            >
                <Box sx={{ width: 200 }}>
                    {children}
                    <div>
                        <Typography variant="h6" className="text-white">Filter by Category</Typography>
                        <Stack>
                            {filters.expenseCategories.map(categoryObj => (
                                <FormControlLabel
                                    name={categoryObj.category}
                                    checked={categoryObj.checked}
                                    onChange={handleChecked}
                                    sx={{color: '#ffffff', '&:hover': { backgroundColor: '#ffffff1f', borderRadius: '10px'}}}
                                    control={<Checkbox sx={{color: '#ffffff', '&.Mui-checked': { color: '#ffffff'}}} />}
                                    label={categoryObj.category}
                                    key={categoryObj.category}
                                />
                            ))}
                        </Stack>
                    </div>
                </Box>
            </Drawer>
        </>
    )
}
