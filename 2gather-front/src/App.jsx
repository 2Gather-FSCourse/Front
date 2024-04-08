import React, {useEffect, useState} from 'react'
import {json, Navigate, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
// import axios from "axios";
import './App.css'
import Header from './components/Header/Header';
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs.jsx";
import AppreciationWall from './pages/AppreciationWall/AppreciationWall';
import Campaigns from './pages/Campaigns/Campaigns';
import {authenticateUser} from './APIs/users.api.jsx';

const App = () => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        // try{
        //     const res = await authenticateUser();
        //     if(res.status === 200){
        //         setUser(res.data.user);
        //     }else{
        //         setUser(null);
        //         console.log(res.data.message);
        //     }
        // } catch (error){
        //     console.log(error);
        // }
    }

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/appreciationWall" element={<AppreciationWall/>}/>
                <Route path="/campaigns" element={<Campaigns totalDonations={1594} campaignGoal={6900}/>}/>
                <Route exact path="/" element={<Home/>}/>
                {/*<Route exact path="/" element={user ? <Home user={user}/> : <Navigate to="/login"/>}/>*/}
                <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
                <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login setUser={setUser}/>}/>
                <Route exact path="/signup" element={user ? <Navigate to="/"/> : <Signup/>}/>
            </Routes>
        </div>
    );
}

export default App
