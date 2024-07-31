import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchLocationsByTitle } from 'services/locationService';
import { LocationDTO } from './types';
import { 
  SearchLocationWrapper, 
  Title, 
  Input, 
  Button, 
  ResultsList,
  LocationCoordinates,
  LocationImage,
  LocationCard,
  LocationTitle,
  LocationDescription, 
  ResultItem,
  LocationActions,
  NavLink,
  ErrorMessage 
} from './styles';
import Lightbox from 'components/Lightbox/Lightbox'; // Импортируем Lightbox

const SearchLocationByTitle: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [locations, setLocations] = useState<LocationDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');
  const navigate = useNavigate(); // Добавляем useNavigate

  const handleSearch = async () => {
    try {
      if (!title) {
        setError('Please enter a title to search');
        return;
      }
      const results = await searchLocationsByTitle(title);
      setLocations(results);
      setError(null);
    } catch (err) {
      setError('Failed to fetch locations');
    }
  };

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  return (
    <SearchLocationWrapper>
      <Title>Search Locations by Title</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Location Title"
      />
      <Button onClick={handleSearch}>Search</Button>
      <ResultsList>
        {locations.length === 0 ? (
          <ResultItem>No locations found</ResultItem>
        ) : (
          locations.map((location) => (
            <LocationCard key={location.id}>
              <LocationTitle>{location.title}</LocationTitle>
              <LocationDescription>{location.description}</LocationDescription>
              <LocationImage
                src={location.image || 'https://via.placeholder.com/150'}
                alt={location.title}
                onClick={() => handleImageClick(location.image || 'https://via.placeholder.com/150')}
              />
              <LocationCoordinates>Coordinates: {location.coordinates}</LocationCoordinates>
              <LocationActions>
                <NavLink onClick={() => navigate(`/update-location/${location.id}`)}>Update Location</NavLink>
                <NavLink onClick={() => navigate(`/delete-location/${location.id}`)}>Delete Location</NavLink>
              </LocationActions>
            </LocationCard>
          ))
        )}
      </ResultsList>
      {lightboxOpen && (
        <Lightbox image={currentImage} onClose={() => setLightboxOpen(false)} />
      )}
    </SearchLocationWrapper>
  );
};

export default SearchLocationByTitle;
