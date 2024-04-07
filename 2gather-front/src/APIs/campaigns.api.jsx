import axios from "axios";
const api = axios.create({baseURL: "https://localhost:3001",});

const createCampaigns = async (campaign) => {
    await api.post("/campaigns/", campaign);
};

const fetchCampaigns = async (id) => {
    const search = id ? id : "";
    const response = await api.get(`/campaigns/${search}`);
    return response.data;
};

const updateCampaign = async (id, Campaign) => {
    await api.put(`/damage-reports/${id}`, Campaign);
};

export { createCampaigns, fetchCampaigns, updateCampaign };