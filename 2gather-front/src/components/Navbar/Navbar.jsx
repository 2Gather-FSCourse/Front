import React from 'react';
import {LinkStyle, NavbarContainer} from "./Navbar.styled.js";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <NavbarContainer>
            <Link to={"/"}>
                <LinkStyle>Home</LinkStyle>
            </Link>
            <Link to={"/campaigns"}>
                <LinkStyle>Campaigns</LinkStyle>
            </Link>
            <Link to={"/appreciationWall"}>
                <LinkStyle>Appreciation Wall</LinkStyle>
            </Link>

        </NavbarContainer>
    );
}

export default Navbar;
