// src/components/GalleryPage.jsx
import React from "react";
import "./Gallery.css"; // Import the CSS file for styling
import gallery1 from '../../assests/exousiagallery/exousiagallery1.jpg'
import gallery2 from '../../assests/exousiagallery/gallery3.jpg'
import gallery3 from '../../assests/exousiagallery/gallery12.jpg'
import gallery4 from '../../assests/exousiagallery/gallery16.jpg'
import gallery5 from '../../assests/exousiagallery/gallery17.jpg'
import gallery6 from '../../assests/exousiagallery/gallery18.jpg'
import gallery7 from '../../assests/exousiagallery/gallery19.jpg'

const images = [
  // Replace these URLs with your own images
  { src: gallery1, alt: "Image 1" },
  { src: gallery2, alt: "Image 2" },
  { src: gallery3, alt: "Image 3" },
  { src: gallery4, alt: "Image 4" },
  { src: gallery5, alt: "Image 5" },
  { src: gallery6, alt: "Image 6" },
  { src: gallery7, alt: "Image 7" },
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
