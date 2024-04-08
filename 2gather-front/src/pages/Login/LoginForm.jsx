import React from 'react'
import {ColumnContainer, FormStyle, RowContainer, FormContainer} from '../../components/RegisterForm/RegisterForm.style'
import  TextInput from '../../components/TextInput/TextInput'
import { LoginUser } from '../../APIs/users.api.jsx';
import { Button } from "../../components/Button/Button";
import { Msg } from "../../components/Msg/Msg";

const LoginForm = (props) => {
// , createReport, setIsError
    const {setUser , message, setMessage , setIsError}= props;
    const [userData, setUserData] = React.useState({userType: 'Donor',});
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleForm = (e) => {
        const { id, value } = e.target;
        setUserData(prevState => ({ ...prevState, [id]: value }));
    }


    const login = async (e, userData) => {
        e.preventDefault();
        if (Object.keys(userData).length < 2) {
            setMessage("Please fill in all the fields");
            return;
        }

        const LoginInfo={
            email: userData.email,
            password: userData.password,
        }
        try{
            const res = await LoginUser(LoginInfo);
            if (res) {
                setUser(res.data.user);
                setMessage("Logged in Successfully");
                setIsSuccess(true);
            } else {
                setMessage("Login Failed");
                setIsSuccess(false)
                setIsError(true);
            }
        } catch (err){
            console.log(err);
            setMessage(err);
            setIsError(true);
        }
    }

    return (
        <FormContainer>
            {isSuccess && message && <Msg message={message}/>}
            {!isSuccess &&
                <FormStyle onSubmit={(e) => login(e, userData)}>
                    {/*<ColumnContainer>*/}
                        <RowContainer>
                            <TextInput
                                id={"email"}
                                type={"email"}
                                label="Email Address"
                                multiline
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextInput
                                id={"password"}
                                type={"password"}
                                label="Password"
                                multiline
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
                        </RowContainer>
                    {/*</ColumnContainer>*/}
                    <Button text={"Login"} onClick={(e) => login(e,userData)} isEmpty={true}/>
                </FormStyle>
            }
        </FormContainer>
    )

}

export default LoginForm;
