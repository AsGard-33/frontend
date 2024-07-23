import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GetAllLocationsWrapper, Title, LocationList, LocationItem, ErrorMessage } from './styles';
import { LocationDTO } from './types';

const GetAllLocations: React.FC = () => {
  const [locations, setLocations] = useState<LocationDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/api/locations/');
        setLocations(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch locations');
      }
    };

    fetchLocations();
  }, []);

  return (
    <GetAllLocationsWrapper>
      <Title>All Locations</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <LocationList>
        {locations.map((location) => (
          <LocationItem key={location.id}>
            <p>ID: {location.id}</p>
            <p>Title: {location.title}</p>
            <p>Description: {location.description}</p>
          </LocationItem>
        ))}
      </LocationList>
    </GetAllLocationsWrapper>
  );
};

export default GetAllLocations;
