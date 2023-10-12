import slide_image_1 from '../assets/gallery/img1.jpg';
import slide_image_2 from '../assets/gallery/img2.jpg';
import slide_image_3 from '../assets/gallery/img3.jpg';
import slide_image_4 from '../assets/gallery/img4.jpg';
import slide_image_5 from '../assets/gallery/img5.jpg';
import slide_image_6 from '../assets/gallery/img6.jpg';
import slide_image_7 from '../assets/gallery/img7.jpg';
import slide_image_8 from '../assets/gallery/img8.jpg';
import slide_image_9 from '../assets/gallery/img9.jpg';
import slide_image_10 from '../assets/gallery/img10.jpg';
import slide_image_11 from '../assets/gallery/img11.jpg';
import slide_image_12 from '../assets/gallery/img12.jpg';
import slide_image_13 from '../assets/gallery/img13.jpg';

import './Gallery.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Navigation, Autoplay} from 'swiper/modules';
import MediaQuery from 'react-responsive';

function App() {
  return (
    <div className='gallery' id='gallery'>
      <div className='section-gallery'>
        <h4 style={{fontFamily: "Signika Negative, sans-serif"}}>Gallery</h4>
        <MediaQuery maxWidth={3000} minWidth={1025} >
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={3}
        >
          <SwiperSlide><img className="slider-image"src={slide_image_1} alt='slide_image_1'/></SwiperSlide>
          <SwiperSlide><img className="slider-image"src={slide_image_2} alt='slide_image_2'/></SwiperSlide>
          <SwiperSlide><img className="slider-image"src={slide_image_3} alt='slide_image_3'/></SwiperSlide>
          <SwiperSlide><img className="slider-image"src={slide_image_4} alt='slide_image_4'/></SwiperSlide>
          <SwiperSlide><img className="slider-image"src={slide_image_5} alt='slide_image_5'/></SwiperSlide>
          <SwiperSlide><img className="slider-image"src={slide_image_6} alt='slide_image_6'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_7} alt='slide_image_7' /></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_8} alt='slide_image_8' /></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_9} alt='slide_image_9' /></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_10} alt='slide_image_10' /></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_11} alt='slide_image_11' /></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_12} alt='slide_image_12' /></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_13} alt='slide_image_13' /></SwiperSlide>
          </Swiper>
        </MediaQuery>
        <MediaQuery maxWidth={1024}  minWidth={450} >
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={2}
        >
          <SwiperSlide><img className="slider-image" src={slide_image_1} alt='slide_image_1'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_2} alt='slide_image_2'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_3} alt='slide_image_3'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_4} alt='slide_image_4'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_5} alt='slide_image_5'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_6} alt='slide_image_6'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_7} alt='slide_image_7' /></SwiperSlide>
          </Swiper>
        </MediaQuery>
        <MediaQuery maxWidth={449} minWidth={0} >
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
        >
          <SwiperSlide><img className="slider-image" src={slide_image_1} alt='slide_image_1'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_2} alt='slide_image_2'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_3} alt='slide_image_3'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_4} alt='slide_image_4'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_5} alt='slide_image_5'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_6} alt='slide_image_6'/></SwiperSlide>
          <SwiperSlide><img className="slider-image" src={slide_image_7} alt='slide_image_7' /></SwiperSlide>
          </Swiper>
        </MediaQuery>
      </div>
    </div>
  );
}

export default App;