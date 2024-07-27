import React from 'react';
    import { Overlay, Image } from './styles'

interface LightboxProps {
  image: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Image src={image} alt="Lightbox" />
    </Overlay>
  );
};

export default Lightbox;