import React, {useEffect, useState} from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import BarPercentage from '../../components/BarPrecentage/BarPercentage';
import campaignImg from '../../assets/campaignImages/breastCancerAwareness.jpg';
import {
    CampaignInfoContainer,
    CampaignsStyled,
    GoalDonationStyle,
    ImgStyled,
    InfoContainer,
    LowerContainerStyled,
    TotalDonations,
    UpperContainerStyled
} from './Campaigns.styled';

const Campaigns = ({totalDonations, campaignGoal}) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setPercentage((totalDonations / campaignGoal) * 100);
    }, [totalDonations, campaignGoal]);

    return (
        <CampaignsStyled>
            <UpperContainerStyled>
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
            </UpperContainerStyled>
            <LowerContainerStyled>

            </LowerContainerStyled>
        </CampaignsStyled>
    )
}

export default Campaigns;
