// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';

// import { Loader } from './Loader/Loader';
// import Modal from './Modal/Modal';

// const App = () => {
//   const [query, setQuery] = useState('');
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [largeImageURL, setLargeImageURL] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     if (!query) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `https://pixabay.com/api/?q=${query}&page=${page}&key=your_key&image_type=photo&orientation=horizontal&per_page=12`
//         );
//         setImages(prevImages => [...prevImages, ...response.data.hits]);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [query, page]);

//   const handleSearchSubmit = newQuery => {
//     setQuery(newQuery);
//     setImages([]);
//     setPage(1);
//   };

//   const handleLoadMore = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const handleImageClick = imageURL => {
//     setLargeImageURL(imageURL);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setLargeImageURL('');
//   };

//   return (
//     <div className="app">
//       <Searchbar onSubmit={handleSearchSubmit} />
//       {images.length > 0 && (
//         <ImageGallery images={images} onImageClick={handleImageClick} />
//       )}
//       {loading && <Loader />}
//       {images.length > 0 && !loading && (
//         <Button onClick={handleLoadMore}>Load more</Button>
//       )}
//       {showModal && (
//         <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import css from 'components/App.module.css';

const App = () => {
  const apiKey = '40631901-ff7c1609fa7e5ab5e54020e9b';
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page, apiKey]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = imageURL => {
    setLargeImageURL(imageURL);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleSearchSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
