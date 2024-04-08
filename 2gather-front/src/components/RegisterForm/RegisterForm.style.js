import TextField from '@mui/material/TextField';
import { styled as muiStyled } from '@mui/system';
import styled from 'styled-components';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const FormStyle = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 80%;
    
`;

export const SubTitle = styled.h5`
    font-size: 1.1rem;
    color: #ADD8E6;
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



export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
`;

export const StyledSelect = muiStyled(Select)(({ width }) => ({
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
        color: '#ADD8E6',
    },
    margin: '11.5px 0',
    width: width || '200px',}));

export const StyledMenuItem = muiStyled(MenuItem)(({ width }) => ({
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
        color: '#ADD8E6',
    },
    margin: '11.5px 0',
    width: width || '200px',}));

