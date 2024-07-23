import React, { useState } from 'react';
import axios from 'axios';
import { PhotoWrapper, Input, Button, PhotoList, PhotoItem, ErrorMessage } from './styles';
import { PhotoDTO } from './types';

const SearchPhotosByTitle: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/photos/search/${title}`);
      setPhotos(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to search photos.');
    }
  };

  return (
    <PhotoWrapper>
      <Input
        type="text"
        name="title"
        placeholder="Enter photo title"
        value={title}
        onChange={handleChange}
      />
      <Button onClick={handleSearch}>Search Photos</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <PhotoList>
        {photos.map((photo) => (
          <PhotoItem key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <div>{photo.title}</div>
            <div>{photo.description}</div>
          </PhotoItem>
        ))}
      </PhotoList>
    </PhotoWrapper>
  );
};

export default SearchPhotosByTitle;
