import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/img5.avif';
import Img2 from '../assets/img6.png';
import Img3 from '../assets/img7.jpg';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className='slides'>
        <Carousel >
          
          <Carousel.Item>
            <img
              className="d-block w-100 img-slider"
              src={Img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-slider"
              src={Img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Click</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-slider"
              src={Img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
