import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/hero/Image-1.png';
import Img2 from '../assets/hero/15th of October.gif';
import Img3 from '../assets/hero/ind vs pak.gif';

const Hero = () => {
  return (
    <div>
      <div className='slides'>
        <Carousel fade>
          
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100 img-slider"
              src={Img2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100 img-slider"
              src={Img3}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100 img-slider"
              src={Img1}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
