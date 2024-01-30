import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="gallery-item">
      <img src={image.webformatURL} alt="" onClick={onClick} />
    </li>
  );
};

export default ImageGalleryItem;
