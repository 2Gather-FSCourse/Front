import styled from "styled-components";

export const CampaignsStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin-top: 2%; 
`;

export const UpperContainerStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 5%;
    justify-content: center;
`;


export const ImgStyled = styled.img`
    background-size: contain;
    display: block;
    object-fit: contain;
    min-width: 380px;
    max-width: 30%;
`;

export const CampaignInfoContainer = styled.div`
    display: flex;
    flex-flow: column;
    gap: 2%;
    margin-top: 2%;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 2%;
    margin-top: 5%;
`;

export const TotalDonations = styled.h4`
    color: #54B6ED;
    font-size: 1.2em;
    font-weight: 600;
`;

export const GoalDonationStyle = styled.p`
    color: #939393;
    font-size: 1em;
    font-weight: 400;
`;

export const LowerContainerStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
`;
