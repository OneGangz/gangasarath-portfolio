import axios from 'axios';

const API_BASE_URL = 'https://localhost:7001/api'; // Standard .NET https port

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getSkills = async () => {
  const response = await api.get('/skills');
  return response.data;
};

export const getServices = async () => {
  const response = await api.get('/services');
  return response.data;
};

export const sendMessage = async (message: any) => {
  const response = await api.post('/contact', message);
  return response.data;
};
