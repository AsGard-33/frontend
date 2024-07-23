import React, { useState } from 'react';
import axios from 'axios';
import { BlogDTO } from './types';
import { SearchWrapper, Input, Button, BlogsWrapper, Title, BlogItem, ErrorMessage } from './styles';

const SearchBlogsByTitle: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [blogs, setBlogs] = useState<BlogDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/blogs/search/${title}`);
      setBlogs(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch blogs');
    }
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      <BlogsWrapper>
        <Title>Search Results</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {blogs.map((blog) => (
          <BlogItem key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </BlogItem>
        ))}
      </BlogsWrapper>
    </SearchWrapper>
  );
};

export default SearchBlogsByTitle;
