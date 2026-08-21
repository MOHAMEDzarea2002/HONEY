// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { useSelector } from 'react-redux';
import CardProduct from '../products/CardProduct';

export default function ProductSwiper() {
  const { product } = useSelector((state) => state.product);


  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        576: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {product?.map((product, index) => (
        <SwiperSlide key={index} className="mb-9">
          <CardProduct product={product} />
        </SwiperSlide>
      )).splice(0,5)}
    </Swiper>
  );
}
