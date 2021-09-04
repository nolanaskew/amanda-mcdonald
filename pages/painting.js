import Header from '../component/header'
import Footer from '../component/footer'
import css from "./style/art.module.css"
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
const photos = [
  {
    src: "https://i.ibb.co/N3BpN9G/20210903-173145.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.ibb.co/mHVTMph/20210903-173119.jpg",
    width: 1,
    height: 1
  },
  {
    src: "https://i.ibb.co/GVGYbSp/beehive.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/HXBWzhB/20210903-173211.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://i.ibb.co/BN1qMrB/20210903-173108.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];
export default function Painting() {
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
    <h1 className={css.h1}>Painting</h1>
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
