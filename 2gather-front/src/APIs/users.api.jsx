import axios from "axios";

const googleURL = "https://server-2gwk.onrender.com/users/login/success";

const usersURL = "https://server-2gwk.onrender.com/users";
// const usersURL = "http://localhost:3000/users";


export const authenticateUser = async () => {
    return await axios.get(googleURL);
}

export const getUser = async (id) => {
    return await axios.get(`${usersURL}/${id}`);

}

export const getUsers = async () => {
    return await axios.get(usersURL);
}

export const createUser = async (user) => {
    return await axios.post(usersURL, user);
}

export const updateUser = async (id,user) => {
    return await axios.put(`${usersURL}/${id}`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersURL}/${id}`);
}

export const LoginUser = async (user) => {
    return await axios.post(`${usersURL}/login`, user);
}



