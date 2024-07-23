import axios from 'axios';
import { FriendDTO } from 'pages/AllFriends/types';

export const addFriend = async (userId: number, friendId: number): Promise<void> => {
  await axios.post(`/api/friends/${userId}/${friendId}`);
};

export const removeFriend = async (userId: number, friendId: number): Promise<void> => {
    await axios.delete(`/api/friends/${userId}/${friendId}`);
};

export const getFriends = async (userId: number): Promise<FriendDTO[]> => {
    const response = await axios.get(`/api/friends/${userId}`);
    return response.data;
};