import React from 'react';
import { AllBlogController } from 'controllers/BlogController/AllBlogs/AllBlogsController';

const AllBlogsPage = () => {
  return (
    <div>
      <h1>Все блоги</h1>
      <AllBlogController />
    </div>
  );
};

export default AllBlogsPage;
