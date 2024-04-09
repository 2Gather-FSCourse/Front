import styled from 'styled-components';

const CampaignContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px; /* Adjust width as needed */
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.div`
  img {
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
  height: 250px; 
  background-color: #eee;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #eee;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #007bff;
  transition: width 0.3s ease-in-out;
`;

const DonateButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export {
  CampaignContainer,
  CardImage,
  CardContent,
  ProgressBar,
  Progress,
  DonateButton,

};
