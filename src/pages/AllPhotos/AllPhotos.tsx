import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PhotoDTO } from './types';
import { Container, PhotoItem, Image, Title, Description } from './styles';

const AllPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/photos/all')
      .then(response => {
        console.log('API response:', response.data); // Отладочный вывод
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
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
          <Image src={photo.url} alt={photo.title} onError={(e) => console.error('Image load error:', e)} />
          <Title>{photo.title}</Title>
          <Description>{photo.description}</Description>
        </PhotoItem>
      ))}
    </Container>
  );
}

export default AllPhotos;
