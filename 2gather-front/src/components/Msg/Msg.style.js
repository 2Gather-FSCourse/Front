import styled from "styled-components";

export const MsgDiv = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    border-color: ${({ isError }) => (isError === "true" ?  '#f1aeb5' : '#a3cfbb')};
    background-color: ${({ isError }) => (isError === "true" ? '#f8d7da' : '#d1e7dd')};
    margin-top: 2%;
    padding: 8px 15px;
    justify-content: center;
    width: 100%;
    border-radius: 5px;`;
