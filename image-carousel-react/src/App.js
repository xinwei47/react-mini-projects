import { useState, useEffect } from 'react';
import Slider from './Components/Images/Slider';
import { sliderData } from './SliderData';
import './App.css';

function App() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery(sliderData);
  }, []);

  return (
    <div className='App'>
      <Slider images={gallery} />
    </div>
  );
}

export default App;
