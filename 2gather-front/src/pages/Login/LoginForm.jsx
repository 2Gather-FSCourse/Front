import React from 'react'
import {ColumnContainer, FormStyle, RowContainer, FormContainer, TextFieldStyle} from '../../components/RegisterForm/RegisterForm.style'
import { LoginUser } from '../../APIs/users.api.jsx';
import { Button } from "../../components/Button/Button";

const LoginForm = (props) => {
// , message, setMessage, createReport, setIsError
    const setUser = props;
    const [userData, setUserData] = React.useState({userType: 'Donor',});
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleForm = async (e) => {
        const {id, value} = e.currentTarget || e.target;
        const updatedFormData = {...userData};
        // setMessage("");
        if (value === '') {
            delete updatedFormData[id];
        } else {
            updatedFormData[id] = value;
        }
        setUserData(updatedFormData);
    }


    const login = async (e, formData) => {
        e.preventDefault();
        if (Object.keys(formData).length < 2) {
            // setMessage("Please fill in all the fields");
            return;
        }

        const LoginInfo={
            email: formData.email,
            password: formData.password,
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
                    <ColumnContainer>
                        <RowContainer>
                            <TextFieldStyle
                                id={"email"}
                                label="Email Address"
                                multiline
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextFieldStyle
                                id={"password"}
                                label="Password"
                                multiline
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
                        </RowContainer>
                    </ColumnContainer>
                    <Button text={"Submit"} onClick={login} isEmpty={true}/>
                </FormStyle>
            }
        </FormContainer>
    )

}

export default LoginForm;
