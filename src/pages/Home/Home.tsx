import React from "react";
import { Paris, newYork, Sydney } from "assets";
import {
  HomeWrapper,
  HomeTitle,
  HomeMessage,
  InfoSection,
  PhotosSection,
  PhotoCard,
  PhotoContainer,
  PhotoTitle,
  PhotoDescription,
  MessageBox,
} from "./styles";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <MessageBox>
        <HomeTitle>Welcome to Our Travel Site</HomeTitle>
        <InfoSection>
          <HomeMessage>
            Welcome to our travel site, a paradise for travel bloggers and
            enthusiasts! Here, you can connect with like-minded travelers, make
            new friends, and share your adventures. Once registered, you can
            create your own blogs, upload stunning photos of the places you've
            visited, and tag their exact locations for others to explore.
            Exchange messages with fellow travelers and discover hidden gems
            around the world. Our site offers a vibrant community where every
            user can inspire and be inspired. Start your journey with us and
            turn every trip into an unforgettable experience!
          </HomeMessage>
        </InfoSection>
      </MessageBox>
      <PhotosSection>
        <PhotoCard>
          <PhotoContainer>
            <img src={Paris} alt="Eiffel Tower" />
          </PhotoContainer>
          <PhotoTitle>Eiffel Tower</PhotoTitle>
          <PhotoDescription>
            Paris, France - Eiffel Tower at sunset
          </PhotoDescription>
        </PhotoCard>
        <PhotoCard>
          <PhotoContainer>
            <img src={newYork} alt="Statue of Liberty" />
          </PhotoContainer>
          <PhotoTitle>Statue of Liberty</PhotoTitle>
          <PhotoDescription>
            New York, USA - Statue of Liberty with blue sky
          </PhotoDescription>
        </PhotoCard>
        <PhotoCard>
          <PhotoContainer>
            <img src={Sydney} alt="Sydney Opera House" />
          </PhotoContainer>
          <PhotoTitle>Sydney Opera House</PhotoTitle>
          <PhotoDescription>
            Sydney, Australia - Sydney Opera House at night
          </PhotoDescription>
        </PhotoCard>
      </PhotosSection>
    </HomeWrapper>
  );
};

export default Home;
