import React, { useState } from 'react';
import axios from 'axios';
import { NotificationWrapper, Input, Button, NotificationList, NotificationItem, ErrorMessage } from './styles';
import { NotificationDTO } from './types';

const GetNotificationsForUser: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [notifications, setNotifications] = useState<NotificationDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleGetNotifications = async () => {
    try {
      const response = await axios.get(`/api/notifications/user/${userId}`);
      setNotifications(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch notifications.');
    }
  };

  return (
    <NotificationWrapper>
      <Input
        type="text"
        name="userId"
        placeholder="Enter user ID"
        value={userId}
        onChange={handleChange}
      />
      <Button onClick={handleGetNotifications}>Get Notifications</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <NotificationList>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id}>
            {notification.message} - {notification.status}
          </NotificationItem>
        ))}
      </NotificationList>
    </NotificationWrapper>
  );
};

export default GetNotificationsForUser;
