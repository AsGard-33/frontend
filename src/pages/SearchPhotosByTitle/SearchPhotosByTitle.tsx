import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchPhotosByTitle } from 'services/photoService';
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
  PhotoCard,
  Description,
  PhotoTitle,
  ErrorMessage
} from './styles';

const SearchPhotosByTitle: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (!title) {
        setError('Title is required');
        return;
      }
      const photosData = await searchPhotosByTitle(title);
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
      <Title>Search Photos by Title</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Photo Title"
      />
      <Button onClick={handleSearch}>Search</Button>
      <PhotoList>
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
      </PhotoList>
      {lightboxOpen && (
        <Lightbox image={currentImage} onClose={() => setLightboxOpen(false)} />
      )}
    </SearchPhotosWrapper>
  );
};

export default SearchPhotosByTitle;
