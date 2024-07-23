import React, { useState } from 'react';
import { deletePhoto } from 'services/photoService';
import { DeletePhotoWrapper, Title, ErrorMessage, SuccessMessage } from './styles';
import Button from 'components/Button/Button';

const DeletePhoto: React.FC = () => {
  const [photoId, setPhotoId] = useState<number | string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleDeletePhoto = async () => {
    try {
      if (!photoId) {
        setError('Photo ID is required');
        return;
      }
      await deletePhoto(parseInt(photoId.toString()));
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError('Failed to delete photo');
      setSuccess(false);
    }
  };

  return (
    <DeletePhotoWrapper>
      <Title>Delete Photo</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Photo deleted successfully!</SuccessMessage>}
      <input
        type="text"
        value={photoId}
        onChange={(e) => setPhotoId(e.target.value)}
        placeholder="Enter Photo ID"
      />
      <Button name="Delete Photo" onClick={handleDeletePhoto} />
    </DeletePhotoWrapper>
  );
};

export default DeletePhoto;
