import React from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer, LoginButton, ButtonText, LoginHeading, LoginPage, Footer } from './Login.style';


function Login(){
    const googleAuth = () => {
        window.open(`http://localhost:3000/users/google/callback`, "_self");
    };

    return(
        <LoginPage>
            <LoginContainer>
            <LoginHeading>Login into your account</LoginHeading>
                <LoginButton onClick={googleAuth}><ButtonText>Login with Google</ButtonText></LoginButton>
            <div>
                <Link to="/signup">Register</Link>
            </div>
            </LoginContainer>
            <Footer></Footer>
        </LoginPage>
    );
}

export default Login;
