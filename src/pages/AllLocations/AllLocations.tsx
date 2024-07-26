import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllLocations } from 'services/locationService';
import { LocationDTO } from 'pages/AllLocations/types';
import { AllLocationsWrapper, LocationCard, Title, Sidebar, NavLink } from './styles';

const AllLocations: React.FC = () => {
  const [locations, setLocations] = useState<LocationDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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
      <Sidebar>
        <NavLink onClick={() => navigate('/create-location')}>Create Location</NavLink>
        <NavLink onClick={() => navigate('/search-location')}>Search Location</NavLink>
        <NavLink onClick={() => navigate('/update-location/:id')}>Update Location</NavLink>
        <NavLink onClick={() => navigate('/delete-location/:id')}>Delete Location</NavLink>
      </Sidebar>
      <div>
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
      </div>
    </AllLocationsWrapper>
  );
};

export default AllLocations;