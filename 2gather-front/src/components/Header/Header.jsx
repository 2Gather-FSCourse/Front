import React from 'react';
import Logo from "../../assets/Logo.png";
import {HeaderStyled, HeaderContainer, LogoStyle, LineStyle} from "./Header.styled.js";

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderContainer>
            <LogoStyle src={Logo} alt="logo"/>
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
