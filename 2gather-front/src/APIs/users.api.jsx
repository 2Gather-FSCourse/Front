import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000",
});

export const getUser = async () => {
    try {
        const url = "/users/login/success";
        const { data } = await http.get(url);
        return data;
    } catch (err) {
        console.log(err);
    }
}
