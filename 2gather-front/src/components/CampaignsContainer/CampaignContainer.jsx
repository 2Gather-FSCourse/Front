import React, {useEffect, useState} from 'react';
import { searchCampaigns} from '../../APIs/campaigns.api.jsx';
// import {CampaignListWrapperStyled} from "../../pages/Campaigns/CampaignsList/CampagnList.styled.jsx";

 const CampaignContainer = (props) => {
    const {search, refresh, setRefresh}  = props;
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
            <h2>Campaigns</h2>
            <div>
                {campaigns.map((campaign) => (
                    <div key={campaign._id}>
                        <h3>{campaign.name}</h3>
                        <p>{campaign.description}</p>
                        <p>{campaign.startDate}</p>
                        <p>{campaign.endDate}</p>
                        <p>{campaign.goal}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

 export default CampaignContainer;
