import React from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer, LoginHeading, LoginPage, Footer, StyledLink } from './Login.style';
import LoginForm from './LoginForm.jsx'


function Login(props){
    const { setMessage, message, setIsError }= props;
    const googleAuth = () => {
        window.open(`http://localhost:3000/users/google/callback`, "_self");
    };

    return(
        <LoginPage>
            <LoginContainer>
            <LoginHeading>Login into your account</LoginHeading>
                <LoginForm setMessage={setMessage} message={message} setIsError={setIsError}/>
            <div>
            </div>
            </LoginContainer>
                <StyledLink to="/signup">new here? Register!</StyledLink>
            <Footer>
                {/*<LoginButton onClick={googleAuth}><ButtonText>Login with Google</ButtonText></LoginButton>*/}

            </Footer>
        </LoginPage>
    );
}

export default Login;
