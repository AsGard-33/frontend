import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteLocation } from 'services/locationService';
import { DeleteLocationWrapper, Title, Input, Button, ErrorMessage, SuccessMessage } from './styles';

const DeleteLocation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      if (!id) {
        setError('Location ID is required');
        return;
      }
      await deleteLocation(parseInt(id, 10));
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate('/locations');
      }, 2000);
    } catch (err) {
      setError('Failed to delete location');
      setSuccess(false);
    }
  };

  return (
    <DeleteLocationWrapper>
      <Title>Delete Location</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Location deleted successfully!</SuccessMessage>}
      <Input
        type="text"
        value={id || ''}
        readOnly
      />
      <Button onClick={handleDelete}>Delete Location</Button>
    </DeleteLocationWrapper>
  );
};

export default DeleteLocation;
