// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'


export function Carousel() {

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{delay: 7000}}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}            
        >
            <SwiperSlide> <img src="https://www.housebar.cl/arquivos/banner-invierno-desk.jpg?v=638242606757270000" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://www.housebar.cl/arquivos/Glenfiddich_desktop.jpg?v=638255648550330000" alt="" /></SwiperSlide>
        </Swiper>
    );
};