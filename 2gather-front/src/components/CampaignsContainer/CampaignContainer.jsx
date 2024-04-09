import React, {useEffect, useState} from 'react';
import { searchCampaigns} from '../../APIs/campaigns.api.jsx';
import Camapign from "../Campaign/Campaign.jsx";
import {CampaignContainerWrapperStyled} from "./CampaignContainer.styled.jsx";
 const CampaignContainer = ({search, refresh, setRefresh}) => {

    const [loading, setLoading] = useState(true);
    const [campaigns, setCampaigns] = useState([]);
    const [message, setMessage] = useState(null);
console.log("CampaignContainer");
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setMessage(null);
                const data = await searchCampaigns(search);
                setCampaigns(data)
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setCampaigns([]);
                    setMessage('No campaigns found for the provided search term.');
                } else if (error.response) {
                    setMessage(
                        `HTTP Error ${error.response.status}: ${error.response.statusText}`,
                    );
                } else {
                    setMessage(error.message);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();

    }, [search, refresh]);

    if (loading) return <h1>Loading...</h1>;
    if (message) return <h2>{message}</h2>;
    if (campaigns.length === 0) return <h2>No Campaign Found</h2>;
console.log(campaigns);
    return (
        <div>
            <CampaignContainerWrapperStyled>
                {campaigns.map((campaign) => (
                    <Camapign
                    key={campaign._id}
                    campaign={campaign}
                    ></Camapign>
                ))}
            </CampaignContainerWrapperStyled>

        </div>
    );
};

 export default CampaignContainer;
