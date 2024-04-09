import React from 'react'
import { FormStyle, FormContainer} from '../../components/RegisterForm/RegisterForm.style'
import  TextInput from '../../components/TextInput/TextInput'
import { LoginUser } from '../../APIs/users.api.jsx';
import { Button } from "../../components/Button/Button";
import { Msg } from "../../components/Msg/Msg";
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
    const { message, setMessage , setIsError}= props;
    const [userData, setUserData] = React.useState({userType: 'Donor',});
    const [isSuccess, setIsSuccess] = React.useState(false);
    const navigate = useNavigate();

    const handleForm = (e) => {
        const { id, value } = e.target;
        setUserData(prevState => ({ ...prevState, [id]: value }));
    }


    const login = async (e, userData) => {
        e.preventDefault();
        if (Object.keys(userData).length < 2) {
            setMessage("Please fill in all the fields");
            setTimeout(() => { setMessage('') }, 5000);
            return;
        }

        const LoginInfo={
            email: userData.email,
            password: userData.password,
        }
        try{
            const res = await LoginUser(LoginInfo);
            if (res) {
                localStorage.setItem('user', JSON.stringify(res.data));
                setMessage("Logged in Successfully");
                setIsSuccess(true);
                setTimeout(() => { setMessage('') }, 5000);
                navigate('/');
            } else {
                setMessage("Login Failed");
                setIsSuccess(false);
                setIsError(true);
                setTimeout(() => { setMessage('') }, 5000);
            }
        } catch (err){
            console.log(err);
            setMessage("Wrong Credentials");
            setIsSuccess(false);
            setIsError(true);
            setTimeout(() => { setMessage('') }, 5000);
        }
    }

    return (
        <FormContainer>
            {isSuccess && message && <Msg message={message}/>}
            {/*{!isSuccess &&*/}
                <FormStyle onSubmit={(e) => login(e, userData)}>
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
                    <Button text={"Login"} onClick={(e) => login(e,userData)} isEmpty={true}/>
                </FormStyle>
            {/*}*/}
        </FormContainer>
    )

}

export default LoginForm;
