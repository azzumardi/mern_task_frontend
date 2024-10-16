import axios from 'axios';

// const API_URI = '/api/users/';
const API_URI = 'https://taskapp-8ixvw9ya.b4a.run/api/users/';

const register = async (userData) => {
  const response = await axios.post(API_URI, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URI + 'login', userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => localStorage.removeItem('user');

const authService = { register, logout, login };

export default authService;
