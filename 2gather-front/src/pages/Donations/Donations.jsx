import React, {useEffect, useState} from 'react';
import Donation from '../../components/Donation/Donation';
import { DonationsContainer, PageHeader } from './Donations.style.js';
import { getDonationByUserId } from '../../APIs/donations.api';


const Donations = () => {

    const [donations, setDonations] = useState([]);
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const userId = user.id.toString();

    useEffect(() => {
        getDonationByUserId(userId)
            .then(data => {
                setDonations(data.data);
            })
            .catch(error => {
                console.error('Error fetching donations:', error);
            });
    }, []);

    return (
        <div>
        <PageHeader>Donations</PageHeader>
        <DonationsContainer>
            {donations.length > 0 ? (
                donations.map((donation) => {
                return (
                    <Donation key={donation._id} campaignId={donation.campaignId} amount={donation.amount} transactionDate={donation.transactionDate}></Donation>
                )
            })) : ( <h1>No donations yet</h1>
                )}
        </DonationsContainer>
        </div>
    )
}

export default Donations;
