import React, { useState } from 'react';
import axios from 'axios';
import { CreateLocationWrapper, Title, Input, CreateButton, ErrorMessage, SuccessMessage } from './styles';
import { LocationDTO } from './types';

const CreateLocation: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleCreate = async () => {
    try {
      const response = await axios.post('/api/locations', {
        title,
        description,
      } as LocationDTO);
      setSuccess('Location created successfully');
      setError(null);
    } catch (err) {
      setError('Failed to create location');
      setSuccess(null);
    }
  };

  return (
    <CreateLocationWrapper>
      <Title>Create Location</Title>
      <Input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <CreateButton onClick={handleCreate}>Create</CreateButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </CreateLocationWrapper>
  );
};

export default CreateLocation;
