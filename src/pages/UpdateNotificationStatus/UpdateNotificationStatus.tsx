import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateNotificationStatus } from 'services/notificationService';
import { UpdateNotificationStatusWrapper, Title, ErrorMessage, SuccessMessage } from './styles';
import { NotificationDTO } from 'pages/UpdateNotificationStatus/types';
import Button from 'components/Button/Button';

const UpdateNotificationStatus: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleUpdateStatus = async () => {
    try {
      if (!id || !status) {
        setError('Notification ID and status are required');
        return;
      }
      const notificationDTO: NotificationDTO = { id: parseInt(id), status, message: '' }; // Assuming message is not required here
      await updateNotificationStatus(parseInt(id), notificationDTO);
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError('Failed to update notification status');
      setSuccess(false);
    }
  };

  return (
    <UpdateNotificationStatusWrapper>
      <Title>Update Notification Status</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Status updated successfully!</SuccessMessage>}
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Enter new status"
      />
      <Button name="Update Status" onClick={handleUpdateStatus} />
    </UpdateNotificationStatusWrapper>
  );
};

export default UpdateNotificationStatus;
