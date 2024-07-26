import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PhotoDTO } from './types';
import { Container, PhotoItem, Image, Title, Description, PhotoInfo, UploadButton } from './styles';

const AllPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/photos/all')
      .then(response => {
        setPhotos(response.data);
        console.log(response.data); // Проверка данных
      })
      .catch(error => {
        setError('Error fetching photos');
      });
  }, []);

  const handleUploadClick = () => {
    navigate('/photos/upload');
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <UploadButton onClick={handleUploadClick}>Upload Photo</UploadButton>
      {photos.map(photo => (
        <PhotoItem key={photo.id}>
          <Image src={photo.url} alt={photo.title} onError={(e) => { console.error(`Failed to load image at ${photo.url}`); }} />
          <PhotoInfo>ID: {photo.id}</PhotoInfo>
          <Title>{photo.title}</Title>
          <Description>{photo.description}</Description>
          <PhotoInfo>User ID: {photo.userId}</PhotoInfo>
        </PhotoItem>
      ))}
    </Container>
  );
}

export default AllPhotos;
