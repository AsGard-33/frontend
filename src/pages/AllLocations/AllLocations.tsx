import React, { useEffect, useState } from 'react';
import { fetchAllLocations } from 'services/locationService';
import { LocationDTO } from 'pages/AllLocations/types';
import { AllLocationsWrapper, LocationCard, Title } from './styles';

const AllLocations: React.FC = () => {
  const [locations, setLocations] = useState<LocationDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const locationData = await fetchAllLocations();
        setLocations(locationData);
      } catch (err) {
        setError('Failed to fetch locations');
      }
    };

    getLocations();
  }, []);

  return (
    <AllLocationsWrapper>
      <Title>All Locations</Title>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {locations.map(location => (
          <LocationCard key={location.id}>
            <h3>{location.title}</h3>
            <p>{location.description}</p>
          </LocationCard>
        ))}
      </div>
    </AllLocationsWrapper>
  );
};

export default AllLocations;
