import styled from "styled-components";
import {Link} from "react-router-dom";
export const LoginContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ADD8E6;
    height: 40vh;
    width: 20vw;
    `;

export const LoginButton = styled.button`
    background-color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 6vw;
    cursor: pointer;
`;

export const ButtonText = styled.span`
    color: #ADD8E6;
    font-size: 1.2rem;
`;

export const LoginHeading = styled.h1`
    width: 15vw;
    text-align: center;
    font-size: 2rem;
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
    `;
