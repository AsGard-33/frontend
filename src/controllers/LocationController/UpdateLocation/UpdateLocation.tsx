import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UpdateLocationWrapper, Title, Form, Label, Input, Button, ErrorMessage } from './styles';
import { LocationDTO } from './types';

const UpdateLocation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [location, setLocation] = useState<LocationDTO>({ id: parseInt(id || '0'), title: '', description: '' });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(`/api/locations/${id}`);
        setLocation(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch location');
      }
    };

    if (id) {
      fetchLocation();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/locations/${id}`, location);
      setError(null);
      alert('Location updated successfully');
    } catch (err) {
      setError('Failed to update location');
    }
  };

  return (
    <UpdateLocationWrapper>
      <Title>Update Location</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="title">Title:</Label>
        <Input
          id="title"
          name="title"
          type="text"
          value={location.title}
          onChange={handleChange}
        />
        <Label htmlFor="description">Description:</Label>
        <Input
          id="description"
          name="description"
          type="text"
          value={location.description}
          onChange={handleChange}
        />
        <Button type="submit">Update Location</Button>
      </Form>
    </UpdateLocationWrapper>
  );
};

export default UpdateLocation;

