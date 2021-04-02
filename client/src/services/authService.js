import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: true,
});

export const signup = async (data) => {
  const response = await api.post('auth/signup', data);
  return response.data.user;
};
