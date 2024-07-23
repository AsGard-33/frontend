import { useEffect, useState } from "react";
import axios from "axios";
import { ProfileWrapper, ProfileTitle, ProfileInfo, ProfileError } from "./styles";
import { UserProfile } from "./types";
import Button from "components/Button/Button";

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get<UserProfile>("/api/auth/profile", { withCredentials: true });
        setProfile(response.data);
      } catch (err) {
        setError("Failed to load profile information.");
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("/api/auth/logout", { withCredentials: true });
      window.location.href = "/login"; // Redirect to login page after logout
    } catch (err) {
      setError("Failed to logout.");
    }
  };

  if (error) {
    return <ProfileError>{error}</ProfileError>;
  }

  if (!profile) {
    return <ProfileWrapper>Loading...</ProfileWrapper>;
  }

  return (
    <ProfileWrapper>
      <ProfileTitle>User Profile</ProfileTitle>
      <ProfileInfo>
        <strong>Username:</strong> {profile.username}
      </ProfileInfo>
      <ProfileInfo>
        <strong>Email:</strong> {profile.email}
      </ProfileInfo>
      <Button name="Logout" onClick={handleLogout} />
    </ProfileWrapper>
  );
};

export default Profile;
