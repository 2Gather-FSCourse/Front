import React, {useEffect, useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import BarPercentage from '../../components/BarPrecentage/BarPercentage';
import campaignImg from '../../assets/campaignImages/breastCancerAwareness.jpg';
import {createDonation} from '../../APIs/donations.api';
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

    const [amount, setAmount] = useState(50); // Default amount
    const [sessionId, setSessionId] = useState('');

    const createPaymentSession = async () => {
        try {
            const response = await createDonation()
            setSessionId(response.data.sessionId);
        } catch (error) {
            console.error('Error creating payment session:', error);
        }
    };

    const handlePaymentSuccess = () => {
        // Handle success (e.g., show success message)
        console.log('Payment successful');
    };

    const handlePaymentError = () => {
        // Handle error (e.g., show error message)
        console.error('Payment failed');
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
            {sessionId && (
                <StripeCheckout
                    stripeKey="YOUR_PUBLISHABLE_KEY"
                    token={handlePaymentSuccess}
                    amount={amount * 100} // Convert to cents
                    currency="USD"
                    email="user@example.com"
                    description="Sample Payment"
                    onClose={handlePaymentError}
                />
            )}
        </CampaignsStyled>
    )
}

export default Campaigns;
