import styled from 'styled-components';

export const ButtonStyled = styled.button`
    background-color:'#FFFFFF' ;
    border: '1px solid #ADD8E6'; 
    color: '#ADD8E6';
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    transition-duration: 0.4s;
    &:hover {
        background-color: '#ADD8E6';
        border: '1px solid #FFFFFF';
        color: '#FFFFFF' ;
    }
    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;
