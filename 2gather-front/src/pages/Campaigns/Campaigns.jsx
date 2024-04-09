import React, {useEffect, useState} from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import BarPercentage from '../../components/BarPrecentage/BarPercentage';
import campaignImg from '../../assets/campaignImages/breastCancerAwareness.jpg';
import {createDonation} from '../../APIs/donations.api';
import {loadStripe} from "@stripe/stripe-js";

import {
    AboutAndDonationContainer,
    AboutStyled,
    CampaignDescription,
    CampaignInfoContainer,
    CampaignsStyled,
    ContainerStyled,
    DescriptionContainer,
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


    const createPaymentSession = async () => {
        try {
            console.log('33');
            const stripe = await loadStripe('pk_test_51OyuRrDgt4I0wPiKSSAIhkKNlskhOycoKtuVcr5yOJMv7KcXjiJ1YV7GLT3ye90QAvxWQljx2VCmcwRFICo5KHWS00ibevbvte');
           console.log('35');
            const response = await createDonation();
            console.log('37');
            const result = await stripe.redirectToCheckout({
                sessionId: response.data.sessionId
            });

            if(result.error){
                console.log(result.error);
            }

        } catch (error) {
            console.error('Error creating payment session:', error);
        }
    };


    return (
        <CampaignsStyled>
            <ContainerStyled>
                <ImgStyled src={campaignImg} alt="Campaign Image"/>
                <CampaignInfoContainer>
                    <PageTitle title="Women Cancer Awareness"/>
                    <Button text="Donate" onClick={createPaymentSession}/>
                    <InfoContainer>
                        <BarPercentage percentage={percentage}/>
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
        </CampaignsStyled>
    )
}

export default Campaigns;
