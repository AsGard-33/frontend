import React, { useState } from 'react';
import { searchLocationsByTitle } from 'services/locationService';
import { LocationDTO } from './types';
import { SearchLocationWrapper, Title, Input, Button, ResultsList, ResultItem, ErrorMessage } from './styles';

const SearchLocationByTitle: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [locations, setLocations] = useState<LocationDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

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
            <ResultItem key={location.id}>
              <h3>{location.title}</h3>
              <p>{location.description}</p>
            </ResultItem>
          ))
        )}
      </ResultsList>
    </SearchLocationWrapper>
  );
};

export default SearchLocationByTitle;
