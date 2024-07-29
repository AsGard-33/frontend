import axios from 'axios';
import { UserDTO } from 'pages/Profile/types';

export const login = async (data: { username: string; password: string }) => {
  const response = await axios.post('/api/auth/login', data);
  if (response.status === 200) {
    document.cookie = `jwtToken=${response.data.jwtToken}; path=/; secure`;
    document.cookie = `refreshToken=${response.data.refreshToken}; path=/; secure`;
  } else {
    throw new Error('Login failed');
  }
};

export const register = async (data: { username: string; email: string; password: string }) => {
  const response = await axios.post('/api/auth/register', data);
  if (response.status === 200) {
    document.cookie = `jwtToken=${response.data.jwtToken}; path=/; secure`;
  } else {
    throw new Error('Registration failed');
  }
};

export const getProfile = async (): Promise<UserDTO> => {
  const response = await axios.get('/api/auth/profile');
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error('Failed to fetch profile');
  }
};

export const logout = async (): Promise<void> => {
  await axios.get('/api/auth/logout');
  // Удаление токенов или выполнение других необходимых действий
};

export const updateProfileAvatar = async (userId: number, avatarUrl: string) => {
  try {
    const response = await axios.put(`/api/users/${userId}/avatar`, { avatarUrl });
    return response.data;
  } catch (error) {
    throw new Error('Failed to update avatar');
  }
}