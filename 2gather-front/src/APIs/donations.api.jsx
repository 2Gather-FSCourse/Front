import axios from "axios";

const baseURL = "https://server-2gwk.onrender.com";
// const baseURL = "http://localhost:3000";


const createDonation = async (body) => {
    const result = await axios.post(`${baseURL}/donations`, body);
    return result.data;
};

const getDonationByUserId = async (userId) => {
    return await axios.get(`${baseURL}/donations/list/${userId}`);
};


const getDonationByCampaignId = async (campaignId) => {
    return await axios.get(`${baseURL}/donations/campaign/${campaignId}`);
};


const getDonations = async (userId) => {
    return await axios.get(`${baseURL}/donations/`);
};

export { createDonation, getDonationByUserId, getDonations };
