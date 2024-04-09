# Project Name: 2Gather

Description: This React application allows users to donate to charitable causes and create fundraising campaigns. Users can browse existing campaigns, donate to them using Stripe, and track their impact. Additionally, users can create their own campaigns and manage them.

## Getting Started:

Clone this repository.
Change directory cd 2gather-front
Install dependencies: npm install
Create a .env file in the project root and add any environment variables you might need (e.g., API base URL).
Run the development server: npm run dev
Project Structure:

src - Contains the application source code.
components - Reusable UI components.
pages - React components representing different application views (e.g., Home, Login, CampaignPage).
APIs - Functions for interacting with the backend API and third-party apis.
App.js - The main application entry point.
public - Contains static assets like logo and icons

### Key Features:
User Authentication (using localStorage)
Campaign Browsing and Donation
Campaign Creation and Management
Stripe Integration for Secure Payments
User Donation History
Top 5 most Donated Users

### Dependencies:
React
react-router-dom
@stripe/react-stripe-js
@stripe/stripe-js (for Stripe integration)
axios (for API calls)
antd
styled-components
and more

### Future Considerations:
Implement backend functionality (API) to handle user registration, campaign creation, donation processing, etc.
Enhance user experience with features like donation history, progress bars for campaigns, etc.
