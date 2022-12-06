import Header from '../component/header'
import Footer from '../component/footer'
import css from "./style/art.module.css"
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
const photos = [
  // white
  {
    src: "https://i.ibb.co/mcy3khX/IMG-3263.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.ibb.co/0KBsms5/IMG-3262.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/gzsH1q8/IMG-1266-2.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/mzt7Rzq/IMG-2349.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.ibb.co/fYTwNGV/IMG-3187.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/WnB7cwB/IMG-8844.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/4fcJwK0/IMG-0406.jpg",
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
      <body style={{margin: 0, padding: 0, width: "100%", height: "100%", fontFamily: "Josefin Sans"}}>
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
    </body>
    </div>
  )
}
