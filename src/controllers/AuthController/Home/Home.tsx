import { useEffect, useState } from "react";
import axios from "axios";
import { HomeWrapper, HomeTitle, HomeMessage, HomeError } from "./styles";

const Home = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get<string>("/");
        setMessage(response.data);
      } catch (err) {
        setError("Failed to load home message.");
      }
    };

    fetchMessage();
  }, []);

  if (error) {
    return <HomeError>{error}</HomeError>;
  }

  if (!message) {
    return <HomeWrapper>Loading...</HomeWrapper>;
  }

  return (
    <HomeWrapper>
      <HomeTitle>Home Page</HomeTitle>
      <HomeMessage>{message}</HomeMessage>
    </HomeWrapper>
  );
};

export default Home;
