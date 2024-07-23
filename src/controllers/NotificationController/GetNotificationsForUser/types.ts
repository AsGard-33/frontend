export interface NotificationDTO {
    id: string;
    userId: string;
    message: string;
    status: 'READ' | 'UNREAD';
  }
  