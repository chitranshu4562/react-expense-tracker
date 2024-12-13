import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo/index.js";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import {Typography} from "@mui/material";

export default function BasicDatepicker({ label, name, value, onChange }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} >
                <DatePicker
                    name={name}
                    value={value}
                    onChange={(data) => onChange(data)}
                    maxDate={dayjs(new Date())}
                    sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                            '& input': {
                                color: '#ffffff'
                            },
                            '& fieldset': {
                                borderColor: '#ffffff7a',
                            },
                            '&:hover fieldset': {
                                border: '2px solid #0d6efd',
                            },
                            '& .MuiSvgIcon-root': {
                                color: '#ffffff',
                            }
                        }
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    )
}
