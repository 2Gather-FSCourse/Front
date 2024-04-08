import {styled as muiStyled} from "@mui/system";
import TextField from "@mui/material/TextField";

export const TextFieldStyle = muiStyled(TextField)(({ width }) => ({
    '& .MuiOutlinedInput-root': {
        color: '#fff',
        borderRadius: '25px',
        '&:hover $notchedOutline': {
            border: '1px solid #7793AE',
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #7793AE',
    },
    '& .MuiInputLabel-root': {
        color: '#fff',
    },
    margin: '11.5px 0',
    width: width || '200px',}));
