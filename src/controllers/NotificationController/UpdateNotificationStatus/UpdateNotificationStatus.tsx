import React, { useState } from 'react';
import axios from 'axios';
import { NotificationWrapper, Input, Button, SuccessMessage, ErrorMessage } from './styles';
import { NotificationDTO } from './types';

const UpdateNotificationStatus: React.FC = () => {
  const [notification, setNotification] = useState<Partial<NotificationDTO>>({
    id: '',
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
      const response = await axios.put(`/api/notifications/${notification.id}`, { status: notification.status });
      setSuccess('Notification status updated successfully.');
      setError(null);
    } catch (err) {
      setError('Failed to update notification status.');
      setSuccess(null);
    }
  };

  return (
    <NotificationWrapper>
      <Input
        type="text"
        name="id"
        placeholder="Enter notification ID"
        value={notification.id}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="status"
        placeholder="Enter new status"
        value={notification.status}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Update Status</Button>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </NotificationWrapper>
  );
};

export default UpdateNotificationStatus;
