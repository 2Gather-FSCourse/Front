import React from 'react'
import {ColumnContainer, FormStyle, RowContainer, FormContainer} from '../../components/RegisterForm/RegisterForm.style'
import  TextInput from '../../components/TextInput/TextInput'
import { LoginUser } from '../../APIs/users.api.jsx';
import { Button } from "../../components/Button/Button";

const LoginForm = (props) => {
// , message, setMessage, createReport, setIsError
    const setUser = props;
    const [userData, setUserData] = React.useState({userType: 'Donor',});
    const [isSuccess, setIsSuccess] = React.useState(false);
    

    const handleForm = async (e) => {
        const {id, value} = e.currentTarget || e.target;
        // Check if userData is not null or undefined before spreading it
        const updatedFormData = userData ? {...userData} : {};
        if (value === '') {
            delete updatedFormData[id];
        } else {
            updatedFormData[id] = value;
        }
        setUserData(updatedFormData);
    }


    const login = async (e, userData) => {
        e.preventDefault();
        if (Object.keys(userData).length < 2) {
            // setMessage("Please fill in all the fields");
            return;
        }

        const LoginInfo={
            email: userData.email,
            password: userData.password,
        }
        const res = await LoginUser(LoginInfo);
        console.log(res);
        if (res) {
            setUser(res.data.user);
            // setMessage("Report Created Successfully");
            setIsSuccess(true);
            // setIsError(true);
        } else {
            // setMessage("Report Creation Failed");
            setIsSuccess(false)
        }
    }

    return (
        <FormContainer>
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
                    <Button text={"Login"} onClick={login} isEmpty={true}/>
                </FormStyle>
            }
        </FormContainer>
    )

}

export default LoginForm;
