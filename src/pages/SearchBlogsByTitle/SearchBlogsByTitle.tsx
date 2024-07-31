import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchBlogsByTitle } from 'services/blogService';
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

const SearchBlogsByTitle: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [blogs, setBlogs] = useState<BlogCreateDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (!title) {
        setError('Please enter a title to search');
        return;
      }
      const results = await searchBlogsByTitle(title);
      if (results.length === 0) {
        setError('No blogs found');
      } else {
        setError(null);
        setBlogs(results);
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
      <Title>Search Blogs by Title</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Blog Title"
      />
      <Button onClick={handleSearch}>Search</Button>
      <Button onClick={handleBack}>back to blogs</Button>
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

export default SearchBlogsByTitle;
