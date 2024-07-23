import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getNotificationsByUserId } from 'services/notificationService';
import { NotificationDTO } from 'pages/AllNotificationsByUser/types';
import { AllNotificationsWrapper, Title, NotificationItem, ErrorMessage } from './styles';

const AllNotificationsByUser: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [notifications, setNotifications] = useState<NotificationDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        if (!userId) {
          setError('User ID is required');
          return;
        }
        const response = await getNotificationsByUserId(parseInt(userId));
        setNotifications(response);
        setError(null);
      } catch (err) {
        setError('Failed to fetch notifications');
      }
    };

    fetchNotifications();
  }, [userId]);

  return (
    <AllNotificationsWrapper>
      <Title>All Notifications</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ul>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id}>
            {notification.message} - {notification.status}
          </NotificationItem>
        ))}
      </ul>
    </AllNotificationsWrapper>
  );
};

export default AllNotificationsByUser;
