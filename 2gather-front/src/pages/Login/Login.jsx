import React from 'react';
import { Link } from 'react-router-dom';
// import { authenticate } from '../../APIs/users.api';


function Login(){
    const googleAuth = () => {
        window.open(`http://localhost:3000/users/google/callback`, "_self");
    };


    //
    // const navigate = (url) => {
    //     window.location.href = url;
    // }

    // const auth = async () => {
    // const res = await  fetch('http://localhost:3000/users/google/verify', {
    //     method: 'post'});
    //     const data = authenticate();
    //     console.log(data);
    // navigate(data.url);
    // }
    return(
        <div>
            <h1>Login</h1>
            <div>
                <button onClick={googleAuth}><span>Google</span></button>
                {/*<button onClick={auth}><span>Google</span></button>*/}
            </div>
            <div>
                <Link to="/signup">Register</Link>
            </div>
        </div>
    );
}

export default Login;
