import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/hero/slide3.gif';
import Img2 from '../assets/hero/slide2.gif';
import Img3 from '../assets/hero/slide1.gif';
import Img4 from '../assets/hero/slide4.gif';
import Img5 from '../assets/hero/slide5.gif';
import Img1mob from '../assets/hero/1.gif';
import Img2mob from '../assets/hero/2.gif';
import Img3mob from '../assets/hero/3.gif';
import Img4mob from '../assets/hero/4.gif';

import MediaQuery from 'react-responsive';

const Hero = () => {
  return (
    <div>
      <div className='slides'>
         <MediaQuery minDeviceWidth={769}> 
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
            <Carousel.Item interval={1200}>
            <img
              className="d-block w-100 img-slider"
              src={Img4}
              alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1200}>
            <img
              className="d-block w-100 img-slider"
              src={Img5}
              alt="Fifth slide"
              />
            </Carousel.Item>
        </Carousel>
         </MediaQuery>
        <MediaQuery maxDeviceWidth={769}>
          <Carousel fade>
          
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100 img-slider"
              src={Img1mob}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100 img-slider"
              src={Img2mob}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100 img-slider"
              src={Img3mob}
              alt="Third slide"
            />
            </Carousel.Item>
            <Carousel.Item interval={1200}>
            <img
              className="d-block w-100 img-slider"
              src={Img4mob}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
        </MediaQuery> 
      </div>
    </div>
  );
};

export default Hero;
