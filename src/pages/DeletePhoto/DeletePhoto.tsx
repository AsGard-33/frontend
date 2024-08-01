import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deletePhoto } from 'services/photoService';
import { DeletePhotoWrapper, Title, ErrorMessage, SuccessMessage,Input } from './styles';
import Button from 'components/Button/Button';

const DeletePhoto: React.FC = () => {
  const { photoId: photoIdParam } = useParams<{ photoId: string }>();
  const [photoId, setPhotoId] = useState<string>(photoIdParam || '');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (photoIdParam) {
      setPhotoId(photoIdParam);
    }
  }, [photoIdParam]);

  const handleDeletePhoto = async () => {
    try {
      if (!photoId) {
        setError('Photo ID is required');
        return;
      }
      await deletePhoto(parseInt(photoId));
      setSuccess(true);
      setError(null);
      setTimeout(() => navigate('/photos'), 2000); // Redirect back to photos after 2 seconds
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
      <Input
        type="text"
        value={photoId}
        onChange={(e) => setPhotoId(e.target.value)}
        placeholder="Enter Photo ID"
        disabled
      />
      <Button name="Delete Photo" onClick={handleDeletePhoto} />
    </DeletePhotoWrapper>
  );
};

export default DeletePhoto;
