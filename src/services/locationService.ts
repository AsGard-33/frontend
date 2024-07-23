import axios from 'axios';
import { LocationDTO } from 'pages/AllLocations/types';

export const fetchAllLocations = async (): Promise<LocationDTO[]> => {
  const response = await axios.get('/api/locations/');
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error('Failed to fetch locations');
  }
};

export const getLocationById = async (id: number): Promise<LocationDTO> => {
    const response = await axios.get(`/api/locations/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch location details');
    }
};

  export const updateLocation = async (id: number, locationData: LocationDTO): Promise<void> => {
    await axios.put(`/api/locations/${id}`, locationData);
};

export const searchLocationsByTitle = async (title: string): Promise<LocationDTO[]> => {
    const response = await axios.get(`/api/locations/search`, { params: { title } });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to search locations');
    }
};

export const deleteLocation = async (id: number): Promise<void> => {
    await axios.delete(`/api/locations/${id}`);
};