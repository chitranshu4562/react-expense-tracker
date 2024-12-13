import {Typography} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function VerticalBar({monthName, amountPercentage, amount}) {
    const innerDivStyle = {
        backgroundColor: '#990099',
        width: '100%',
        height: `${amountPercentage}%`,
        borderRadius: '3px'
    }

    const outerDivStyle = {
        backgroundColor: '#e6e6e6',
        width: '5px',
        height: '100px',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'end'
    }
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <Typography
                    variant="p"
                    sx={{color: '#ffffff'}}
                >{amountPercentage}%</Typography>
                <div className="d-flex justify-content-center">
                    <div style={outerDivStyle}>
                        <div style={innerDivStyle}></div>
                    </div>
                </div>
                <Typography
                    sx={{color: '#ffffff'}}
                    variant="p"
                >{monthName}</Typography>
                <Typography
                    variant="p"
                    sx={{color: '#ffffff'}}
                ><CurrencyRupeeIcon sx={{fontSize: '15px'}}/>{amount}</Typography>
            </div>
        </>
    )
}
