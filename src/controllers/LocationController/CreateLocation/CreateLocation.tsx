import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CreateLocationWrapper, Title, Input, Button, ErrorMessage, SuccessMessage } from './styles';

const CreateLocationController: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const response = await axios.post('/api/locations', {
        title,
        description,
        coordinates,
        image,
      });
      console.log(response.data);
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate('/locations');
      }, 2000);
    } catch (err) {
      setError('Failed to create location');
      setSuccess(false);
    }
  };

  return (
    <CreateLocationWrapper>
      <Title>Create Location</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Location created successfully!</SuccessMessage>}
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Coordinates"
        value={coordinates}
        onChange={(e) => setCoordinates(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onClick={handleCreate}>Create</Button>
    </CreateLocationWrapper>
  );
};

export default CreateLocationController;
