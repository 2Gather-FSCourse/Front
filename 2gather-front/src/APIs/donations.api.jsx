import axios from "axios";

const baseURL = "http://localhost:3000";

const createDonation = async (body) => {
    const result = await axios.post(`${baseURL}/donations`, body);
    return result.data;
};

const getDonationByUserId = async (userId) => {
    return await axios.get(`${baseURL}/donations/list/${userId}` );

};

export {createDonation, getDonationByUserId};
