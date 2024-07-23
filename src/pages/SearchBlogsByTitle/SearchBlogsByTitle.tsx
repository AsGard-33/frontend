import React, { useState } from 'react';
import { searchBlogsByTitle } from 'services/blogService';
import { BlogCreateDTO } from './types';
import { SearchBlogsWrapper, Title, ErrorMessage, SuccessMessage, BlogsList, BlogItem } from './styles';
import Button from 'components/Button/Button';

const SearchBlogsByTitle: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [blogs, setBlogs] = useState<BlogCreateDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSearch = async () => {
    try {
      if (!title) {
        setError('Title is required');
        return;
      }
      const response = await searchBlogsByTitle(title);
      setBlogs(response);
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError('Failed to search blogs');
      setSuccess(false);
    }
  };

  return (
    <SearchBlogsWrapper>
      <Title>Search Blogs by Title</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Blogs found successfully!</SuccessMessage>}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Blog Title"
      />
      <Button name="Search Blogs" onClick={handleSearch} />
      <BlogsList>
        {blogs.map((blog) => (
          <BlogItem key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </BlogItem>
        ))}
      </BlogsList>
    </SearchBlogsWrapper>
  );
};

export default SearchBlogsByTitle;
