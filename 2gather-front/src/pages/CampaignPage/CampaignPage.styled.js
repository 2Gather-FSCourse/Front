import styled from "styled-components";

export const CampaignPageStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin: 0 1.5%;
`;

export const ContainerStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 5%;
    justify-content: center;
    margin-top: 3%;
    align-items: center;
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
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 5%;
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

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-flow: row wrap;
    }
`;

export const AboutAndDonationContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 3%;
    min-width: 380px;
    width: 35%;
`;

export const AboutStyled = styled.h6`
    font-size: 1em;
    padding: 2% 0;
`;

export const CampaignDescription = styled.p`
padding: 2% 0;
`;
