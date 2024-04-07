import React from 'react';
import {FullBarPercentageStyled, BarPercentageStyled} from "./BarPercentage.styled.js";

const BarPercentage = ({percentage}) => {
    return (
        <FullBarPercentageStyled>
            <BarPercentageStyled percentage={percentage}></BarPercentageStyled>
        </FullBarPercentageStyled>
    );
};

export default BarPercentage;