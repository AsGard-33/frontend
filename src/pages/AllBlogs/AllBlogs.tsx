import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Blog } from './types';
import {
  Container,
  BlogList,
  BlogCard,
  Title,
  Sidebar,
  NavLink,
  BlogTitle,
  BlogContent,
  BlogID,
  BlogActions
} from './styles';

const AllBlogsPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get<Blog[]>('/api/blogs/all')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(err => {
        setError('Ошибка при загрузке блогов: ' + err.message);
      });
  }, []);

  return (
    <Container>
      <Sidebar>
        <NavLink onClick={() => navigate('/create-blog')}>Create Blog</NavLink>
        <NavLink onClick={() => navigate('/search-blogs-by-title')}>Search Blogs by Title</NavLink>
        <NavLink onClick={() => navigate('/search-blogs-by-id')}>Search Blogs by ID</NavLink>
      </Sidebar>
      <div>
        <Title>All Blogs</Title>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <BlogList>
          {blogs.map(blog => (
            <BlogCard key={blog.id}>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogContent>{blog.content}</BlogContent>
              <BlogID>ID: {blog.id}</BlogID>
              <BlogActions>
                <NavLink onClick={() => navigate(`/update-blog/${blog.id}`)}>Update Blog</NavLink>
                <NavLink onClick={() => navigate(`/delete-blog/${blog.id}`)}>Delete Blog</NavLink>
              </BlogActions>
            </BlogCard>
          ))}
        </BlogList>
      </div>
    </Container>
  );
};

export default AllBlogsPage;
