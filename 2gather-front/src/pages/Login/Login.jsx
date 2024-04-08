import React from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer, LoginButton, ButtonText, LoginHeading, LoginPage, Footer } from './Login.style';
import LoginForm from './LoginForm.jsx'


function Login(props){
    const {setUser, setMessage, message, setIsError }= props;
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
            <Footer>
                <LoginForm setUser={setUser} setMessage={setMessage} message={message} setIsError={setIsError}/>

            </Footer>
        </LoginPage>
    );
}

export default Login;
