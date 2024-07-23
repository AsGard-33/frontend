import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from 'services/authService';
import { LogoutWrapper } from './styles';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      await logout();
      navigate('/');
    };

    performLogout();
  }, [navigate]);

  return (
    <LogoutWrapper>
      <p>Logging out...</p>
    </LogoutWrapper>
  );
};

export default Logout;
