import React, {useEffect, useState} from 'react';
import Donation from '../../components/Donation/Donation';
import { DonationsContainer, PageHeader } from './Donations.style.js';
import { getDonationByUserId } from '../../APIs/donations.api';


const Donations = () => {

    const [donations, setDonations] = useState([]);
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    // useEffect(() => {
    //     getDonationByUserId(user.id)
    //         .then(data => {
    //             setDonations(data.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching donations:', error);
    //         });
    // }, []);

    return (
        <div>
        <PageHeader>Donations</PageHeader>
        <DonationsContainer>
            {/*{donations.map((donation) => {*/}
            {/*    return (*/}
            {/*        <Donation key={donation.id} campaignId={donation.campaignId} amount={donation.amount} transactionDate={donation.transactionDate}></Donation>*/}
            {/*    )*/}
            {/*})}*/}
        <Donation></Donation>
            <Donation></Donation>
            <Donation></Donation>
            <Donation></Donation>
            <Donation></Donation>
            <Donation></Donation>
            <Donation></Donation>
        </DonationsContainer>
        </div>
    )
}

export default Donations;
