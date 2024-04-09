import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { PaymentStyled } from './Payment.styled';
import { loadStripe } from '@stripe/stripe-js';
import { getPaymentIntent } from '../../APIs/stripe.api';
const baseURL = "http://localhost:3000";

const Payment = ({ user }) => {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    // const [campaignId, setCampaignId] = useState("");
 
    useEffect(() => {
        setStripePromise(loadStripe('pk_test_51OyuRrDgt4I0wPiKSSAIhkKNlskhOycoKtuVcr5yOJMv7KcXjiJ1YV7GLT3ye90QAvxWQljx2VCmcwRFICo5KHWS00ibevbvte'));
    }, []);

    useEffect(() => {
        async function fetchClientSecret() {
            const result = await getPaymentIntent();
            console.log(result);
            const clientSecret = result.clientSecret;
            setClientSecret(clientSecret);
        }
        fetchClientSecret();
    }, []);

    // useEffect(() => {
    //     const url = window.location.href;
    //     const campaignId = url.split("=")[1];
    //     setCampaignId(campaignId);
    // }, []);

    return (
        <PaymentStyled>
            <PageTitle title="Payment" />
            {
                clientSecret && stripePromise && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm user={user} campaignId={'6613e9b67398036000e77abf'} clientSecret={clientSecret} />
                    </Elements>
                )
            }
        </PaymentStyled>
    );
};

export default Payment;
