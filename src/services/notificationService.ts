import axios from 'axios';
import { NotificationDTO } from 'pages/AllNotificationsByUser/types';

export const getNotificationsByUserId = async (userId: number): Promise<NotificationDTO[]> => {
  const response = await axios.get(`/api/notifications/user/${userId}`);
  return response.data;
};

export const updateNotificationStatus = async (id: number, notificationData: NotificationDTO): Promise<void> => {
    await axios.put(`/api/notifications/${id}`, notificationData);
  };