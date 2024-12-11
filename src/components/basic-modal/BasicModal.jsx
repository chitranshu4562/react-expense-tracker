import {Box, Modal} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 4,
};

export default function BasicModal({children, open, onClose}) {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    )
}
