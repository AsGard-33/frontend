import React, { useState } from 'react';
import axios from 'axios';
import { NotificationWrapper, Input, Button, SuccessMessage, ErrorMessage } from './styles';
import { NotificationDTO } from './types';

const CreateNotification: React.FC = () => {
  const [notification, setNotification] = useState<NotificationDTO>({
    id: '',
    userId: '',
    message: '',
    status: 'UNREAD'
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNotification((prevNotification) => ({ ...prevNotification, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/notifications', notification);
      setSuccess('Notification created successfully.');
      setError(null);
    } catch (err) {
      setError('Failed to create notification.');
      setSuccess(null);
    }
  };

  return (
    <NotificationWrapper>
      <Input
        type="text"
        name="userId"
        placeholder="Enter user ID"
        value={notification.userId}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="message"
        placeholder="Enter message"
        value={notification.message}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Create Notification</Button>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </NotificationWrapper>
  );
};

export default CreateNotification;
