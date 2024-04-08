import React from 'react'
import {ColumnContainer, FormStyle, StyledSelect, FormContainer, StyledMenuItem} from './RegisterForm.style';
import { createUser } from '../../APIs/users.api.jsx';
import { Button } from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import {Msg} from "../Msg/Msg";
import {useNavigate} from "react-router-dom";


const RegisterForm = (props) => {
    const { formMod, message, setMessage, setIsError } = props
    const [userData, setUserData] = React.useState({userType: 'Donor',});
    const [isSuccess, setIsSuccess] = React.useState(false);
    const navigate = useNavigate();


    const handleForm = (e, child) => {
        const id = child ? child.props.id : e.currentTarget.id;
        const value = child ? child.props.value : e.currentTarget.value;
        const updatedFormData = {...userData};
        setMessage("");
        if (value === '') {
            delete updatedFormData[id];
        } else {
            updatedFormData[id] = value;
        }
        setUserData(updatedFormData);
    }


    const Register = async (e, formData) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.email || !formData.userType || !formData.age || !formData.password) {
            setMessage("Please fill All the requested fields");
            return;
        }

        const user={
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            userType: formData.userType,
            age: formData.age,
            password: formData.password,
        }
        const res = await createUser(user);
        console.log(res);
        if (res) {
            setMessage("User Registered Successfully");
            setIsSuccess(true);
            navigate('/login');
            setIsError(true);
        } else {
            setMessage("User Registration Failed");
            setIsSuccess(false)
        }
    }

    return (
        <FormContainer>
            {isSuccess && message && <Msg message={message}/>}
            {/*{formMod === "create" && <SubTitle>Create Account</SubTitle>}*/}
            {/*{formMod === "update" && <ReportTitle>Update Report</ReportTitle>}*/}
            {/*{!isSuccess &&*/}
                <FormStyle onSubmit={(e) => Register(e, userData)}>
                    <ColumnContainer>
                        <TextInput
                            id={"name"}
                            label="Full Name"
                            type={"text"}
                            multiline
                            width={"100%"}
                            onChange={(e) => handleForm(e)}
                        />
                            <TextInput
                                id={"age"}
                                type={"number"}
                                label="Age"
                                multiline
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextInput
                                id={"phone"}
                                label="Contact Number"
                                type={"tel"}
                                multiline
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextInput
                                id={"email"}
                                label="Email Address"
                                multiline
                                type={"email"}
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextInput
                                id={"password"}
                                label="Password"
                                type={"password"}
                                multiline
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <StyledSelect
                                id={"userType"}
                                label="Type"
                                value={userData.userType || ''}
                                onChange={(e,child) => handleForm(e,child)}
                                width={"100%"}
                            >
                                <StyledMenuItem
                                    id={"userType"}
                                    value={"Donor"}
                                    width="100%"
                                >Donor</StyledMenuItem>
                                <StyledMenuItem
                                    id={"userType"}
                                    value={"Organization"}
                                    width="100%"
                                >Organization</StyledMenuItem>
                            </StyledSelect>
                    </ColumnContainer>
                    <Button text={"Sign Up"} onClick={(e) =>Register(e,userData)} isEmpty={true}/>
                </FormStyle>
            {/*}*/}
        </FormContainer>
    )

}

export default RegisterForm;
