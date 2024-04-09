import { styled as muiStyled } from '@mui/system';
import TextField from '@mui/material/TextField';

export const TextFieldStyle = muiStyled(TextField)(({ width }) => ({
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    borderRadius: '25px',
    '&:hover $notchedOutline': {
      border: '1px solid #7793AE',
    },
    '&:-webkit-autofill': {
      '-webkit-box-shadow': '0 0 0 100px none inset !important',
    },
    '&:-webkit-autofill:hover': {
      '-webkit-box-shadow': '0 0 0 100px none inset !important',
    },
    '&:-webkit-autofill:focus': {
      '-webkit-box-shadow': '0 0 0 100px none inset !important',
    },
    '&:-webkit-autofill:active': {
      '-webkit-box-shadow': '0 0 0 100px none inset !important',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #7793AE',
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
  },
  margin: '11.5px 0',
  width: width || '200px',
}));
