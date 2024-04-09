import styled from "styled-components";
import {Link} from "react-router-dom";

export const LoginContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ADD8E6;
    border:2px solid #ADD8E6;
    border-radius: 10px;
    height: 39.6%;
    width: 69%;
    `;

export const LoginHeading = styled.h1`
    color: #fff;
    padding: 20px;
    `;

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 27px;
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
