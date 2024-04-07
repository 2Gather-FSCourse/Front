import React, {useState, useEffect} from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import BarPercentage from '../../components/BarPrecentage/BarPercentage';
import {
    CampaignsStyled,
    UpperContainerStyled,
    LowerContainerStyled,
    ImgContainerStyled,
    CampaignInfoStyled, TotalDonations, GoalDonationStyle
} from './Campaigns.styled';

const Campaigns = ({totalDonations, campaignGoal}) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setPercentage((totalDonations / campaignGoal) * 100);
    }, [totalDonations, campaignGoal]);

    return (
        <CampaignsStyled>
            <UpperContainerStyled>
                <ImgContainerStyled></ImgContainerStyled>
                <CampaignInfoStyled>
                    <PageTitle title="Women Cancer Awareness"/>
                    <Button text="Donate"/>
                    <BarPercentage percentage={percentage}/>
                    <TotalDonations>{totalDonations}₪</TotalDonations>
                    <GoalDonationStyle>Pledged of {campaignGoal}₪ goal</GoalDonationStyle>
                </CampaignInfoStyled>
            </UpperContainerStyled>
            <LowerContainerStyled>

            </LowerContainerStyled>
        </CampaignsStyled>
    )
}

export default Campaigns;