import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Button } from '../../components/Button/Button';
import {LoginContainer, LoginHeading, PageContainer} from "./Signup.style.js";

function Signup(){
    const googleAuth = () => {
        window.open(`http://localhost:3000/users/google/callback`, "_self");
    };
    return(
        <PageContainer>
        <LoginContainer>
            <LoginHeading>Sign Up</LoginHeading>
            <RegisterForm formMod={"create"} message={"message"} setMessage={"setMessage"}
                          //setIsError={setIsError}
            />
        </LoginContainer>
                <Button onClick={googleAuth} text={'Sign Up with Google'} isEmpty={true}></Button>
                <Link to="/login">Already signed?</Link>
        </PageContainer>
    );
}

export default Signup;
