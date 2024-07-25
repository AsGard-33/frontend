import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPhotosByUser } from 'services/photoService';
import { AllPhotosWrapper, Title, PhotoList, PhotoItem, ErrorMessage } from './styles';
import { PhotoDTO } from './types';

const AllPhotosByUser: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        if (!userId) {
          setError('User ID is required');
          return;
        }
        const userIdNumber = parseInt(userId, 10);
        if (isNaN(userIdNumber)) {
          setError('Invalid User ID');
          return;
        }
        const photosData = await getAllPhotosByUser(userIdNumber);
        setPhotos(photosData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch photos');
      }
    };

    fetchPhotos();
  }, [userId]);

  return (
    <AllPhotosWrapper>
      <Title>User Photos</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <PhotoList>
        {photos.map(photo => (
          <PhotoItem key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </PhotoItem>
        ))}
      </PhotoList>
    </AllPhotosWrapper>
  );
};

export default AllPhotosByUser;
