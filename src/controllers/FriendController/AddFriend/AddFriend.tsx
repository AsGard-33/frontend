import React, { useState } from 'react';
import axios from 'axios';
import { AddFriendWrapper, Title, Input, Button, ErrorMessage } from './styles';
import { FriendDTO } from './types';

const AddFriend: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [friendId, setFriendId] = useState<string>('');
  const [friend, setFriend] = useState<FriendDTO | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAddFriend = async () => {
    try {
      const response = await axios.post(`/api/friends/${userId}/${friendId}`);
      setFriend(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to add friend');
      setFriend(null);
    }
  };

  return (
    <AddFriendWrapper>
      <Title>Добавить друга</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        placeholder="Введите ID пользователя"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Введите ID друга"
        value={friendId}
        onChange={(e) => setFriendId(e.target.value)}
      />
      <Button onClick={handleAddFriend}>Добавить друга</Button>
      {friend && (
        <div>
          <h3>Друг добавлен:</h3>
          <p>ID: {friend.id}</p>
          <p>Имя: {friend.name}</p>
        </div>
      )}
    </AddFriendWrapper>
  );
};

export default AddFriend;
