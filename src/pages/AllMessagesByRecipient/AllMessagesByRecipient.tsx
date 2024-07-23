import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMessagesByRecipient } from 'services/messageService';
import { MessageDTO } from './types';
import { MessagesWrapper, Title, ErrorMessage, SuccessMessage, MessageList, MessageItem } from './styles';
import Button from 'components/Button/Button';

const AllMessagesByRecipient: React.FC = () => {
  const { recipientId } = useParams<{ recipientId: string }>();
  const [messages, setMessages] = useState<MessageDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleGetMessages = async () => {
    try {
      if (!recipientId) {
        setError('Recipient ID is required');
        return;
      }
      const response = await getMessagesByRecipient(parseInt(recipientId));
      setMessages(response);
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError('Failed to fetch messages');
      setSuccess(false);
    }
  };

  return (
    <MessagesWrapper>
      <Title>Messages by Recipient</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Messages fetched successfully!</SuccessMessage>}
      <Button name="Get Messages" onClick={handleGetMessages} />
      <MessageList>
        {messages.map((message) => (
          <MessageItem key={message.id}>
            <p><strong>Content:</strong> {message.content}</p>
            <p><strong>Date:</strong> {message.date}</p>
          </MessageItem>
        ))}
      </MessageList>
    </MessagesWrapper>
  );
};

export default AllMessagesByRecipient;
