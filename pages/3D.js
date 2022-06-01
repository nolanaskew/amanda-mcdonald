import Header from '../component/header'
import Footer from '../component/footer'
import css from "./style/art.module.css"
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
const photos = [
  // white
  {
    src: "https://i.ibb.co/gzsH1q8/IMG-1266-2.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/4fcJwK0/IMG-0406.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.ibb.co/ZYB6xR2/IMG-1096.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/Nr3R7z8/66406803854-5488-DA80-BBEF-45-BE-9-FC0-98-DD2-E4-FE91-B.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/6nHj35D/IMG-1103.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.ibb.co/Ks2s5Xy/IMG-2919.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/vjSFPQP/IMG-2921.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.ibb.co/RjH5VW7/IMG-5381.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.ibb.co/TPKmBfY/IMG-9564.jpg",
    width: 3,
    height: 4
  },
];
export default function D3() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <title>Amanda McDonald</title>
    <div>
      <Header />
    </div>
    <h1 className={css.h1}>3D</h1>
    <div className={css.gallery}>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    <Footer />
    </div>
  )
}
