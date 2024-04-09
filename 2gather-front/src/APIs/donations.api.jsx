import axios from "axios";

const baseURL = "http://localhost:3000";



const createDonation = async () => {
    return await axios.post(`${baseURL}/donations`);

};

export {createDonation};
