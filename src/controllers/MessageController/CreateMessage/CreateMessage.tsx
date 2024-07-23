import React, { useState } from 'react';
import axios from 'axios';
import { MessageDTO } from './types';
import { MessageWrapper, Input, Button, MessageDetail, ErrorMessage } from './styles';

const CreateMessage: React.FC = () => {
  const [message, setMessage] = useState<MessageDTO>({ senderId: '', recipientId: '', content: '' });
  const [savedMessage, setSavedMessage] = useState<MessageDTO | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage(prevMessage => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  const handleCreateMessage = async () => {
    try {
      const response = await axios.post('/api/messages', message);
      setSavedMessage(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to create message');
    }
  };

  return (
    <MessageWrapper>
      <Input
        type="text"
        name="senderId"
        placeholder="Enter sender ID"
        value={message.senderId}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="recipientId"
        placeholder="Enter recipient ID"
        value={message.recipientId}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="content"
        placeholder="Enter message content"
        value={message.content}
        onChange={handleChange}
      />
      <Button onClick={handleCreateMessage}>Create Message</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {savedMessage && (
        <MessageDetail>
          <h2>Message Created</h2>
          <p>Sender ID: {savedMessage.senderId}</p>
          <p>Recipient ID: {savedMessage.recipientId}</p>
          <p>Content: {savedMessage.content}</p>
        </MessageDetail>
      )}
    </MessageWrapper>
  );
};

export default CreateMessage;
