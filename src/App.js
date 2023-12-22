

import './App.css';
import SearchHeader from './SearchHeader';
import React, { useState } from 'react';
import searchImages from './APİ';
import ImagesList from './components/imagelist';




function App() {
  
  const [images,setImages] = useState([])

  const handleSubmit = async (term) => {
    console.log(term);
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImagesList  imagesPlaceholder={images} />
    </div>
  );
}

export default App;

