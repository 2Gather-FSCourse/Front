import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const createCampaigns = async (campaign) => {
  console.log(campaign);
  return api.post('/campaigns/', campaign);
};

const fetchCampaigns = async (id) => {
  const search = id || '';
  const response = await api.get(`/campaigns/${search}`);
  return response.data;
};

const updateCampaign = async (id, Campaign) => {
  await api.put(`/damage-reports/${id}`, Campaign);
};

export { createCampaigns, fetchCampaigns, updateCampaign };
