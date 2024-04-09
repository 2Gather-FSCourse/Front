import React, { useEffect, useState} from 'react'
import {ColumnContainer, FormStyle, StyledSelect, FormContainer, StyledMenuItem} from './RegisterForm.style';
import { LoginHeading } from '../../pages/Login/Login.style';
import { createUser, updateUser } from '../../APIs/users.api.jsx';
import { Button } from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import {Msg} from "../Msg/Msg";
import {useNavigate} from "react-router-dom";
import { GetAllOrganizations } from '../../APIs/organizations.api';


const RegisterForm = (props) => {
    const { formMod, message, setMessage, setIsError } = props
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const [userData, setUserData] = React.useState(user ||{ userType: 'Donor',});
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [organizations, setOrganizations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetAllOrganizations()
            .then(data => {
                setOrganizations(data);
            })
            .catch(error => {
                console.error('Error fetching organizations:', error);

            });
    }, []);


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
            setTimeout(() => { setMessage('') }, 5000);
            return;
        }

        const user={
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            userType: formData.userType,
            age: formData.age,
            password: formData.password,
            orgId: formData.orgId || null
        }
        const res = await createUser(user);
        console.log(res);
        if (res) {
            setMessage("User Registered Successfully");
            setTimeout(() => { setMessage('') }, 5000);
            setIsSuccess(true);
            navigate('/login');
            setIsError(true);
        } else {
            setMessage("User Registration Failed");
            setTimeout(() => { setMessage('') }, 5000);
            setIsSuccess(false)
            setIsError(true);
        }
    }

    const Update = async (e, formData) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.email || !formData.userType || !formData.age || !formData.password) {
            setMessage("Please fill All the requested fields");
            setTimeout(() => { setMessage('') }, 5000);
            return;
        }

        const updatedInfo={
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            userType: formData.userType,
            age: formData.age,
            password: formData.password,
            orgId: formData.orgId || null
        }
        const res = await updateUser(user.id, updatedInfo);
        console.log(res);
        if (res) {
            setMessage("User Updated Successfully");
            setTimeout(() => { setMessage('') }, 5000);
            setIsSuccess(true);
            navigate('/');
            setIsError(true);
        } else {
            setMessage("User Update Failed");
            setTimeout(() => { setMessage('') }, 5000);
            setIsSuccess(false)
            setIsError(true);
        }
    }

    return (
        <FormContainer>
            {isSuccess && message && <Msg message={message}/>}
            {formMod === "create" && <LoginHeading>Create Account</LoginHeading>}
            {formMod === "update" && <LoginHeading>Update Account</LoginHeading>}
            {/*{!isSuccess &&*/}
                <FormStyle onSubmit={(e) => {formMod ==="create" ? Register(e, userData) : Update(e,userData) }}>
                    <ColumnContainer>
                        <TextInput
                            id={"name"}
                            label="Full Name"
                            type={"text"}
                            multiline
                            width={"100%"}
                            value={formMod === "update" ? userData.name : ''}
                            onChange={(e) => handleForm(e)}
                        />
                            <TextInput
                                id={"age"}
                                type={"number"}
                                min={18}
                                max={100}
                                label="Age"
                                multiline
                                width={"100%"}
                                value={formMod === "update" ? userData.age : ''}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextInput
                                id={"phone"}
                                label="Contact Number"
                                type={"tel"}
                                multiline
                                width={"100%"}
                                value={formMod === "update" ? userData.phone : ''}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextInput
                                id={"email"}
                                label="Email Address"
                                multiline
                                type={"email"}
                                width={"100%"}
                                value={formMod === "update" ? userData.email : ''}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextInput
                                id={"password"}
                                label="Password"
                                type={"password"}
                                multiline
                                width={"100%"}
                                value={formMod === "update" ? userData.password : ''}
                                onChange={(e) => handleForm(e)}
                            />
                            <StyledSelect
                                id={"userType"}
                                label="Type"
                                {...(formMod == "update" ? {value: userData.userType} : {value: userData.userType || ''})}

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
                        {userData.userType === "Organization" ? (
                            <StyledSelect
                                id={"orgId"}
                                label="Organization"
                                value={formMod === "update" ? userData.orgId : ''}
                                onChange={(e,child) => handleForm(e,child)}
                                width={"100%"}
                            >
                                { organizations.map((org) => (
                                    console.log(org),
                                    <StyledMenuItem
                                        key={org._id}
                                        id={"orgId"}
                                        value={org.org_id}
                                        width="100%"
                                    >{org.title}</StyledMenuItem>
                                ))}
                            </StyledSelect>
                            ) : null}
                    </ColumnContainer>
                    <Button text={"Sign Up"} onClick={(e) =>{ formMod === "create" ? Register(e,userData) : Update(e,userData)}} isEmpty={true}/>
                </FormStyle>
            {/*}*/}
        </FormContainer>
    )

}

export default RegisterForm;
