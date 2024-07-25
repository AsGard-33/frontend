import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PhotoDTO } from './types';
import { Container, PhotoItem, Title, Description } from './styles';

const GetPhotoAll: React.FC = () => {
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
          <img src={photo.url} alt={photo.title} />
          <Title>{photo.title}</Title>
          <Description>{photo.description}</Description>
        </PhotoItem>
      ))}
    </Container>
  );
}

export default GetPhotoAll;
