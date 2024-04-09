import React, {useState} from 'react';
import {createCampaigns} from '../../../APIs/campaigns.api.jsx';
import {uploadCampaignImage} from "../../../APIs/cloudinary.api.jsx";

const CampaignForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        campaignDesc: '',
        campaignType: '',
        campaignCategory: '',
        goal: '',
        startDate: '',
        endDate: '',
        campaignImage: null,
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        const file = files ? files[0] : null; // Get the file if available
        setFormData({ ...formData, [name]: file ? file : value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            formData.campaignImage = await uploadCampaignImage(formData.campaignImage);
            console.log(formData.campaignImage);
            const result = await createCampaigns(formData);
        }catch (error){
            console.error(error);
        }

    };


    return (
        <div>
            <h2>Create Campaign</h2>
            <form>
                <div>
                    <label>Enter Campaign Name</label>
                    <input type="text" name="title" onChange={handleChange} required/>
                </div>
                <div>
                    <label>Enter Campaign Description</label>
                    <textarea name="campaignDesc" onChange={handleChange} required></textarea>
                </div>
                <div>
                    <label>Enter Campaign Type</label>
                    <select name="campaignType" onChange={handleChange} required>
                        <option value="">Select Campaign Type</option>
                        <option value="fundraising">Fundraising</option>
                        <option value="donation">Donation</option>
                    </select>
                </div>
                <div>
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
                </div>
                <div>
                    <label>Enter Campaign Goal</label>
                    <input type="number" name="goal" onChange={handleChange} required/>
                </div>
                <div>
                    <label>Enter Start Date</label>
                    <input type="date" name="startDate" onChange={handleChange} required/>
                </div>
                <div>
                    <label>Enter End Date</label>
                    <input type="date" name="endDate" onChange={handleChange} required/>
                </div>
                <div>
                    <label>Enter Campaign Image</label>
                    <input type="file" name="campaignImage" onChange={handleChange}/>
                </div>
                <button type="submit" onClick={handleSubmit}>Create Campaign</button>
            </form>
        </div>
    );
};

export default CampaignForm;
