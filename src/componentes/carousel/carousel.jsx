// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export function Carousel() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide> <img src="https://www.housebar.cl/arquivos/banner-invierno-desk.jpg?v=638242606757270000" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://www.housebar.cl/arquivos/Glenfiddich_desktop.jpg?v=638255648550330000" alt="" /></SwiperSlide>
            ...
        </Swiper>
    );
};