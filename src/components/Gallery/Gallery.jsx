// src/components/GalleryPage.jsx
import React from "react";
import "./Gallery.css"; // Import the CSS file for styling
import gallery1 from '../../assests/exousiagallery/gallerylatest2.jpg'
import gallery2 from '../../assests/exousiagallery/gallery3.jpg'
import gallery3 from '../../assests/exousiagallery/gallery12.jpg'
import gallery4 from '../../assests/exousiagallery/gallerylatest1.jpg'
import gallery5 from '../../assests/exousiagallery/gallerryy.jpg'
import gallery6 from '../../assests/exousiagallery/gallery18.jpg'
import gallery7 from '../../assests/exousiagallery/gallery19.jpg'
import gallery8 from '../../assests/exousiagallery/galleryyy.jpg'
import gallery9 from '../../assests/exousiagallery/galleryy22.jpg'
import gallery11 from '../../assests/exousiagallery/galleryy23.jpg'
import gallery10 from '../../assests/exousiagallery/galleryyyy21.jpg'

const images = [
  // Replace these URLs with your own images
  { src: gallery1, alt: "Image 1" },
  { src: gallery2, alt: "Image 2" },
  { src: gallery3, alt: "Image 3" },
  { src: gallery4, alt: "Image 4" },
  { src: gallery5, alt: "Image 5" },
  { src: gallery6, alt: "Image 6" },
  { src: gallery7, alt: "Image 7" },
  { src: gallery8, alt: "Image 8" },
  { src: gallery9, alt: "Image 9" },
  { src: gallery11, alt: "Image 11" },
  { src: gallery10, alt: "Image 10" },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
