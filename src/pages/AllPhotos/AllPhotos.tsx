import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Lightbox from 'components/Lightbox/Lightbox'; // Импортируем Lightbox
import { PhotoDTO } from './types';
import { Container, PhotoItem, Image, Title, Description,ButtonBoxon, PhotoInfo, UploadButton, ProfileButton } from './styles'; // Импортируем стили для ProfileButton

const AllPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null); // Состояние для отслеживания выбранного изображения
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

  const openLightbox = (image: string) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />} {/* Lightbox для выбранного изображения */}
      <ButtonBoxon onClick={() => navigate('/profile')}>
        <ProfileButton>Profile</ProfileButton>
      </ButtonBoxon>
      <UploadButton onClick={handleUploadClick}>Upload Photo</UploadButton>
      {photos.map(photo => (
        <PhotoItem key={photo.id}>
          <Image
            src={photo.url}
            alt={photo.title}
            onClick={() => openLightbox(photo.url)} // Открытие Lightbox при клике на изображение
            onError={(e) => { console.error(`Failed to load image at ${photo.url}`); }}
          />
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