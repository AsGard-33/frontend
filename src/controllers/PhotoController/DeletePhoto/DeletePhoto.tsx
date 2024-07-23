import React, { useState } from 'react';
import axios from 'axios';
import { PhotoWrapper, Input, Button, SuccessMessage, ErrorMessage } from './styles';

const DeletePhoto: React.FC = () => {
  const [photoId, setPhotoId] = useState<string>('');
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/photos/${photoId}`);
      setSuccess('Photo deleted successfully.');
      setError(null);
    } catch (err) {
      setError('Failed to delete photo.');
      setSuccess(null);
    }
  };

  return (
    <PhotoWrapper>
      <Input
        type="text"
        name="photoId"
        placeholder="Enter photo ID"
        value={photoId}
        onChange={handleChange}
      />
      <Button onClick={handleDelete}>Delete Photo</Button>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </PhotoWrapper>
  );
};

export default DeletePhoto;
