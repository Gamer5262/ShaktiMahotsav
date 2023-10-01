import { useState } from 'react';
import slide_image_1 from '../assets/img1.avif' ;
import slide_image_2 from '../assets/img2.avif';
import slide_image_3 from '../assets/img3.avif';
import slide_image_4 from '../assets/img4.avif';
import slide_image_5 from '../assets/img5.avif';
import slide_image_6 from '../assets/img6.png';
import slide_image_7 from '../assets/img7.jpg';
import './Gallery.css';

function App() {
  const [image, setImage] = useState(slide_image_1);
  return (
    <div className="container">
      {/* implement a scrollable gallery with radio buttons and auto move */}
      <div>
        <img src={image} alt="slide_image_1" />
        <div className='radio-btns'>
          <input
            type="radio"
            name="image"
            value={slide_image_1}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="radio"
            name="image"
            value={slide_image_2}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="radio"
            name="image"
            value={slide_image_3}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="radio"
            name="image"
            value={slide_image_4}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="radio"
            name="image"
            value={slide_image_5}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="radio"
            name="image"
            value={slide_image_6}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="radio"
            name="image"
            value={slide_image_7}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;