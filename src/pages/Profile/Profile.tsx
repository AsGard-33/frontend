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
  ProfileContainer
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
        setError('Пожалуйста, войдите в систему, чтобы просмотреть свой профиль.');
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
        <ProfileError>{error}</ProfileError>
        <Button name='Перейти к входу' onClick={() => navigate('/login')}></Button>
      </ProfileErrorWrapper>
    );
  }

  return (
    <ProfileWrapper>
      <ProfileTitle>Профиль</ProfileTitle>
      {profile ? (
        <ProfileContainer>
          <AvatarWrapper>
            <AvatarImage src='/path/to/avatar.jpg' alt='Аватар пользователя' />
            <Button name="Загрузить фото" onClick={() => handleNavigate('/photos/upload')} />
          </AvatarWrapper>
          <ProfileInfo>
            <p>Имя пользователя: {profile.username}</p>
            <p>Email: {profile.email}</p>
          </ProfileInfo>
        </ProfileContainer>
      ) : (
        <div>Загрузка...</div>
      )}
      <ButtonContainer>
        <Button name="Все пользователи" onClick={() => handleNavigate('/users')} />
        <Button name="Все локации" onClick={() => handleNavigate('/locations')} />
        <Button name="Все блоги" onClick={() => handleNavigate('/blogs')} />
        <Button name="Все фото" onClick={() => handleNavigate('/photos')} />
        <Button name="Все сообщения" onClick={() => handleNavigate('/messages')} />
        <Button name="Все друзья" onClick={() => handleNavigate('/friends')} />
      </ButtonContainer>
    </ProfileWrapper>
  );
};

export default Profile;


