import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllLocations } from 'services/locationService';
import { LocationDTO } from 'pages/AllLocations/types';
import { AllLocationsWrapper, LocationCard, Title, Sidebar, NavLink, LocationTitle, ButtonBoxon, LocationDescription, LocationImage, LocationCoordinates, LocationID, LocationActions, ProfileButton } from './styles';
import Lightbox from 'components/Lightbox/Lightbox';

const AllLocations: React.FC = () => {
  const [locations, setLocations] = useState<LocationDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');
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

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  return (
    <AllLocationsWrapper>
      <Sidebar>
        <NavLink onClick={() => navigate('/create-location')}>Create Location</NavLink>
        <NavLink onClick={() => navigate('/search-location')}>Search Location</NavLink>
      </Sidebar>
      <div>
        <ButtonBoxon onClick={() => navigate('/profile')}>
          <ProfileButton>Profile</ProfileButton>
        </ButtonBoxon>
        <Title>All Locations</Title>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          {locations.map(location => (
            <LocationCard key={location.id}>
              <LocationTitle>{location.title}</LocationTitle>
              <LocationDescription>{location.description}</LocationDescription>
              <LocationImage
                src={location.image || 'https://via.placeholder.com/150'}
                alt={location.title}
                onClick={() => handleImageClick(location.image || 'https://via.placeholder.com/150')}
              />
              <LocationCoordinates>Coordinates: {location.coordinates}</LocationCoordinates>
              <LocationID>ID: {location.id}</LocationID>
              <LocationActions>
                <NavLink onClick={() => navigate(`/update-location/${location.id}`)}>Update Location</NavLink>
                <NavLink onClick={() => navigate(`/delete-location/${location.id}`)}>Delete Location</NavLink>
              </LocationActions>
            </LocationCard>
          ))}
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox image={currentImage} onClose={() => setLightboxOpen(false)} />
      )}
    </AllLocationsWrapper>
  );
};

export default AllLocations;