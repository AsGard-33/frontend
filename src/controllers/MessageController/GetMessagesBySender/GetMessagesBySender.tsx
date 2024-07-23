import React, { useState } from 'react';
import axios from 'axios';
import { MessageDTO } from './types';
import { MessageWrapper, Input, Button, MessageDetail, ErrorMessage } from './styles';

const GetMessagesBySender: React.FC = () => {
  const [senderId, setSenderId] = useState<string>('');
  const [messages, setMessages] = useState<MessageDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderId(e.target.value);
  };

  const handleGetMessages = async () => {
    try {
      const response = await axios.get(`/api/messages/sender/${senderId}`);
      setMessages(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch messages');
    }
  };

  return (
    <MessageWrapper>
      <Input
        type="text"
        name="senderId"
        placeholder="Enter sender ID"
        value={senderId}
        onChange={handleChange}
      />
      <Button onClick={handleGetMessages}>Get Messages</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {messages.length > 0 && (
        <MessageDetail>
          <h2>Messages</h2>
          {messages.map((message, index) => (
            <div key={index}>
              <p>Sender ID: {message.senderId}</p>
              <p>Recipient ID: {message.recipientId}</p>
              <p>Content: {message.content}</p>
            </div>
          ))}
        </MessageDetail>
      )}
    </MessageWrapper>
  );
};

export default GetMessagesBySender;
