import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import BarPercentage from '../../components/BarPrecentage/BarPercentage';
import campaignImg from '../../assets/campaignImages/breastCancerAwareness.jpg';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {
    AboutAndDonationContainer,
    AboutStyled,
    CampaignDescription,
    CampaignInfoContainer,
    CampaignPageStyled,
    ContainerStyled,
    DescriptionContainer,
    GoalDonationStyle,
    ImgStyled,
    InfoContainer,
    TotalDonations,
} from './CampaignPage.styled.js';

const baseURL = "http://localhost:3000";


const CampaignPage = ({ user, totalDonations, campaignGoal }) => {
    const [percentage, setPercentage] = useState(0);
    // const [campaignId, setCampaignId] = useState("");

    useEffect(() => {
        setPercentage((totalDonations / campaignGoal) * 100);
    }, [totalDonations, campaignGoal]);

    // useEffect(() => {
    //     const url = window.location.href;
    //     const campaignId = url.split("=")[1];
    //     setCampaignId(campaignId);
    // }, []);

    // const navigate = useNavigate();
    // const navigatorToPayment = () => {
    //     navigate(`donate/campaignId=${campaignId}`);
    // };


    const navigate = useNavigate();

    const navigateToDonate = () => {
        navigate('/donate'); // Use relative path to navigate to /donate
    };


    return (
        <CampaignPageStyled>
            <ContainerStyled>
                <ImgStyled src={campaignImg} alt="Campaign Image" />
                <CampaignInfoContainer>
                    <PageTitle title="Women Cancer Awareness" />
                    {user && (
                        <Button text={'Donate 50₪'} onClick={navigateToDonate} />
                    )}
                    <InfoContainer>
                        <BarPercentage percentage={percentage} />
                        <TotalDonations>{totalDonations}₪</TotalDonations>
                        <GoalDonationStyle>Pledged of {campaignGoal}₪ goal</GoalDonationStyle>
                        <span>Campaign complete</span>
                        <span>By Organization x</span>
                    </InfoContainer>
                </CampaignInfoContainer>
            </ContainerStyled>
            <DescriptionContainer>
                <AboutAndDonationContainer>
                    <AboutStyled>About this campaign</AboutStyled>
                    <CampaignDescription>
                        Women's cancer awareness donations are crucial for funding research, prevention, and support for
                        breast, ovarian, cervical, and uterine cancers. These contributions drive early detection,
                        treatment advancements, and education efforts, empowering women with knowledge and resources.
                        Support for these donations aids in the fight against these diseases, offering hope and
                        assistance to patients and their families while promoting women's health.
                    </CampaignDescription>
                </AboutAndDonationContainer>
                <AboutAndDonationContainer>
                    <AboutStyled>Recent Donations</AboutStyled>
                </AboutAndDonationContainer>
            </DescriptionContainer>
        </CampaignPageStyled>
    )
}

export default CampaignPage;
