import React, {useEffect, useState} from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import BarPercentage from '../../components/BarPrecentage/BarPercentage';
import campaignImg from '../../assets/campaignImages/breastCancerAwareness.jpg';
import {
    AboutContainer,
    AboutStyled,
    CampaignDescription,
    CampaignInfoContainer,
    CampaignsStyled,
    ContainerStyled,
    GoalDonationStyle,
    ImgStyled,
    InfoContainer,
    TotalDonations,
} from './Campaigns.styled';

const Campaigns = ({totalDonations, campaignGoal}) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setPercentage((totalDonations / campaignGoal) * 100);
    }, [totalDonations, campaignGoal]);

    return (
        <CampaignsStyled>
            <ContainerStyled>
                <ImgStyled src={campaignImg} alt="Campaign Image"/>
                <CampaignInfoContainer>
                    <PageTitle title="Women Cancer Awareness"/>
                    <Button text="Donate"/>
                    <InfoContainer>
                        <BarPercentage percentage={percentage}/>
                        <TotalDonations>{totalDonations}₪</TotalDonations>
                        <GoalDonationStyle>Pledged of {campaignGoal}₪ goal</GoalDonationStyle>
                        <span>Campaign complete</span>
                        <span>By Organization x</span>
                    </InfoContainer>
                </CampaignInfoContainer>
            </ContainerStyled>
            <ContainerStyled>
                <AboutContainer>
                    <AboutStyled>About this campaign</AboutStyled>
                    <CampaignDescription>
                        Women's cancer awareness donations are crucial for funding research,
                        prevention, and support for
                        breast, ovarian, cervical, and uterine cancers. These contributions drive early detection,
                        treatment
                        advancements, and education efforts, empowering women with knowledge and resources. Support for
                        these donations aids in the fight against these diseases, offering hope and assistance to
                        patients
                        and their families while promoting women's health.
                    </CampaignDescription>
                </AboutContainer>
            </ContainerStyled>
        </CampaignsStyled>
    )
}

export default Campaigns;
