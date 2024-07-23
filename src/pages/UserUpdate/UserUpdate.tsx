import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, updateUser } from 'services/userService';
import { UserUpdateWrapper, UserUpdateTitle, UserUpdateForm, UserUpdateInput, UserUpdateButton, ErrorMessage } from './styles';
import { UserUpdateProps, UserUpdateDTO } from './types';

const UserUpdate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserUpdateProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<UserUpdateDTO>({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const userData = await getUserById(parseInt(id));
          setUser(userData);
          setFormData({
            username: userData.username,
            email: userData.email,
            password: ''
          });
        } catch (err) {
          setError('Failed to fetch user details');
        }
      } else {
        setError('Invalid user ID');
      }
    };

    fetchUser();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      try {
        await updateUser(parseInt(id), formData);
        navigate(`/users/${id}`);
      } catch (err) {
        setError('Failed to update user');
      }
    }
  };

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!user) {
    return <UserUpdateWrapper>Loading...</UserUpdateWrapper>;
  }

  return (
    <UserUpdateWrapper>
      <UserUpdateTitle>Update User</UserUpdateTitle>
      <UserUpdateForm onSubmit={handleSubmit}>
        <UserUpdateInput
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
          required
        />
        <UserUpdateInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <UserUpdateInput
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <UserUpdateButton type="submit">Update</UserUpdateButton>
      </UserUpdateForm>
    </UserUpdateWrapper>
  );
};

export default UserUpdate;
