import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const SeenProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://e4143e15dd045d9e.mokky.dev/YangiMahsulotlar0');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={'mb-[100px]'}>
      <div >
        <h1>Siz ko‘rgan mahsulotlar</h1>
        <button>Barchasi</button>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <img src={item.img} alt="" />
                <button>{item.oy1}</button>
                <p>{item.price}</p>
                <p>{item.material}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SeenProduct;
