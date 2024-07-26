import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPhotos } from 'services/photoService'; // Импортируйте метод из сервиса
import { PhotoDTO } from './types';
import { Container, PhotoItem, Image, Title, Description, PhotoInfo, UploadButton } from './styles';

const AllPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await getAllPhotos();
        setPhotos(data);
        console.log(data); // Проверка данных
      } catch (err) {
        setError('Error fetching photos');
      }
    };

    fetchPhotos();
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
