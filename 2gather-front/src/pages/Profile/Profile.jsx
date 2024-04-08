import React from 'react';
import {LineStyle} from "../../components/Header/Header.styled.js";
import CreditCardIcon from "../../assets/icons/credit-card-profile.png";
import DonationsIcon from "../../assets/icons/love.png";
import UserEditIcon from "../../assets/icons/user-edit.png";
import Button from "../../components/Button/Button";

import {
    CardContainer,
    CircleContainer,
    ContainerDesc,
    ContainerTitle,
    IconContainer,
    LowerProfileContainer, OrganizationName,
    ProfileContainer,
    ProfileImage,
    ProfileName,
    UpperProfileContainer,
} from "./Profile.styled.js";
import {Link, Navigate, Route} from "react-router-dom";
import Signup from "../Signup/Signup.jsx";


const Profile = () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    return (
        <ProfileContainer>
            <UpperProfileContainer>
                <ProfileImage src={user.img}></ProfileImage>
                <ProfileName>{user.name}</ProfileName>
                { user.userType === 'Organization' ?  <OrganizationName>Organization Name</OrganizationName> : null }
            </UpperProfileContainer>
            <LineStyle>
                <svg width="100%" height="1vh">
                    <line x1="0" y1="0" x2="100%" y2="0"></line>
                </svg>
            </LineStyle>
            <LowerProfileContainer>
                <CardContainer>
                    <CircleContainer>
                        <IconContainer src={CreditCardIcon} alt="credit-card"></IconContainer>
                    </CircleContainer>
                    <ContainerTitle>Payment Information</ContainerTitle>
                    <ContainerDesc>View and manage your payment details.</ContainerDesc>
                    <Button text={'Edit'}></Button>
                </CardContainer>
                <CardContainer>
                    <CircleContainer>
                        <IconContainer src={DonationsIcon} alt="donations"></IconContainer>
                    </CircleContainer>
                    <ContainerTitle>Donations</ContainerTitle>
                    <ContainerDesc>Track your donation history and manage contributions</ContainerDesc>
                    <Button text={'View'}></Button>
                </CardContainer>
                <CardContainer>
                    <CircleContainer>
                        <IconContainer src={UserEditIcon} alt="edit user"></IconContainer>
                    </CircleContainer>
                    <ContainerTitle>Personal Information</ContainerTitle>
                    <ContainerDesc>Update and maintain your personal profile details</ContainerDesc>
                    <Link to={
                        {
                            pathname: "/signup",
                            state: {formMod: "update"}
                        }}>
                        <Button text={'Edit'}></Button>
                    </Link>
                </CardContainer>
            </LowerProfileContainer>
        </ProfileContainer>

    );
};

export default Profile;
