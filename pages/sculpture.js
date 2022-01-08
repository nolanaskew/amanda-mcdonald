import Header from '../component/header'
import Footer from '../component/footer'
import css from "./style/art.module.css"
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
const photos = [
  // white
  {
    src: "https://i.ibb.co/RjH5VW7/IMG-5381.jpg",
    width: 2.1,
    height: 2
  },
  {
    src: "https://i.ibb.co/88QCrDG/IMG-5348.jpg",
    width: .4,
    height: .5
  },
  {
    src: "https://i.ibb.co/Xsh2VMn/IMG-5389.jpg",
    width: 6,
    height: 5
  },
  {
    src: "https://i.ibb.co/XkPWqpy/clock.jpg",
    width: 2.5,
    height: 3
  },
  {
    src: "https://i.ibb.co/87TqfYz/IMG-7092.jpg",
    width: 4,
    height: 5
  },
  {
    src: "https://i.ibb.co/8dt3tks/IMG-7090.jpg",
    width: 4,
    height: 5
  },
  {
    src: "https://i.ibb.co/DpLRXNb/IMG-9569.jpg",
    width: 4,
    height: 5
  },
  {
    src: "https://i.ibb.co/M6R5qSw/IMG-9572-1.jpg",
    width: 2,
    height: 3
  },
  {
    src: "https://i.ibb.co/TPKmBfY/IMG-9564.jpg",
    width: 2,
    height: 2
  },
  {
    src: "https://i.ibb.co/yQbJ6LQ/IMG-9578.jpg",
    width: 3,
    height: 3
  },
  {
    src: "https://i.ibb.co/zGwTZs9/IMG-9551.jpg",
    width: 3,
    height: 3
  },
  {
    src: "https://i.ibb.co/MnC6dGm/IMG-9555-1.jpg",
    width: 3,
    height: 3
  }
];
export default function Sculpture() {
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
    <h1 className={css.h1}>Sculpture</h1>
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
