import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button/Button';
import { Container } from './styles';
import axios from 'axios';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout', { withCredentials: true });
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <Container>
      <Button onClick={handleLogout} name="Logout" />
    </Container>
  );
};

export default Logout;
