import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";

import { HashRouter, Route, Routes } from "react-router-dom";


import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import Profile from "pages/Profile/Profile";
import UserDetail from "pages/UserDetail/UserDetail";
import UserUpdate from "pages/UserUpdate/UserUpdate";
import AddFavoriteLocation from "pages/AddFavoriteLocation/AddFavoriteLocation";
import AllUsers from "pages/AllUsers/AllUsers";
import SearchUserByUsername from "pages/SearchUserByUsername/SearchUserByUsername";
import DeleteUser from "pages/DeleteUser/DeleteUser";
import AllLocations from "pages/AllLocations/AllLocations";
import LocationDetail from "pages/LocationDetail/LocationDetail";
import UpdateLocation from "pages/UpdateLocation/UpdateLocation";
import DeleteLocation from "pages/DeleteLocation/DeleteLocation";
import SearchLocationByTitle from "pages/SearchLocationByTitle/SearchLocationByTitle";
import AddFriend from "pages/AddFriend/AddFriend";
import AllFriends from "pages/AllFriends/AllFriends";
import RemoveFriend from "pages/RemoveFriend/RemoveFriend";
import AllBlogsByUser from "pages/AllBlogsByUser/AllBlogsByUser";
import BlogDetail from "pages/BlogDetail/BlogDetail";
import CreateBlog from "pages/CreateBlog/CreateBlog";
import UpdateBlog from "pages/UpdateBlog/UpdateBlog";
import AllBlogsPage from "pages/AllBlogs/AllBlogs";
import DeleteBlog from "pages/DeleteBlog/DeleteBlog";
import SearchBlogsByTitle from "pages/SearchBlogsByTitle/SearchBlogsByTitle";
import AllMessagesBySender from "pages/AllMessagesBySender/AllMessagesBySender";
import AllMessagesByRecipient from "pages/AllMessagesByRecipient/AllMessagesByRecipient";
import AllMessagesByConversation from "pages/AllMessagesByConversation/AllMessagesByConversation";
import DeleteMessage from "pages/DeleteMessage/DeleteMessage";
import AllNotificationsByUser from "pages/AllNotificationsByUser/AllNotificationsByUser";
import UpdateNotificationStatus from "pages/UpdateNotificationStatus/UpdateNotificationStatus";
import UploadPhotoPages from "pages/UploadPhoto/UploadPhotoPages";
import AllPhotos from "pages/AllPhotos/AllPhotos";
import AllPhotosByUser from "pages/AllPhotosByUser/AllPhotosByUser";
import DeletePhoto from "pages/DeletePhoto/DeletePhoto";
import SearchPhotosByTitle from "pages/SearchPhotosByTitle/SearchPhotosByTitle";
import Logout from "pages/Logout/Logout";

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
     
      <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/update/:id" element={<UserUpdate />} />
          <Route path="/users/add-favorite/:userId/:locationId" element={<AddFavoriteLocation />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/users/search" element={<SearchUserByUsername />} />
          <Route path="/users/delete" element={<DeleteUser />} />
          <Route path="/locations" element={<AllLocations />} />
          <Route path="/locations/:id" element={<LocationDetail />} />
          <Route path="/locations/update/:id" element={<UpdateLocation />} />
          <Route path="/locations/delete/:id" element={<DeleteLocation />} />
          <Route path="/locations/search" element={<SearchLocationByTitle />} />
          <Route path="/friends/add/:userId/:friendId" element={<AddFriend />} />
          <Route path="/friends/:userId" element={<AllFriends />} />
          <Route path="/friends/remove/:userId/:friendId" element={<RemoveFriend />} />
          <Route path="/blogs/user/:userId" element={<AllBlogsByUser />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/blogs/create" element={<CreateBlog />} />
          <Route path="/blogs" element={<AllBlogsPage />} /> 
          <Route path="/blogs/update/:id" element={<UpdateBlog />} />
          <Route path="/blogs/delete/:id" element={<DeleteBlog />} />
          <Route path="/blogs/search/:title" element={<SearchBlogsByTitle />} />
          <Route path="/messages/sender/:senderId" element={<AllMessagesBySender />} />
          <Route path="/messages/recipient/:recipientId" element={<AllMessagesByRecipient />} />
          <Route path="/messages/conversation/:conversationId" element={<AllMessagesByConversation />} />
          <Route path="/messages/delete/:id" element={<DeleteMessage />} />
          <Route path="/notifications/user/:userId" element={<AllNotificationsByUser />} />
          <Route path="/notifications/update/:id" element={<UpdateNotificationStatus />} />
          <Route path="/photos/upload" element={<UploadPhotoPages />} />
          <Route path="/photos" element={<AllPhotos />} />
          <Route path="/photos/user/:userId" element={<AllPhotosByUser />} />
          <Route path="/photos/delete/:photoId" element={<DeletePhoto />} />
          <Route path="/photos/search/:title" element={<SearchPhotosByTitle />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
     </HashRouter>
  );
 }

 export default App;
