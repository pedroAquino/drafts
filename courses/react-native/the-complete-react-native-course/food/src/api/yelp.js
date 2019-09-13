import axios from 'axios';

const API_KEY = 's2VxIAENzH72rBPosElVnStBDRPsuPAGHrTLVt8iRZ-kSCNzyfRRwiZmdEwoBAnUxb69xWMBu46AScSytAXa9pUCm8Urv-hWwb9X64PrzpECybJF8cC5l8M_IQp4XXYx';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
});
