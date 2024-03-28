import React, {useEffect, useState} from 'react'
import {Routes, Route, Navigate, Link} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Campaigns from "./pages/Campaigns/Campaigns.jsx";
import axios from "axios";
import './App.css'
import Header from './components/Header/Header';

const App = () => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const url = `http://localhost:3000/users/login/success`;
            await axios.get(url)
                .then(response => {
                    setUser(response.data);
                })
                .catch(err => console.log(err));
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="App">
            <Header/>
            <Routes>
                    <Route exact path="/" element={<Campaigns/>}/>
                    {/*<Route exact path="/" element={user ? <Home user={user}/> : <Navigate to="/login"/>}/>*/}
                    {/*<Route exact path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>*/}
                    {/*<Route exact path="/signup" element={user ? <Navigate to="/"/> : <Signup/>}/>*/}
            </Routes>
        </div>
    );
}

export default App
