import React, { useEffect, useState } from 'react'
import { json, Navigate, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import './App.css'
import Header from './components/Header/Header';
import AppreciationWall from './pages/AppreciationWall/AppreciationWall';
import CampaignPage from './pages/CampaignPage/CampaignPage.jsx';
import Profile from './pages/Profile/Profile';
import Payment from "./pages/Payment/Payment";
import PaymentReult from "./pages/PaymentResult/PaymentResult";
import { Msg } from "./components/Msg/Msg";
import CampaignForm from "./pages/Campaigns/CampignForm/CampaignForm.jsx";
import { CampaignList } from "./pages/Campaigns/CampaignsList/CampaignList.jsx";
import Donations from "./pages/Donations/Donations.jsx";

const App = () => {
    // const [user, setUser] = useState(null);
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    return (
        <div className="App">
            <Header />
            {message && <Msg msg={message} isError={isError} />}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/appreciationWall" element={<AppreciationWall />} />
                <Route path="/campaigns/id" element={<CampaignPage user={user} campaignId={'6613e9b67398036000e77ac0'} totalDonations={1594} campaignGoal={6900} />} />
                <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login message={message} setMessage={setMessage} setIsError={setIsError} />} />
                <Route path="/campaigns/form" element={<CampaignForm />} />
                <Route path="/campaigns" element={<CampaignList />} />
                <Route exact path="/donations" element={<Donations />} />
                <Route path='/donate' element={user ? <Payment user={user} /> : <Navigate to="/login" />} />
                <Route path='/paymentResult' element={user ? <PaymentReult user={user} /> : <Navigate to="/login" />} />
                <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login message={message} setMessage={setMessage} setIsError={setIsError} />} />
                <Route exact path="/signup" element={user ?
                    <Signup message={message} setMessage={setMessage} setIsError={setIsError} formMod={"update"} /> :
                    <Signup message={message} setMessage={setMessage} setIsError={setIsError} formMod={"create"} />
                } />
            </Routes>
        </div>
    );
}

export default App
