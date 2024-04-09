import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000' });

const createCampaigns = async (campaign) => {
  await api.post('/campaigns/', campaign);
};

const fetchCampaignById = async (id) =>
// const response = await api.get(`/campaigns/${id}`);
// return response.data;
  await api.get(`/campaigns/${id}`);
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
  await api.put(`/damage-reports/${id}`, Campaign);
};

export {
  createCampaigns, fetchCampaigns, updateCampaign, searchCampaigns, fetchCampaignById,
};
