import React, { useState } from 'react';
import axios from 'axios';
import { PhotoWrapper, Input, Button, PhotoList, PhotoItem, ErrorMessage } from './styles';
import { PhotoDTO } from './types';

const GetAllPhotosByUser: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleGetPhotos = async () => {
    try {
      const response = await axios.get(`/api/photos/user/${userId}`);
      setPhotos(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch photos.');
    }
  };

  return (
    <PhotoWrapper>
      <Input
        type="text"
        name="userId"
        placeholder="Enter user ID"
        value={userId}
        onChange={handleChange}
      />
      <Button onClick={handleGetPhotos}>Get Photos</Button>
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

export default GetAllPhotosByUser;
