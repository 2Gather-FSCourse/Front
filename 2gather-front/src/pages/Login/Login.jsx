import React from 'react';
import { Link } from 'react-router-dom';


function Login(){
    const googleAuth = () => {
        window.open(`http:localhost:3000/users/google/callback`, "_self");
    };
    return(
        <div>
            <h1>Login</h1>
            <div>
                <button onClick={googleAuth}><span>Google</span></button>
            </div>
            <div>
                <Link to="/signup">Register</Link>
            </div>
        </div>
    );
}

export default Login;
