import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PhotoDTO } from './types';
import { Container, PhotoItem, Image, Title, Description, PhotoInfo } from './styles';

const AllPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/photos/all')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        setError('Error fetching photos');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      {photos.map(photo => (
        <PhotoItem key={photo.id}>
          <Image src={photo.url} alt={photo.title} />
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
