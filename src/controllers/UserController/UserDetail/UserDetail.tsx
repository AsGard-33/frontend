import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { User, UserDetailProps } from './types';
import { UserDetailWrapper, UserDetailTitle, UserDetailInfo, ErrorMessage } from './styles';

const UserDetail: React.FC<UserDetailProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>(`/api/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError('Failed to load user data.');
      }
    };

    fetchUser();
  }, [id]);

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!user) {
    return <UserDetailWrapper>Loading...</UserDetailWrapper>;
  }

  return (
    <UserDetailWrapper>
      <UserDetailTitle>User Details</UserDetailTitle>
      <UserDetailInfo>
        <strong>ID:</strong> {user.id}
      </UserDetailInfo>
      <UserDetailInfo>
        <strong>Username:</strong> {user.username}
      </UserDetailInfo>
      <UserDetailInfo>
        <strong>Email:</strong> {user.email}
      </UserDetailInfo>
    </UserDetailWrapper>
  );
};

export default UserDetail;
