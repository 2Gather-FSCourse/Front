import React, {useEffect, useState} from 'react';
import { DonationContainer } from './Donation.styled';
import { fetchCampaignById } from '../../APIs/campaigns.api';


const Donation = (props) => {
    const { transactionDate, amount, campaignId } = props;
    const [campaign, setCampaign] = useState([]);
    const formattedDate = new Date(transactionDate).toLocaleDateString();

    useEffect(() => {
        fetchCampaignById(campaignId)
            .then(data => {
                setCampaign(data.data);
            })
            .catch(error => {
                console.error('Error fetching campaign:', error);
            });
    }, []);

    return (
        <DonationContainer>
            <h1>{campaign && campaign.title ? campaign.title : "Campaign"}</h1>
            <div>Date: {formattedDate}</div>
            <div>Amount: {amount}</div>
        </DonationContainer>
    )
}

export default Donation;
