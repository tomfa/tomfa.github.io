import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styled from 'styled-components';

import { size } from '../../utils/styles';

const Image = styled.img`
  width: 100%;
  cursor: pointer;
  min-height: 200px;

  @media ${size.large} {
    transition: filter 0.3s;
    filter: brightness(0.6);

    &:hover {
      filter: brightness(1);
    }
  }
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  max-height: 300px;
  overflow: hidden;
`;

export const EventImage = ({ image, carousellImages, link }) => {
  const hasImages = carousellImages && carousellImages.length;
  const [isOpen, setOpen] = useState(false);

  if (!hasImages) {
    return (
      <ImageWrapper>
        <a href={link}>
          <Image src={image} alt={link} loading="lazy" />
        </a>
      </ImageWrapper>
    );
  }

  return (
    <ImageWrapper>
      <Image src={image} alt={link} onClick={() => setOpen(true)} />
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={() => setOpen(false)}>
            <Carousel
              views={carousellImages.map(url => ({ src: url, alt: link }))}
              isFullscreen={true}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </ImageWrapper>
  );
};
