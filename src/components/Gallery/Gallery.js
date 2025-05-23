import React from "react";
import "./Gallery.css";

const Gallery = ({ images, title }) => {
  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h2 className="gallery-title">{title}</h2>
        <hr className="line"></hr>
        <div className="gallery-images">
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} loading="lazy"/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
