import axios from 'axios';

const api = axios.create({ baseURL: 'https://server-2gwk.onrender.com' });

const createCampaigns = async (campaign) => {
  await api.post('/campaigns/', campaign);
};

const fetchCampaignById = async (id) => api.get(`/campaigns/${id}`);

const searchCampaigns = async (searchTerm) => {
  if (!searchTerm) return await fetchCampaigns();
  console.log(searchTerm);
  const response = await api.get(`/campaigns/search/${searchTerm}`);
  return response.data;
};

const fetchCampaigns = async () => {
  const response = await api.get('/campaigns/');
  return response.data;
};

const updateCampaign = async (id, Campaign) => {
  await api.put(`/campaigns/${id}`, Campaign);
};

export {
  createCampaigns, fetchCampaigns, updateCampaign, fetchCampaignById, searchCampaigns,
};
