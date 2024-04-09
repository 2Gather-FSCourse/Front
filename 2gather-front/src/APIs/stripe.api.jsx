import axios from "axios";

const api = axios.create({baseURL: "https://localhost:3000",});

const getPublicKey = async () => {
    return await api.get("/campaigns/");
};
