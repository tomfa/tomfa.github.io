import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styled from 'styled-components';

import { size } from '../styles';

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

const CarousellWrapper = styled.div`
  max-width: 100%;
  max-height: 300px;
  overflow: hidden;
`;

export const ImageCarousell = ({ images, thumbnail }) => {
  const alt = images[0].caption;
  const [isOpen, setOpen] = useState(false);

  return (
    <CarousellWrapper>
      <Image src={thumbnail} alt={alt} onClick={() => setOpen(true)} />
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={() => setOpen(false)}>
            <Carousel
              views={images.map(url => ({ src: url }))}
              isFullscreen={true}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </CarousellWrapper>
  );
};
