import axios from 'axios';

export const logout = async () => {
  try {
    await axios.get('/auth/logout', { withCredentials: true });
  } catch (error) {
    throw new Error('Logout failed');
  }
};
