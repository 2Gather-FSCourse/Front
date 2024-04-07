import React from 'react'
import {ColumnContainer, FormStyle, RowContainer, SubTitle} from './RegisterForm.style'
import {FormContainer, TextFieldStyle} from './SearchForm.style';
import { createUser } from '../../APIs/users.api.jsx';
// import {ReportTitle} from "../Report/Report.style";
// import Button from "../Button/Button";
// import {Msg} from "../Msg/Msg";

// TextFieldStyle
const RegisterForm = (props) => {
    // const {formMod, message, setMessage, createReport, setIsError, } = props
    const [userData, setUserData] = React.useState([]);
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
            {/*{formMod === "create" && <ReportTitle>Create Report</ReportTitle>}*/}
            {/*{formMod === "update" && <ReportTitle>Update Report</ReportTitle>}*/}
            {!isSuccess &&
                <FormStyle onSubmit={(e) => handleSubmit(e, formData)}>
                    <ColumnContainer>
                        <SubTitle>User Info</SubTitle>
                        <TextFieldStyle
                            id={"name"}
                            label="Full Name"
                            multiline
                            width={"100%"}
                            onChange={(e) => handleForm(e)}
                        />
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
                    </ColumnContainer>
                    <ColumnContainer>
                        <SubTitle>Must Fill</SubTitle>
                        <RowContainer>
                            <TextFieldStyle
                                id={"age"}
                                label="Age"
                                multiline
                                width={"45%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextFieldStyle
                                id={"password"}
                                label="Password"
                                multiline
                                width={"45%"}
                                onChange={(e) => handleForm(e)}
                            />
                            <TextFieldStyle
                                id={"userType"}
                                label="User Type"
                                multiline
                                width={"45%"}
                                onChange={(e) => handleForm(e)}
                            /></RowContainer>
                    </ColumnContainer>
                    <button></button>
                </FormStyle>
            }
        </FormContainer>
    )

}

export default RegisterForm;
