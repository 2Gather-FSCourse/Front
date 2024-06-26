import styled from "styled-components";
import {Link} from "react-router-dom";
export const LoginContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ADD8E6;
    height: 40vh;
    width: 350px;
    border-radius: 10px;
    `;

export const LoginButton = styled.button`
    background-color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: fit-content;
    cursor: pointer;
`;

export const ButtonText = styled.span`
    color: #ADD8E6;
    font-size: 1.2rem;
`;

export const LoginHeading = styled.h1`
    width: 170px;
    text-align: center;
    font-size: 1.8rem;
    color: #fff;
    padding: 10px;
`;

export const LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 55vh;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 35vh;
    background-color: #ADD8E6;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    `;

export const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
    height: fit-content;
    margin: 10px;
    font-size: 1.2rem;
    &:hover {
        color: #ADD8E6;
    }
`;
