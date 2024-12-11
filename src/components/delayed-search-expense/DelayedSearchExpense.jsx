import {IconButton, InputAdornment, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const customTextFieldStyle = {
    '& .MuiOutlinedInput-root': {
        'height': '45px',
        marginBottom: '10px',
        '& fieldset': {
            border: '2px solid #ffffff82',
            borderRadius: '12px'
        },
        '&:hover fieldset': {
            border: '2px solid #ffffff82'
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #9900cc',
            boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)'
        }
    },
    '& .MuiInputBase-input': {
        color: '#ffffff',
        fontSize: '1.3rem',
    }
};

export default function DelayedSearchExpense({onDelayedSearch}) {
    const [input, setInput] = useState('');

    const handleClearInputField = () => {
        setInput('');
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            onDelayedSearch(input);
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [input]);

    return (
        <>
            <TextField
                fullWidth
                value={input}
                placeholder="Type here to search expense data"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{
                                    color: '#ffffff82'
                                }}/>
                            </InputAdornment>
                        ),
                        endAdornment: (input.length > 0) && (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClearInputField}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: '#ffffff1f',
                                            borderRadius: '50%'
                                        }
                                    }}
                                >
                                    <CloseIcon sx={{
                                        color: 'aliceblue'
                                    }}/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }
                }}
                sx={customTextFieldStyle}
                onChange={(event) => setInput(event.target.value)}
            />
        </>
    )
}
