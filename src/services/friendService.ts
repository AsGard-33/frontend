import axios from 'axios';
import { FriendDTO,  FriendResponse } from 'controllers/FriendController/AllFriendController/types';

export const addFriend = async (userId: number, friendId: number): Promise<void> => {
  await axios.post(`/api/friends/${userId}/${friendId}`);
};

export const removeFriend = async (userId: number, friendId: number): Promise<void> => {
    await axios.delete(`/api/friends/${userId}/${friendId}`);
};


export const getFriends = async (): Promise<FriendDTO[]> => {
  const response = await axios.get<FriendResponse[]>('/api/friends/');
  return response.data.map(item => ({
    id: item.friend.id,
    username: item.friend.username,
    email: item.friend.email,
  }));
};