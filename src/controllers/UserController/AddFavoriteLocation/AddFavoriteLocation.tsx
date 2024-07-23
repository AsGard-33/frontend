import React, { useState } from 'react';
import axios from 'axios';
import { AddFavoriteLocationProps } from './types';
import { AddFavoriteLocationWrapper, Title, Input, Button, ErrorMessage } from './styles';

const AddFavoriteLocation: React.FC<AddFavoriteLocationProps> = ({ userId }) => {
  const [locationId, setLocationId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post(`/api/users/${userId}/favorites/${locationId}`);
      setError(null);
      alert('Location added to favorites successfully');
    } catch (err) {
      setError('Failed to add location to favorites');
    }
  };

  return (
    <AddFavoriteLocationWrapper>
      <Title>Add Favorite Location</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter location ID"
          value={locationId}
          onChange={(e) => setLocationId(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Add to Favorites</Button>
      </form>
    </AddFavoriteLocationWrapper>
  );
};

export default AddFavoriteLocation;
