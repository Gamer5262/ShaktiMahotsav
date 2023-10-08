import slide_image_1 from '../assets/img1.avif' ;
import slide_image_2 from '../assets/img2.avif';
import slide_image_3 from '../assets/img3.avif';
import slide_image_4 from '../assets/img4.avif';
import slide_image_5 from '../assets/img5.avif';
import slide_image_6 from '../assets/img6.png';
import slide_image_7 from '../assets/img7.jpg';

import { Carousel } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Navigation, Autoplay} from 'swiper/modules';
import './Gallery.css';

function App() {
  return (
    <div className='gallery'>
      <div className='section-gallery'>
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
          className="mySwiper"
          slidesPerView={3}
        >
          <SwiperSlide><img className="slides-img" src={slide_image_1} alt='slide_image_1'/></SwiperSlide>
          <SwiperSlide><img className="slides-img" src={slide_image_2} alt='slide_image_2'/></SwiperSlide>
          <SwiperSlide><img className="slides-img" src={slide_image_3} alt='slide_image_3'/></SwiperSlide>
          <SwiperSlide><img className="slides-img" src={slide_image_4} alt='slide_image_4'/></SwiperSlide>
          <SwiperSlide><img className="slides-img" src={slide_image_5} alt='slide_image_5'/></SwiperSlide>
          <SwiperSlide><img className="slides-img" src={slide_image_6} alt='slide_image_6'/></SwiperSlide>
          <SwiperSlide><img className="slides-img" src={slide_image_7} alt='slide_image_7' /></SwiperSlide>
      </Swiper>
      </div>
      </div>
  );
}

export default App;