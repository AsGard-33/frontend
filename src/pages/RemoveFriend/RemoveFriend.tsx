import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { removeFriend } from 'services/friendService';
import { RemoveFriendWrapper, Title, Input, Button, ErrorMessage, SuccessMessage } from './styles';

const RemoveFriend: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [friendId, setFriendId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleRemoveFriend = async () => {
    try {
      if (!userId || !friendId) {
        setError('Both userId and friendId are required');
        return;
      }
      await removeFriend(parseInt(userId, 10), parseInt(friendId, 10));
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError('Failed to remove friend');
      setSuccess(false);
    }
  };

  return (
    <RemoveFriendWrapper>
      <Title>Remove Friend</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Friend removed successfully!</SuccessMessage>}
      <Input
        type="text"
        value={friendId}
        onChange={(e) => setFriendId(e.target.value)}
        placeholder="Enter Friend ID"
      />
      <Button onClick={handleRemoveFriend}>Remove Friend</Button>
    </RemoveFriendWrapper>
  );
};

export default RemoveFriend;
