import React from 'react'
import {ColumnContainer, FormStyle, RowContainer, StyledSelect, FormContainer, TextFieldStyle, StyledMenuItem} from './RegisterForm.style';
import { createUser } from '../../APIs/users.api.jsx';
import { Button } from "../Button/Button";
// import {Msg} from "../Msg/Msg";

// TextFieldStyle
const RegisterForm = (props) => {
// , message, setMessage, createReport, setIsError
    const { formMod } = props
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


    const handleSubmit = async (e, formData) => {
        e.preventDefault();
        if (Object.keys(formData).length < 12) {
            // setMessage("Please fill in all the fields");
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
            {/*{isSuccess && message && <Msg message={message}/>}*/}
            {/*{formMod === "create" && <SubTitle>Create Account</SubTitle>}*/}
            {/*{formMod === "update" && <ReportTitle>Update Report</ReportTitle>}*/}
            {!isSuccess &&
                <FormStyle onSubmit={(e) => handleSubmit(e, userData)}>
                    <ColumnContainer>
                        <RowContainer>
                        <TextFieldStyle
                            id={"name"}
                            label="Full Name"
                            multiline
                            width={"47%"}
                            onChange={(e) => handleForm(e)}
                        />
                            <TextFieldStyle
                                id={"age"}
                                label="Age"
                                multiline
                                width={"47%"}
                                onChange={(e) => handleForm(e)}
                            />
                            </RowContainer>
                    </ColumnContainer>
                    <ColumnContainer>
                        <RowContainer>
                            <TextFieldStyle
                                id={"phone"}
                                label="Contact Number"
                                multiline
                                width={"100%"}
                                onChange={(e) => handleForm(e)}
                            />
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
                            <StyledSelect
                                id={"userType"}
                                label="Type"
                                value={userData.userType || ''}
                                onChange={(e) => handleForm(e)}
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
                        </RowContainer>
                    </ColumnContainer>
                    <Button text={"Submit"} onClick={handleSubmit} isEmpty={true}/>
                </FormStyle>
            }
        </FormContainer>
    )

}

export default RegisterForm;
