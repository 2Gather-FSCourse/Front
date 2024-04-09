import React, {useEffect, useState} from 'react'
import {json, Navigate, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import './App.css'
import Header from './components/Header/Header';
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs.jsx";
import AppreciationWall from './pages/AppreciationWall/AppreciationWall';
import CampaignPage from './pages/CampaignPage/CampaignPage.jsx';
import Profile from './pages/Profile/Profile';
import {Msg} from "./components/Msg/Msg";


const App = () => {
    // const [user, setUser] = useState(null);
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    return (
        <div className="App">
            <Header/>
            {message && <Msg msg={message} isError={isError}/>}
            <Routes>
                <Route path="/appreciationWall" element={<AppreciationWall/>}/>
                <Route path="/campaigns/id" element={<CampaignPage totalDonations={1594} campaignGoal={6900}/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/" element={user ? <Home user={user}/> : <Navigate to="/login"/>}/>
                <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login message={message} setMessage={setMessage} setIsError={setIsError}/>}/>

                <Route exact path="/signup" element={user ?
                    <Signup message={message} setMessage={setMessage} setIsError={setIsError} formMod={"update"}/> :
                    <Signup message={message} setMessage={setMessage} setIsError={setIsError} formMod={"create"} />
                }/>
            </Routes>
        </div>
    );
}

export default App
