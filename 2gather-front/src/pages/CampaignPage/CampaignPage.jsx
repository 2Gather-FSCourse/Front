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


const CampaignPage = ({ user }) => {
    const [percentage, setPercentage] = useState(0);
    // const [campaignId, setCampaignId] = useState("");
    const [campaign, setCampaign] = useState({});
    const [totalDonations, setTotalDonations] = useState(0);

    useEffect(() => {
        setPercentage((totalDonations / campaignGoal) * 100);
    }, [totalDonations, campaignGoal]);

    useEffect(() => {
        const url = window.location.href;
        const campaignId = url.split("=")[1];
        setCampaignId(campaignId);

        async function fetchCampaign(campaignId) {
            const result = await fetchCampaignById(campaignId);
            setCampaign(result.data);
        }

        async function getDonations(campaignId) {
            const donations = getDonationByCampaignId(campaignId);
            setTotalDonations(donations.data.reduce((acc, donation) => acc + donation.amount, 0));
        }

        fetchCampaign(campaignId);
        getDonations(campaignId);
        setPercentage(campaign.goal / totalDonations * 100)
    }, []);

    const navigate = useNavigate();

    const navigateToDonate = () => {
        navigate('/donate'); // Use relative path to navigate to /donate
    };


    return (
        <CampaignPageStyled>
            <ContainerStyled>
                <ImgStyled src={campaign.campaignImage} alt="Campaign Image" />
                <CampaignInfoContainer>
                    <PageTitle title={campaign.title} />
                    {user && (
                        <Button text={'Donate 50₪'} onClick={navigateToDonate} />
                    )}
                    <InfoContainer>
                        <BarPercentage percentage={percentage} />
                        <TotalDonations>{totalDonations}₪</TotalDonations>
                        <GoalDonationStyle>Pledged of {campaign.goal}₪ goal</GoalDonationStyle>
                        <span>Campaign complete</span>
                        <span>By Organization x</span>
                    </InfoContainer>
                </CampaignInfoContainer>
            </ContainerStyled>
            <DescriptionContainer>
                <AboutAndDonationContainer>
                    <AboutStyled>About this campaign</AboutStyled>
                    <CampaignDescription>
                        {campaign.campaignDesc}
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
