import axios from "axios";

const baseURL = "https://server-2gwk.onrender.com";

export const getPaymentIntent = async () => {
    const result = await axios.post(`${baseURL}/stripe`);
    return result.data;
};
