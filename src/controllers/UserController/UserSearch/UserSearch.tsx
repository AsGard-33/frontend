import React, { useState } from 'react';
import axios from 'axios';
import { User } from './types';
import { UserSearchWrapper, Title, SearchInput, SearchButton, ErrorMessage, UserInfo } from './styles';

const UserSearch: React.FC = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/users/by-username?username=${username}`);
      setUser(response.data);
      setError(null);
    } catch (err) {
      setError('User not found');
      setUser(null);
    }
  };

  return (
    <UserSearchWrapper>
      <Title>Search User by Username</Title>
      <SearchInput
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {user && (
        <UserInfo>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </UserInfo>
      )}
    </UserSearchWrapper>
  );
};

export default UserSearch;
