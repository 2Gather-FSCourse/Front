import axios from "axios";

const baseURL = "http://localhost:3000";

export const getPaymentIntent = async () => {
    const result = await axios.post(`${baseURL}/stripe`);
    return result.data;
};
