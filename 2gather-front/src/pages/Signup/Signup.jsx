import React from 'react';
import { Link } from 'react-router-dom';

function Signup(){
    const googleAuth = () => {
        window.open(`http:localhost:3000/users/google/callback`, "_self");
    };
    return(
        <div>
            <h1>Sign Up</h1>
            <div>
                <button onClick={googleAuth}><span>Google</span></button>
            </div>
            <div>
                <Link to="/login">Already signed?</Link>
            </div>
        </div>
    );
}

export default Signup;
