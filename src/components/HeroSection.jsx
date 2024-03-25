import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function HeroSection() {
  return (
    <section className="mt-3 relative overflow-hidden text-white">
      <div className="container max-w-screen-xl mx-auto">
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide>
            <img
              className="rounded-md h-60 md:h-auto"
              src="/images/banner/banner1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-md h-60 md:h-auto"
              src="/images/banner/banner2.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-md h-60 md:h-auto"
              src="/images/banner/banner3.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HeroSection;
