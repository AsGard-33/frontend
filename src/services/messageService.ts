import axios from 'axios';
import { MessageDTO } from 'pages/AllMessagesByConversation/types';

export const getMessagesBySender = async (senderId: number): Promise<MessageDTO[]> => {
  const response = await axios.get(`/api/messages/sender/${senderId}`);
  return response.data;
};

export const getMessagesByRecipient = async (recipientId: number): Promise<MessageDTO[]> => {
    const response = await axios.get(`/api/messages/recipient/${recipientId}`);
    return response.data;
};

export const getMessagesByConversation = async (conversationId: number): Promise<MessageDTO[]> => {
    const response = await axios.get(`/api/messages/conversation/${conversationId}`);
    return response.data;
};

export const deleteMessage = async (id: number): Promise<void> => {
    await axios.delete(`/api/messages/${id}`);
};