import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addFavoriteLocation } from 'services/userService';
import { AddFavoriteLocationWrapper, Title } from './styles';
import Button from 'components/Button/Button';

const AddFavoriteLocation: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [locationId, setLocationId] = useState<number | string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleAddFavorite = async () => {
    try {
      if (!userId || !locationId) {
        setError('Both userId and locationId are required');
        return;
      }
      await addFavoriteLocation(parseInt(userId), parseInt(locationId.toString()));
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError('Failed to add favorite location');
      setSuccess(false);
    }
  };

  return (
    <AddFavoriteLocationWrapper>
      <Title>Add Favorite Location</Title>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Location added successfully!</p>}
      <input
        type="text"
        value={locationId}
        onChange={(e) => setLocationId(e.target.value)}
        placeholder="Enter Location ID"
      />
      <Button name="Add Location" onClick={handleAddFavorite} />
    </AddFavoriteLocationWrapper>
  );
};

export default AddFavoriteLocation;
