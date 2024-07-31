import React from "react";
import Lightbox from "components/Lightbox/Lightbox";
import { UserLogo, video1, video2, video3 } from "assets";
import {
  HomeWrapper,
  HomeTitle,
  HomeMessage,
  InfoSection,
  PhotosSection,
  // PhotoCard,
  Logo,
  PhotoContainer,
  TitleContainer,
  VideoCard2,
  PhotoTitle,
  PhotoDescription,
  MessageBox,
  VideoCard,
  VideoContainer,
} from "./styles";

const HomePage: React.FC = () => {
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);

  // const openLightbox = (image: string) => {
  //   setLightboxImage(image);
  // };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <HomeWrapper>
      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={closeLightbox} />
      )}
      <Logo>
        <PhotoContainer>
          <img src={UserLogo} alt="Travelbooktoday" />
        </PhotoContainer>
        <MessageBox>
          <HomeTitle>Welcome to Our Travel Site</HomeTitle>
          <InfoSection>
            <HomeMessage>
              Welcome to our travel site, a paradise for travel bloggers and
              enthusiasts! Here, you can connect with like-minded travelers,
              make new friends, and share your adventures. Once registered, you
              can create your own blogs, upload stunning photos of the places
              you've visited, and tag their exact locations for others to
              explore. Exchange messages with fellow travelers and discover
              hidden gems around the world. Our site offers a vibrant community
              where every user can inspire and be inspired. Start your journey
              with us and turn every trip into an unforgettable experience!
            </HomeMessage>
          </InfoSection>
        </MessageBox>
      </Logo>
      {/* <PhotosSection>
        <PhotoCard onClick={() => openLightbox(Paris)}>
          <PhotoContainer>
            <img src={Paris} alt="Eiffel Tower" />
          </PhotoContainer>
          <PhotoTitle>Eiffel Tower</PhotoTitle>
          <PhotoDescription>
            Paris, France - Eiffel Tower at sunset
          </PhotoDescription>
        </PhotoCard>
        <PhotoCard onClick={() => openLightbox(newYork)}>
          <PhotoContainer>
            <img src={newYork} alt="Statue of Liberty" />
          </PhotoContainer>
          <PhotoTitle>Statue of Liberty</PhotoTitle>
          <PhotoDescription>
            New York, USA - Statue of Liberty with blue sky
          </PhotoDescription>
        </PhotoCard>
        <PhotoCard onClick={() => openLightbox(Sydney)}>
          <PhotoContainer>
            <img src={Sydney} alt="Sydney Opera House" />
          </PhotoContainer>
          <PhotoTitle>Sydney Opera House</PhotoTitle>
          <PhotoDescription>
            Sydney, Australia - Sydney Opera House at night
          </PhotoDescription>
        </PhotoCard>
      </PhotosSection> */}
      <PhotosSection>
        <VideoCard>
          <VideoContainer>
            <video src={video1} autoPlay loop muted controls />
          </VideoContainer>
          <TitleContainer>
            <PhotoTitle>Conquering mountain peaks</PhotoTitle>
            <PhotoDescription>
              Experience the thrill of conquering towering mountain peaks. This
              video captures a hiker's journey through rugged terrain,
              showcasing breathtaking views from the summit. As the hiker
              navigates steep paths and rocky cliffs, viewers can feel the sense
              of adventure and accomplishment that comes with reaching the top.
              Perfect for outdoor enthusiasts and those seeking inspiration from
              nature's grandeur.
            </PhotoDescription>
          </TitleContainer>
        </VideoCard>
        <VideoCard2>
          <VideoContainer>
            <video src={video2} autoPlay loop muted controls />
          </VideoContainer>
          <TitleContainer>
            <PhotoTitle>Friendly gatherings around the campfire</PhotoTitle>
            <PhotoDescription>
              Experience the warmth and camaraderie of a campfire gathering.
              This scene captures friends and family coming together to enjoy
              the simple pleasures of the outdoors. As the flames dance and
              crackle, faces light up with joy and relaxation. The atmosphere is
              filled with laughter, shared stories, and the occasional strumming
              of a guitar. The gentle glow of the fire provides a cozy backdrop,
              while the aroma of roasting marshmallows adds to the sensory
              delight. This setting embodies the spirit of togetherness,
              creating cherished memories under the starlit sky.
            </PhotoDescription>
          </TitleContainer>
        </VideoCard2>
        <VideoCard>
          <VideoContainer>
            <video src={video3} autoPlay loop muted controls />
          </VideoContainer>
          <TitleContainer>
            <PhotoTitle>Friendly Gatherings Around the Campfire</PhotoTitle>
            <PhotoDescription>
              Group trips to historical sites offer an enriching experience,
              combining education, adventure, and social interaction. These
              trips allow participants to explore ancient architecture and
              landmarks, guided by knowledgeable experts who share fascinating
              stories and historical contexts. Each site visited provides a
              unique narrative, from grand palaces and fortresses to sacred
              temples and monuments. The trips foster a sense of camaraderie
              among participants, who share their reflections and discoveries,
              enhancing the overall experience. Interactive elements like
              reenactments and hands-on activities bring history to life, making
              the journey both educational and memorable. Enjoying local cuisine
              in historical settings further deepens the cultural immersion.
              These group excursions leave participants with lasting memories
              and a profound appreciation for the past.
            </PhotoDescription>
          </TitleContainer>
        </VideoCard>
      </PhotosSection>
    </HomeWrapper>
  );
};

export default HomePage;
