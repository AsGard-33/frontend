export interface NotificationDTO {
    id: number;
    status: string;
    message: string;
  }
  
  export interface UpdateNotificationStatusProps {
    id: number;
    status: string;
  }
  