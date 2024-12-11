import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo/index.js";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function BasicDatepicker({ label, name, value, onChange }) {
    const handleDateChange = (data) => {
        const obj = {
            name: name,
            value: data
        }
        onChange(obj);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} >
                <DatePicker
                    label={label}
                    name={name}
                    value={value}
                    onChange={(data) => onChange(data)}
                    maxDate={dayjs(new Date())}
                />
            </DemoContainer>
        </LocalizationProvider>
    )
}
