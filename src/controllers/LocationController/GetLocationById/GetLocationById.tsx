import React, { useState } from 'react';
import axios from 'axios';
import { GetLocationWrapper, Title, Input, FetchButton, LocationDetails, ErrorMessage } from './styles';
import { LocationDTO } from './types';

const GetLocationById: React.FC = () => {
  const [id, setId] = useState('');
  const [location, setLocation] = useState<LocationDTO | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchLocation = async () => {
    try {
      const response = await axios.get(`/api/locations/${id}`);
      setLocation(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch location');
      setLocation(null);
    }
  };

  return (
    <GetLocationWrapper>
      <Title>Get Location by ID</Title>
      <Input
        type="text"
        placeholder="Enter location ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <FetchButton onClick={fetchLocation}>Fetch Location</FetchButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {location && (
        <LocationDetails>
          <p>ID: {location.id}</p>
          <p>Title: {location.title}</p>
          <p>Description: {location.description}</p>
        </LocationDetails>
      )}
    </GetLocationWrapper>
  );
};

export default GetLocationById;
