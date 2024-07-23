import axios from "axios";
import { UserDetailProps } from "pages/UserDetail/types";
import { UserUpdateDTO } from "controllers/UserController/UserUpdate/types";
import { UserDTO } from 'controllers/UserController/UserList/types';

export const getUserById = async (id: number): Promise<UserDetailProps> => {
  const response = await axios.get(`/api/users/${id}`);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch user details");
  }
};

export const updateUser = async (
  id: number,
  userData: UserUpdateDTO
): Promise<void> => {
  await axios.put(`/api/users/${id}`, userData);
};

export const addFavoriteLocation = async (
  userId: number,
  locationId: number
): Promise<void> => {
  await axios.post(`/api/users/${userId}/favorites/${locationId}`);
};

export const fetchAllUsers = async (): Promise<UserDTO[]> => {
  const response = await axios.get('/api/users');
  return response.data;
}


export const searchUserByUsername = async (username: string): Promise<UserDetailProps> => {
    const response = await axios.get(`/api/users/by-username?username=${username}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('User not found');
    }
};

export const deleteUser = async (username: string, email: string, password: string): Promise<void> => {
    await axios.delete(`/api/users/delete`, { data: { username, email, password } });
};
