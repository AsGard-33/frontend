import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLocationById } from 'services/locationService';
import { LocationDTO } from './types';
import { LocationDetailWrapper, Title, Description } from './styles';

const LocationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [location, setLocation] = useState<LocationDTO | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        if (!id) {
          throw new Error('ID is undefined');
        }
        const locationData = await getLocationById(parseInt(id, 10));
        setLocation(locationData);
      } catch (err) {
        setError('Failed to fetch location details');
      }
    };

    fetchLocation();
  }, [id]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!location) {
    return <p>Loading...</p>;
  }

  return (
    <LocationDetailWrapper>
      <Title>{location.title}</Title>
      <Description>{location.description}</Description>
    </LocationDetailWrapper>
  );
};

export default LocationDetail;
