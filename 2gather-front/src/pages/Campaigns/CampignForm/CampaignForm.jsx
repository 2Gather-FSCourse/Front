import React, {useEffect, useState} from 'react';
import {createCampaigns} from '../../../APIs/campaigns.api.jsx';
import {uploadCampaignImage} from "../../../APIs/cloudinary.api.jsx";
import axios from "axios";
import {GetOrganizationById} from "../../../APIs/organizations.api.jsx";
import {CampaignsContainer,CampaignFormContainer, InputsContainer} from './CampaignForm.styled.js'
import PageTitle from '../../../components/PageTitle/PageTitle.jsx';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const CampaignForm = () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    const [formData, setFormData] = useState({
        title: '',
        campaignDesc: '',
        campaignType: '',
        campaignCategory: '',
        goal: '',
        startDate: '',
        endDate: '',
        campaignImage: null,
        orgId: user.orgId,
        founderId: user.id,
        status: 'active'
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        const file = files ? files[0] : null; // Get the file if available
        setFormData({ ...formData, [name]: file ? file : value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('Form Data:', formData);
            formData.campaignImage = await uploadCampaignImage(formData.campaignImage);
            console.log('Uploaded Image URL:', formData.campaignImage);
            const result = await createCampaigns(formData);
            console.log('Create Campaign Result:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <CampaignsContainer>
            <PageTitle title={'Create Campaign'}></PageTitle>
            <CampaignFormContainer>
                <InputsContainer>
                    <label>Enter Campaign Name</label>
                    <input type="text" name="title" onChange={handleChange} required/>
                </InputsContainer>
                <InputsContainer>
                    <label>Enter Campaign Description</label>
                    <textarea name="campaignDesc" onChange={handleChange} required></textarea>
                </InputsContainer>
                <InputsContainer>
                    <label>Enter Campaign Type</label>
                    <select name="campaignType" onChange={handleChange} required>
                        <option value="">Select Campaign Type</option>
                        <option value="fundraising">Fundraising</option>
                        <option value="donation">Donation</option>
                    </select>
                </InputsContainer>
                <InputsContainer>
                    <label>Enter Campaign Category</label>
                    <select name="campaignCategory" onChange={handleChange} required>
                        <option value="">Select Campaign Category</option>
                        <option value="financialResources">Financial Resources</option>
                        <option value="food">Food</option>
                        <option value="shelterAndBedding">Shelter and Bedding</option>
                        <option value="clothingAndFootwear">Clothing and Footwear</option>
                        <option value="medicalSupplies">Medical Supplies</option>
                        <option value="toiletries">Toiletries</option>
                        <option value="educationalSupplies">Educational Supplies</option>
                        <option value="communicationTools">Communication Tools</option>
                        <option value="toolsAndEquipment">Tools and Equipment</option>
                        <option value="petSupplies">Pet Supplies</option>
                    </select>
                </InputsContainer>
                <InputsContainer>
                    <label>Enter Campaign Goal</label>
                    <input type="number" name="goal" onChange={handleChange} required/>
                </InputsContainer>
                <InputsContainer>
                    <label>Enter Start Date</label>
                    <input type="date" name="startDate" onChange={handleChange} required/>
                </InputsContainer>
                <InputsContainer>
                    <label>Enter End Date</label>
                    <input type="date" name="endDate" onChange={handleChange} required/>
                </InputsContainer>
                <InputsContainer>
                    <label>Enter Campaign Image</label>
                    <input type="file" name="campaignImage" onChange={handleChange} required/>
                </InputsContainer>


                <button type="submit" onClick={handleSubmit}>Create Campaign</button>
            </CampaignFormContainer>
        </CampaignsContainer>
    );
};

export default CampaignForm;
