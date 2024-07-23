import React, { useState } from 'react';
import axios from 'axios';
import { RemoveFriendWrapper, Title, Input, Button, ErrorMessage, SuccessMessage } from './styles';

const RemoveFriend: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [friendId, setFriendId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleRemoveFriend = async () => {
    try {
      await axios.delete(`/api/friends/${userId}/${friendId}`);
      setSuccess('Friend removed successfully');
      setError(null);
    } catch (err) {
      setError('Failed to remove friend');
      setSuccess(null);
    }
  };

  return (
    <RemoveFriendWrapper>
      <Title>Remove Friend</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      <Input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter Friend ID"
        value={friendId}
        onChange={(e) => setFriendId(e.target.value)}
      />
      <Button onClick={handleRemoveFriend}>Remove Friend</Button>
    </RemoveFriendWrapper>
  );
};

export default RemoveFriend;
