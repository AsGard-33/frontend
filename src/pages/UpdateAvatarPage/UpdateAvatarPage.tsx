import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UpdateAvatarController from 'controllers/UserController/UpdateAvatarController/UpdateAvatarController';
import { Container } from './styles';

interface UpdateAvatarPageProps {
  onAvatarUpdate: () => void;
}

const UpdateAvatarPage: React.FC<UpdateAvatarPageProps> = ({ onAvatarUpdate }) => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const handleAvatarUpdate = () => {
    onAvatarUpdate();
    navigate('/profile');
  };

  return (
    <Container>
      {userId ? (
        <UpdateAvatarController userId={parseInt(userId, 10)} onSuccess={handleAvatarUpdate} />
      ) : (
        <div>User ID is required</div>
      )}
    </Container>
  );
};

export default UpdateAvatarPage;

