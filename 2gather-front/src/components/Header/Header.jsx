import React from 'react';
import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom';
import UserInHeader from "../UserInHeader/UserInHeader.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import {HeaderContainer, HeaderStyled, LineStyle, LogoNavContainer, LogoStyle} from "./Header.styled.js";

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderContainer>
                <LogoNavContainer>
                    <Link to="/">
                        <LogoStyle src={Logo} alt="logo"/>
                    </Link>
                    <Navbar></Navbar>
                </LogoNavContainer>
                <UserInHeader></UserInHeader>
            </HeaderContainer>
            <LineStyle>
                <svg width="95%" height="1vh">
                    <line x1="0" y1="0" x2="100%" y2="0"></line>
                </svg>
            </LineStyle>
        </HeaderStyled>
    );
}

export default Header;
