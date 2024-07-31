import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBlogById } from 'services/blogService';
import { BlogCreateDTO } from './types';
import { 
  SearchBlogsWrapper, 
  Title, 
  Input, 
  Button, 
  ResultsList, 
  BlogCard, 
  BlogTitle, 
  BlogContent, 
  BlogActions, 
  NavLink, 
  ResultItem, 
  ErrorMessage 
} from './styles';

const SearchBlogsById: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [blogs, setBlogs] = useState<BlogCreateDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (!id) {
        setError('Please enter a blog ID to search');
        return;
      }
      const result = await getBlogById(parseInt(id, 10));
      if (!result) {
        setError('No blogs found');
        setBlogs([]);
      } else {
        setError(null);
        setBlogs([result]);
      }
    } catch (err) {
      setError('Failed to fetch blogs');
      setBlogs([]);
    }
  };

  const handleBack = () => {
    navigate('/blogs');
  };

  return (
    <SearchBlogsWrapper>
      <Title>Search Blogs by ID</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Blog ID"
      />
      <Button onClick={handleSearch}>Search</Button>
      <Button onClick={handleBack}>Back to Blogs</Button>
      <ResultsList>
        {blogs.length === 0 && !error ? (
          <ResultItem>No blogs found</ResultItem>
        ) : (
          blogs.map((blog) => (
            <BlogCard key={blog.id}>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogContent>{blog.content}</BlogContent>
              <BlogActions>
                <NavLink onClick={() => navigate(`/update-blog/${blog.id}`)}>Update Blog</NavLink>
                <NavLink onClick={() => navigate(`/delete-blog/${blog.id}`)}>Delete Blog</NavLink>
              </BlogActions>
            </BlogCard>
          ))
        )}
      </ResultsList>
    </SearchBlogsWrapper>
  );
};

export default SearchBlogsById;
