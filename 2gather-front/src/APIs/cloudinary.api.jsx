import axios from 'axios';

// const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME;
const api = axios.create({ baseURL: 'https://api.cloudinary.com/v1_1/drnwhlaqk' });

const createFormData = (type, image) => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', type === 'campaign' ? 'campaigns' : 'profiles');
  return formData;
};
const uploadCampaignImage = async (image) => {
  const formData = createFormData('campaign', image);
  const response = await api.post('/image/upload', formData);
  return response.data.secure_url;
};
const uploadProfileImage = async (image) => {
  const formData = createFormData('profile', image);
  const response = await api.post('/image/upload', formData);
  return response.data.secure_url;
};
export { uploadCampaignImage, uploadProfileImage };
