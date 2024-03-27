import { Link } from 'react-router-dom';
/* global process */


function Signup(){
    const googleAuth = () => {
        window.open(`${process.env.REACT_APP_API_URL}/users/google/callback`, "_self");
    };
    return(
        <div>
            <h1>Sign Up</h1>
            <div>
                <button onClick={googleAuth}><span>Google</span></button>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}

export default Signup;
