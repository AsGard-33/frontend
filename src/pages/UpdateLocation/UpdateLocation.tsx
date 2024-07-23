import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLocationById, updateLocation } from 'services/locationService';
import { LocationDTO } from './types';
import { UpdateLocationWrapper, Title, Form, Input, Button, ErrorMessage, SuccessMessage } from './styles';

const UpdateLocation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [location, setLocation] = useState<LocationDTO>({ id: 0, title: '', description: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateLocation(location.id, location);
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate(`/locations/${location.id}`);
      }, 2000);
    } catch (err) {
      setError('Failed to update location');
      setSuccess(false);
    }
  };

  return (
    <UpdateLocationWrapper>
      <Title>Update Location</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Location updated successfully!</SuccessMessage>}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          value={location.title}
          onChange={handleChange}
          placeholder="Enter Location Title"
        />
        <Input
          type="text"
          name="description"
          value={location.description}
          onChange={handleChange}
          placeholder="Enter Location Description"
        />
        <Button type="submit">Update Location</Button>
      </Form>
    </UpdateLocationWrapper>
  );
};

export default UpdateLocation;
