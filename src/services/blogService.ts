import axios from 'axios';
import { BlogCreateDTO } from 'controllers/BlogController/CreateBlog/types';

export const getBlogsByUserId = async (userId: number): Promise<BlogCreateDTO[]> => {
  const response = await axios.get(`/api/blogs/user/${userId}`);
  return response.data;
};

export const getBlogById = async (id: number): Promise<BlogCreateDTO> => {
  const response = await axios.get(`/api/blogs/${id}`);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error('Failed to fetch blog');
  }
};

export const createBlog = async (data: BlogCreateDTO): Promise<void> => {
  await axios.post('/api/blogs', data);
};

export const updateBlog = async (id: number, blogData: BlogCreateDTO): Promise<void> => {
  await axios.put(`/api/blogs/${id}`, blogData);
};

export const deleteBlog = async (id: number): Promise<void> => {
    await axios.delete(`/api/blogs/${id}`);
};

export const searchBlogsByTitle = async (title: string): Promise<BlogCreateDTO[]> => {
    const response = await axios.get(`/api/blogs/search/${title}`);
    return response.data;
};