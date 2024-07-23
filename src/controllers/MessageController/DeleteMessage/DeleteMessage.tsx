import React, { useState } from 'react';
import axios from 'axios';
import { MessageWrapper, Input, Button, SuccessMessage, ErrorMessage } from './styles';

const DeleteMessage: React.FC = () => {
  const [messageId, setMessageId] = useState<string>('');
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageId(e.target.value);
  };

  const handleDeleteMessage = async () => {
    try {
      await axios.delete(`/api/messages/${messageId}`);
      setSuccess('Message deleted successfully.');
      setError(null);
    } catch (err) {
      setError('Failed to delete message.');
      setSuccess(null);
    }
  };

  return (
    <MessageWrapper>
      <Input
        type="text"
        name="messageId"
        placeholder="Enter message ID"
        value={messageId}
        onChange={handleChange}
      />
      <Button onClick={handleDeleteMessage}>Delete Message</Button>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </MessageWrapper>
  );
};

export default DeleteMessage;
