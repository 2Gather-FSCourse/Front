import axios from "axios";

const googleURL = "http://localhost:3000/users/login/success";

const usersURL = "http://localhost:3000/users";

export const authenticateUser = async () => {
    return await axios.get(googleURL);
}

export const createUser = async (user) => {
    return await axios.post(usersURL, user);
}

export const LoginUser = async (user) => {
    return await axios.post(`${usersURL}/login`, user);
}



