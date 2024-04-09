import axios from "axios";

const baseURL = "http://localhost:3000";



const createDonation = async () => {
    return await axios.post(`${baseURL}/donations`);

};

const getDonationByUserId = async (userId) => {
    return await axios.get(`${baseURL}/donations/list/${userId}` );

};

export {createDonation, getDonationByUserId};
