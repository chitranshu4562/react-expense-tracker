import {IconButton} from "@mui/material";

export default function OutlinedClickableIcon({children, onClick}) {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                border: '2px solid #ffffff',
                borderRadius: '10px',
                '&:hover': {
                    backgroundColor: '#ffffff29',
                }
            }}
        >
            {children}
        </IconButton>
    )
}
