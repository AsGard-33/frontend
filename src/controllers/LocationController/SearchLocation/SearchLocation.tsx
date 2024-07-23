import React, { useState } from 'react';
import axios from 'axios';
import { SearchLocationWrapper, Title, Input, Button, ErrorMessage, ResultsWrapper, LocationItem } from './styles';
import { LocationDTO } from './types';

const SearchLocation: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [locations, setLocations] = useState<LocationDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/locations/search?title=${title}`);
      setLocations(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch locations');
      setLocations([]);
    }
  };

  return (
    <SearchLocationWrapper>
      <Title>Поиск местоположения по названию</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        placeholder="Введите название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleSearch}>Поиск</Button>
      <ResultsWrapper>
        {locations.map((location) => (
          <LocationItem key={location.id}>
            <h3>{location.title}</h3>
            <p>{location.description}</p>
          </LocationItem>
        ))}
      </ResultsWrapper>
    </SearchLocationWrapper>
  );
};

export default SearchLocation;
