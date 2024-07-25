import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from 'services/authService';
import { UserDTO } from './types';
import {
  ProfileWrapper,
  ProfileTitle,
  ProfileInfo,
  ButtonContainer,
  ProfileErrorWrapper,
  ProfileError,
  AvatarWrapper,
  AvatarImage,
  ProfileContainer,
  ErrorButton
} from './styles';
import Button from 'components/Button/Button';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        setError('Please log in to view your profile.');
      }
    };

    fetchProfile();
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  if (error) {
    return (
      <ProfileErrorWrapper>
        <ErrorButton>
          <ProfileError>{error}</ProfileError>
          <Button name='Go to Login' onClick={() => navigate('/login')}></Button>
        </ErrorButton>
      </ProfileErrorWrapper>
    );
  }

  return (
    <ProfileWrapper>
      <ProfileTitle>Profile</ProfileTitle>
      {profile ? (
        <ProfileContainer>
          <AvatarWrapper>
            <AvatarImage src={profile.avatarUrl || '/path/to/default/avatar.jpg'} alt='User Avatar' />
            <Button name="Upload Photo" onClick={() => handleNavigate('/photos/upload')} />
          </AvatarWrapper>
          <ProfileInfo>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
          </ProfileInfo>
        </ProfileContainer>
      ) : (
        <div>Loading...</div>
      )}
      <ButtonContainer>
        <Button name="View All Users" onClick={() => handleNavigate('/users')} />
        <Button name="View All Locations" onClick={() => handleNavigate('/locations')} />
        <Button name="View All Blogs" onClick={() => handleNavigate('/blogs')} />
        <Button name="View All Photos" onClick={() => handleNavigate('/photos')} />
        <Button name="View All Messages" onClick={() => handleNavigate('/messages')} />
        <Button name="View All Friends" onClick={() => handleNavigate('/friends')} />
      </ButtonContainer>
    </ProfileWrapper>
  );
};

export default Profile;
