import styled from "styled-components";

export const FullBarPercentageStyled = styled.div`
    background-color: #F3F3F3;
    border-radius: 5px;
    width: 100%;
    height: 20px;
`;

export const BarPercentageStyled = styled.div`
    background-color: #54B6ED;
    border-radius: 5px;
    width: ${props => props.percentage}%;
    height: 20px;
`;