import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchPhotosByUserId } from 'services/photoService';
import { PhotoDTO } from './types';
import Lightbox from 'components/Lightbox/Lightbox'; // Импортируем Lightbox
import {
  SearchPhotosWrapper,
  Title,
  Input,
  Button,
  PhotoList,
  PhotoImage,
  PhotoActions,
  NavLink,
  PhotosContainer,
  PhotoCard,
  Description,
  PhotoTitle,
  ErrorMessage
} from './styles';

const SearchPhotosByUserId: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (!userId) {
        setError('User ID is required');
        return;
      }
      const photosData = await searchPhotosByUserId(userId);
      setPhotos(photosData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch photos');
    }
  };

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  return (
    <SearchPhotosWrapper>
      <Title>Search Photos by User ID</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <Button onClick={handleSearch}>Search</Button>
      <PhotoList>
      <PhotosContainer>
        {photos.length === 0 ? (
          <Title>No photos found</Title>
        ) : (
          
          photos.map((photo) => (
            <PhotoCard key={photo.id}>
              <PhotoTitle>{photo.title}</PhotoTitle>
              <PhotoImage
                src={photo.url}
                alt={photo.title}
                onClick={() => handleImageClick(photo.url)}
              />
              <Description>{photo.description}</Description>
              <PhotoActions>
                {/* <NavLink onClick={() => navigate(`/update-photo/${photo.id}`)}>Update Photo</NavLink> */}
                <NavLink onClick={() => navigate(`/delete-photo/${photo.id}`)}>Delete Photo</NavLink>
              </PhotoActions>
            </PhotoCard>
          ))
          
        )}
        </PhotosContainer>
      </PhotoList>
      {lightboxOpen && (
        <Lightbox image={currentImage} onClose={() => setLightboxOpen(false)} />
      )}
    </SearchPhotosWrapper>
  );
};

export default SearchPhotosByUserId;
