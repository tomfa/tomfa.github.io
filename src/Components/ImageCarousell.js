import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

import './ImageCarousell.css';

export const ImageCarousell = ({ images, thumbnail }) => {
  const alt = images[0].caption;
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <img
        className="m-carousell-image w-100"
        src={thumbnail}
        alt={alt}
        onClick={() => setOpen(true)}
      />
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={() => setOpen(false)}>
            <Carousel views={images.map(url => ({src: url}))} isFullscreen={true} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};
