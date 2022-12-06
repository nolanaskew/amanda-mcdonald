import Header from '../component/header'
import Footer from '../component/footer'
import css from "./style/art.module.css"
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
const photos = [
  {
    src: "https://i.ibb.co/qDLK3GJ/IMG-4346-1.png",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/Lvn54Cx/IMG-9374-1.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/Q9kjW0s/IMG-4347-1.png",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/7p5XMpj/IMG-5203.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/6rZwG3D/IMG-7800.jpg",
    width: 6,
    height: 4
  },
  {
    src: "https://i.ibb.co/GVMjn4H/IMG-7435.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/CmPQLPs/IMG-3105.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/m8k8Gnr/IMG-3098.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/BN1qMrB/20210903-173108.jpg",
    width: 6,
    height: 4
  },
  {
    src: "https://i.ibb.co/BBGRKPz/final-1.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://i.ibb.co/x1swN7w/final-2.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://i.ibb.co/JkCdhzV/IMG-8718.jpg",
    width: 3,
    height: 4
  },
];
export default function D2() {
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
    <h1 className={css.h1}>2D</h1>
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
