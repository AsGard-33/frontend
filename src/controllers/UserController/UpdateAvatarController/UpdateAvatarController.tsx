import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Input, Button, Error } from './styles';
import { AvatarUpdateDTO, UserDTO } from './types';

interface UpdateAvatarControllerProps {
  userId: number;
  onSuccess: () => void;
}

const UpdateAvatarController: React.FC<UpdateAvatarControllerProps> = ({ userId, onSuccess }) => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<UserDTO | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (avatarUrl === '') {
      setError('Please provide an avatar URL');
      return;
    }

    const avatarData: AvatarUpdateDTO = {
      avatarUrl,
    };

    try {
      const response = await axios.put(`/api/users/${userId}/avatar`, avatarData);
      setSuccess(response.data);
      setError(null);
      onSuccess();
    } catch (err) {
      setError('Failed to update avatar');
      setSuccess(null);
    }
  };

  return (
    <Container>
      <h1>Update Avatar</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Avatar URL"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          required
        />
        <Button type="submit">Update Avatar</Button>
      </Form>
      {error && <Error>{error}</Error>}
      {success && <div>Avatar updated successfully: {success.avatarUrl}</div>}
    </Container>
  );
};

export default UpdateAvatarController;
