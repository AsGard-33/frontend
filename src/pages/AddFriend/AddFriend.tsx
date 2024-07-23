import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addFriend } from 'services/friendService';
import { AddFriendWrapper, Title, Input, Button, ErrorMessage, SuccessMessage } from './styles';

const AddFriend: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [friendId, setFriendId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleAddFriend = async () => {
    try {
      if (!userId || !friendId) {
        setError('Both userId and friendId are required');
        return;
      }
      await addFriend(parseInt(userId, 10), parseInt(friendId, 10));
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError('Failed to add friend');
      setSuccess(false);
    }
  };

  return (
    <AddFriendWrapper>
      <Title>Add Friend</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Friend added successfully!</SuccessMessage>}
      <Input
        type="text"
        value={friendId}
        onChange={(e) => setFriendId(e.target.value)}
        placeholder="Enter Friend ID"
      />
      <Button onClick={handleAddFriend}>Add Friend</Button>
    </AddFriendWrapper>
  );
};

export default AddFriend;
