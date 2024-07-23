import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from 'services/userService';
import { UserDetailWrapper, UserDetailTitle, UserDetailInfo } from './styles';
import { UserDetailProps } from './types';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserDetailProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const userData = await getUserById(parseInt(id));
          setUser(userData);
        } catch (err) {
          setError('Failed to fetch user details');
        }
      } else {
        setError('Invalid user ID');
      }
    };

    fetchUser();
  }, [id]);

  if (error) {
    return <UserDetailWrapper>{error}</UserDetailWrapper>;
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
