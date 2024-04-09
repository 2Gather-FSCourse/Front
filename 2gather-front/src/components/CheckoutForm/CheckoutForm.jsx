import React from 'react';
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { ButtonStyled } from "./CheckoutForm.styled";
import { createDonation } from "../../APIs/donations.api";

const CheckoutForm = ({ user, campaignId }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsProcessing(true);
        const body = {
            userId: user.id,
            campaignId: campaignId,
            amount: 50,
        };

        try {
            // Save donation to database
            const serverRes = await createDonation(body);
        } catch (error) {
            console.error("Error saving donation:", error);
            setMessage("Failed to save donation information");
        }

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/paymentResult`,
            },
        });

        if (result.error) {
            if (result.error.type === "card_error" || result.error.type === "validation_error") {
                setMessage(result.error.message);
            } else {
                setMessage("An unexpected error occurred.");
            }
        }

        setIsProcessing(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <ButtonStyled disabled={isProcessing || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isProcessing ? "Processing ... " : "Pay now"}
                </span>
            </ButtonStyled>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
};

export default CheckoutForm;
