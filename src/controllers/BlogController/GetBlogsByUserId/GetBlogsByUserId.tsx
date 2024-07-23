import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BlogDTO } from './types';
import { BlogsWrapper, Title, BlogItem, ErrorMessage } from './styles';

const GetBlogsByUserId: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [blogs, setBlogs] = useState<BlogDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`/api/blogs/user/${userId}`);
        setBlogs(response.data);
      } catch (err) {
        setError('Failed to fetch blogs');
      }
    };

    fetchBlogs();
  }, [userId]);

  return (
    <BlogsWrapper>
      <Title>User Blogs</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {blogs.map((blog) => (
        <BlogItem key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </BlogItem>
      ))}
    </BlogsWrapper>
  );
};

export default GetBlogsByUserId;
