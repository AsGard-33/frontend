import React, { useState } from 'react';
import { searchPhotosByTitle } from 'services/photoService';
import { SearchPhotosWrapper, Title, ErrorMessage, PhotoList, PhotoItem } from './styles';
import { PhotoDTO } from './types'; // Используем общее определение типа
import Button from 'components/Button/Button';

const SearchPhotosByTitle: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <SearchPhotosWrapper>
      <Title>Search Photos by Title</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Photo Title"
      />
      <Button name="Search" onClick={handleSearch} />
      <PhotoList>
        {photos.map((photo) => (
          <PhotoItem key={photo.id}>
            <p>{photo.title}</p>
            <img src={photo.url} alt={photo.title} />
          </PhotoItem>
        ))}
      </PhotoList>
    </SearchPhotosWrapper>
  );
};

export default SearchPhotosByTitle;
