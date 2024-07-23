import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DeleteLocationWrapper, Title, Button, ErrorMessage } from './styles';

const DeleteLocation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/locations/${id}`);
      setError(null);
      setSuccess('Location deleted successfully');
    } catch (err) {
      setError('Failed to delete location');
      setSuccess(null);
    }
  };

  return (
    <DeleteLocationWrapper>
      <Title>Delete Location</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <div>{success}</div>}
      <Button onClick={handleDelete}>Delete Location</Button>
    </DeleteLocationWrapper>
  );
};

export default DeleteLocation;
