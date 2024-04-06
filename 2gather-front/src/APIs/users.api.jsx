import axios from "axios";

const baseURL = "http://localhost:3000/users/login/success";

export const authenticateUser = async () => {
    return await axios.get(baseURL);
}

// export const authenticate = async () => {
//     return await axios.post(authURL)
//         .then(response => {
//             return response.data;
//         })
//         .catch(err => console.log(err));
// }


