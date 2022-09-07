import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SlideProducts } from "./swiperStyle";
import Button from "../button";

import "swiper/css";
import "swiper/css/pagination";

const SwiperComp = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SlideProducts>
          <div className="info">
            <p>save up to 39.99$</p>
            <h1>product name</h1>
            <p>lightning fast download speed with super fast ssd storage</p>
            <Button text={"shop now"} />
          </div>
          <div className="img">
            <img
              src="https://s.yimg.com/uu/api/res/1.2/S.x3j7BJmzx63TgKa8vSFg--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-05/53e5b640-ccab-11ec-a9ff-f5b8a0749579.cf.jpg"
              alt="razer"
            />
          </div>
        </SlideProducts>
      </SwiperSlide>
      <SwiperSlide>
        <SlideProducts>
          <div className="info">
            <p>save up to 39.99$</p>
            <h1>product name</h1>
            <p>lightning fast download speed with super fast ssd storage</p>
            <button>shop now</button>
          </div>
          <div className="img">
            <img
              src="https://s.yimg.com/uu/api/res/1.2/S.x3j7BJmzx63TgKa8vSFg--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-05/53e5b640-ccab-11ec-a9ff-f5b8a0749579.cf.jpg"
              alt="razer"
            />
          </div>
        </SlideProducts>
      </SwiperSlide>
      <SwiperSlide>
        <SlideProducts>
          <div className="info">
            <p>save up to 39.99$</p>
            <h1>product name</h1>
            <p>lightning fast download speed with super fast ssd storage</p>
            <button>shop now</button>
          </div>
          <div className="img">
            <img
              src="https://s.yimg.com/uu/api/res/1.2/S.x3j7BJmzx63TgKa8vSFg--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-05/53e5b640-ccab-11ec-a9ff-f5b8a0749579.cf.jpg"
              alt="razer"
            />
          </div>
        </SlideProducts>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComp;
