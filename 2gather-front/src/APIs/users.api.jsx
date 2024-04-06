import axios from "axios";

const baseURL = "http://localhost:3000/users/login/success";

export const authnicateUser = async () => {
    return await axios.get(baseURL)
        .then(response => {
            return response.data.user;
        })
        .catch(err => console.log(err));
}


