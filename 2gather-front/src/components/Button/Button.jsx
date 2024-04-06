import React from 'react';
import {ButtonStyled} from "./Button.styled.jsx";

export const Button = ({text, onClick, isEmpty}) => {
    return (
        <ButtonStyled onClick={onClick} isEmpty={isEmpty}>{text}</ButtonStyled>
    );
}