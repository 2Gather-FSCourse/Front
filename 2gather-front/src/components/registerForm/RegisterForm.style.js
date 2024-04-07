import TextField from '@mui/material/TextField';
import { styled as muiStyled } from '@mui/system';
import styled from 'styled-components';

export const FormStyle = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 80%;
    
`;

export const SubTitle = styled.h5`
    font-size: 1.1rem;
    color: #5A7490;
    margin: 22px 0 15px 0;
    align-self: flex-start;
    font-weight: 500;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 70%;

`;

export const TextFieldStyle = muiStyled(TextField)(({ width }) => ({
    '& .MuiOutlinedInput-root': {
        color: '#26293C',
        borderRadius: '25px',
        '&:hover $notchedOutline': {
            border: '1px solid #7793AE',
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #7793AE',
    },
    '& .MuiInputLabel-root': {
        color: '#7793AE',
    },
    margin: '11.5px 0',
    width: width || '200px',}));


