import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Lightbox from 'components/Lightbox/Lightbox'; // Импортируем Lightbox
import { PhotoDTO } from './types';
import {
  Container,
  PhotoItem,
  Image,
  Title,
  Description,
  PhotoInfo,
  Sidebar,
  NavLink,
  PhotoTitle,
  PhotosContainer, // Изменено на PhotosContainer
  PhotoActions, // Изменено на PhotoActions
  ButtonBoxon,
  ProfileButton // Импортируем стили для ProfileButton
} from './styles'; 

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

  const handleDeletePhoto = async (photoId: number) => {
    try {
      await axios.delete(`/api/photos/${photoId}`);
      setPhotos(photos.filter(photo => photo.id !== photoId));
    } catch (err) {
      console.error('Failed to delete photo', err);
    }
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
      <Sidebar>
        <NavLink onClick={handleUploadClick}>Upload Photo</NavLink>
        <NavLink onClick={() => navigate('/search-photo-by-title')}>Search Photo by Title</NavLink>
        <NavLink onClick={() => navigate('/search-photo-by-user-id')}>Search Photo by User ID</NavLink>
      </Sidebar>
      <div>
        <ButtonBoxon onClick={() => navigate('/profile')}>
          <ProfileButton>Back to my profile</ProfileButton>
        </ButtonBoxon>
        <Title>Photos</Title>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <PhotosContainer>
          {photos.map(photo => (
            <PhotoItem key={photo.id}>
              <PhotoTitle>{photo.title}</PhotoTitle>
              <Image
                src={photo.url}
                alt={photo.title}
                onClick={() => openLightbox(photo.url)} // Открытие Lightbox при клике на изображение
                onError={(e) => { console.error(`Failed to load image at ${photo.url}`); }}
              />
              {/* <PhotoInfo>ID: {photo.id}</PhotoInfo> */}
              <Description>{photo.description}</Description>
              <PhotoInfo>User ID: {photo.userId}</PhotoInfo>
              <PhotoActions>
                <NavLink onClick={() => handleDeletePhoto(photo.id)}>Delete Photo</NavLink>
              </PhotoActions>
            </PhotoItem>
          ))}
        </PhotosContainer>
      </div>
    </Container>
  );
}

export default AllPhotos;