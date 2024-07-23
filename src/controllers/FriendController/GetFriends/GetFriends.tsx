import React, { useState } from 'react';
import axios from 'axios';
import { GetFriendsWrapper, Title, Input, Button, ErrorMessage, FriendList, FriendItem } from './styles';
import { FriendDTO } from './types';

const GetFriends: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [friends, setFriends] = useState<FriendDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGetFriends = async () => {
    try {
      const response = await axios.get(`/api/friends/${userId}`);
      setFriends(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch friends');
      setFriends([]);
    }
  };

  return (
    <GetFriendsWrapper>
      <Title>Получить список друзей</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        placeholder="Введите ID пользователя"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button onClick={handleGetFriends}>Получить друзей</Button>
      <FriendList>
        {friends.map(friend => (
          <FriendItem key={friend.id}>
            <p>ID: {friend.id}</p>
            <p>Имя: {friend.name}</p>
          </FriendItem>
        ))}
      </FriendList>
    </GetFriendsWrapper>
  );
};

export default GetFriends;
