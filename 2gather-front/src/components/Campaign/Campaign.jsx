import React from 'react';
import {CampaignContainer, CardImage, DonateButton, Progress, ProgressBar} from "./Campign.styled.jsx";
import {CardContent} from "@mui/material";



const Campaign = (props) => {
    const {_id,title, campaignImage} = props.campaign;
    console.log(campaignImage);

    return (
        <CampaignContainer>
            <CardImage>
                {campaignImage && <img src={campaignImage} alt={title} />}
            </CardImage>
            <CardContent>
                <h3>{title}</h3>

                <DonateButton onClick={donateClickHandler}>Donate Now</DonateButton>
            </CardContent>
        </CampaignContainer>
    );
};

export default Campaign;
