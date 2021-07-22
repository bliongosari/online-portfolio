import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function ProjectImages(props) {
  const images = [
    {
      original: "http://lorempixel.com/1000/600/nature/1/",
    },
    {
      original: "http://lorempixel.com/1000/600/nature/2/",
    },
    {
      original: "http://lorempixel.com/1000/600/nature/3/",
    },
    {
      original: "http://lorempixel.com/1000/600/nature/2/",
    },
    {
      original: "http://lorempixel.com/1000/600/nature/3/",
    },
  ];

  return (
    <ImageGallery
      items={images}
      defaultImage={images[0].original}
      showBullets={true}
      showIndex={true}
      showThumbnails={false}
      lazyLoad={true}
      showPlayButton={false}
    />
  );
}

export default ProjectImages;
