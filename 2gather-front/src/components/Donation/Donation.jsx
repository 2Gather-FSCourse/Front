import React, {useEffect, useState} from 'react';
import { DonationContainer } from './Donation.styled';
import { fetchCampaignById } from '../../APIs/campaigns.api';


const Donation = (props) => {
    const { transactionDate, amount, campaignId } = props;
    const [campaign, setCampaign] = useState(null);

    // useEffect(() => {
    //     fetchCampaignById(campaignId)
    //         .then(data => {
    //             setCampaign(data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching campaign:', error);
    //         });
    // }, []);

    return (
        <DonationContainer>
        {/*<h1>{campaign.title}</h1>*/}
        {/*<div>when: {transactionDate}</div>*/}
        {/*<div>Amount: {amount}</div>*/}
    </DonationContainer>
    )
}

export default Donation;
