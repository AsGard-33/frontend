import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogsByUserId } from 'services/blogService';
import { BlogCreateDTO } from './types';
import { AllBlogsWrapper, Title, BlogItem, ErrorMessage } from './styles';

const AllBlogsByUser: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [blogs, setBlogs] = useState<BlogCreateDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        if (!userId) {
          setError('User ID is required');
          return;
        }
        const blogsData = await getBlogsByUserId(parseInt(userId, 10));
        setBlogs(blogsData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch blogs');
      }
    };

    fetchBlogs();
  }, [userId]);

  return (
    <AllBlogsWrapper>
      <Title>All Blogs</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {blogs.map((blog) => (
        <BlogItem key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </BlogItem>
      ))}
    </AllBlogsWrapper>
  );
};

export default AllBlogsByUser;
