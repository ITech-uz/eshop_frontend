
import PhoneBanner from '../../assets/images/PhoneBaner.svg'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className={'w-full bg-black'}>
      <div className={' p-4 flex justify-between items-center gap-3' }>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination,]}
          className="mySwiper"
        >
          <SwiperSlide className={'flex items-center mx-auto w-[1300px] justify-center'}>
            <div>
              <p className={'text-[20px] text-gray-500'}>Tandirdan endi uzilgan iPhone 14 pro max, sizga doimo hamrohlik
                qiladi.</p>
              <h1 className={'text-white text-[50px]'}>iPhone 14 pro max, kerakmi?</h1>
              <div className={'flex gap-4'}>
                <button className={'text-white bg-[#1B99E0] text-[20px] px-[30px] rounded-[10px] py-2'}>Sotib olish</button>
                <button className={'text-[#1B99E0] border-2 border-[#1B99E0] text-[20px] py-2 px-[30px] rounded-[10px]'}>Batafsil</button>
              </div>
            </div>
            <img src={PhoneBanner} alt=""/></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;