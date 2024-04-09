import axios from "axios";
const api = axios.create({baseURL: "https://server-2gwk.onrender.com",});
// const api = axios.create({baseURL: "http://localhost:3000",});


const createCampaigns = async (campaign) => {
  await api.post('/campaigns/', campaign);
};

const fetchCampaignById = async (id) => {
  return api.get(`/campaigns/${id}`);
};

const searchCampaigns = async (searchTerm) => {
  const response = await api.get(`/campaigns/search/${searchTerm}`);
  return response.data;
};

const fetchCampaigns = async (id) => {
  const search = id || '';
  const response = await api.get(`/campaigns/${search}`);
  return response.data;
};

const updateCampaign = async (id, Campaign) => {
  await api.put(`/campaigns/${id}`, Campaign);
};

export { createCampaigns, fetchCampaigns, updateCampaign, fetchCampaignById, searchCampaigns };
