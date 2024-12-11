import {Box, FormControlLabel} from "@mui/material";
import {useState} from "react";
import {CheckBox} from "@mui/icons-material";

export default function BasicCheckbox({label = 'Category one'}) {
    const [checked, setChecked] = useState(false);
    const handleChecked = (event) => {
        console.log(event.target.checked)
        setChecked(event.target.checked);
    }

    return (
        <Box>
            <FormControlLabel
                sx={{
                    'color': '#ffffff',
                }}
                control={<CheckBox/>}
                label={label}
            />
        </Box>
    )
}
