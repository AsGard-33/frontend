import React, { useState } from 'react';
import axios from 'axios';
import { DeleteUserWrapper, Title, Input, DeleteButton, ErrorMessage, SuccessMessage } from './styles';

const DeleteUser: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleDelete = async () => {
    try {
      await axios.delete('/api/users/delete', {
        params: {
          username,
          email,
          password,
        },
      });
      setSuccess('User deleted successfully');
      setError(null);
    } catch (err) {
      setError('Failed to delete user');
      setSuccess(null);
    }
  };

  return (
    <DeleteUserWrapper>
      <Title>Delete User</Title>
      <Input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </DeleteUserWrapper>
  );
};

export default DeleteUser;
