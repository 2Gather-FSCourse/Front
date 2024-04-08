import React, {useEffect, useState} from 'react'
import {json, Navigate, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import './App.css'
import Header from './components/Header/Header';
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs.jsx";
import AppreciationWall from './pages/AppreciationWall/AppreciationWall';
import Campaigns from './pages/Campaigns/Campaigns';
import {Msg} from "./components/Msg/Msg";

const App = () => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);



    return (
        <div className="App">
            <Header/>
            {message && <Msg msg={message} isError={isError}/>}
            <Routes>
                <Route path="/appreciationWall" element={<AppreciationWall/>}/>
                <Route path="/campaigns" element={<Campaigns totalDonations={1594} campaignGoal={6900}/>}/>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/" element={user ? <Home user={user}/> : <Navigate to="/login"/>}/>
                {/*<Route exact path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>*/}
                <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login setUser={setUser} message={message} setMessage={setMessage} setIsError={setIsError}/>}/>
                <Route exact path="/signup" element={user ? <Navigate to="/"/> : <Signup message={message} setMessage={message} setIsError={setIsError}/>}/>
            </Routes>
        </div>
    );
}

export default App
