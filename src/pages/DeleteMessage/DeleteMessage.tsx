import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteMessage } from 'services/messageService';
import { DeleteMessageWrapper, Title, ErrorMessage, SuccessMessage } from './styles';
import Button from 'components/Button/Button';

const DeleteMessage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleDeleteMessage = async () => {
    try {
      if (!id) {
        setError('Message ID is required');
        return;
      }
      await deleteMessage(parseInt(id));
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError('Failed to delete message');
      setSuccess(false);
    }
  };

  return (
    <DeleteMessageWrapper>
      <Title>Delete Message</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Message deleted successfully!</SuccessMessage>}
      <Button name="Delete Message" onClick={handleDeleteMessage} />
    </DeleteMessageWrapper>
  );
};

export default DeleteMessage;
