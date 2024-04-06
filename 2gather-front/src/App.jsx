import React, {useEffect, useState} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
// import axios from "axios";
import './App.css'
import Header from './components/Header/Header';
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs.jsx";
import AppreciationWall from './pages/AppreciationWall/AppreciationWall';
import {authnicateUser} from './APIs/users.api.jsx';

const App = () => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const user = await authnicateUser();
        // console.log(user);
        setUser(user);
    };

    useEffect(() => {
        getUser().then(() => console.log("User Authenticated"));
    }, []);

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/appreciationWall" element={<AppreciationWall/>}/>
                <Route exact path="/" element={<Home/>}/>
                {/*<Route exact path="/" element={user ? <Home user={user}/> : <Navigate to="/login"/>}/>*/}
                <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
                <Route exact path="/signup" element={user ? <Navigate to="/"/> : <Signup/>}/>
            </Routes>
        </div>
    );
}

export default App
