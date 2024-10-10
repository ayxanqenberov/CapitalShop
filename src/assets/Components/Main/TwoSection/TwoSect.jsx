import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // Removed Pagination import
import "./twoSect.css";

const TwoSect = () => {
  const swiperRef = useRef(null);

  return (
    <section id="twoSect">
      <div className="upPartTrend">
        <h2>Trending This Week</h2>
        <div className="otherPagesTwoSect">
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Baby</a>
          <a href="">Fashion</a>
        </div>
      </div>
      <div className="downPartTrends">
        <Swiper
          // onSwiper={(swiper) => (swiperRef.current = swiper)} // Uncomment if you need the swiper reference
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={10}
          loop={true}
          navigation={true} // Keep navigation enabled
          modules={[Navigation]} // Removed Pagination module
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="product">
              <div className="imgs">
                <img
                  className="img"
                  src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg"
                  alt="Latest Fashion Item 1"
                />
              </div>
              <a>Cashmere Tank + Bag</a>
              <div className="price">
                <span>$98.00</span>
                <span>$120.00</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <div className="imgs">
                <img
                  className="img"
                  src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg"
                  alt="Latest Fashion Item 2"
                />
              </div>
              <a>Cashmere Tank + Bag</a>
              <div className="price">
                <span>$98.00</span>
                <span>$120.00</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <div className="imgs">
                <img
                  className="img"
                  src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg"
                  alt="Latest Fashion Item 3"
                />
              </div>
              <a>Cashmere Tank + Bag</a>
              <div className="price">
                <span>$98.00</span>
                <span>$120.00</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <div className="imgs">
                <img
                  className="img"
                  src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg"
                  alt="Latest Fashion Item 4"
                />
              </div>
              <a>Cashmere Tank + Bag</a>
              <div className="price">
                <span>$98.00</span>
                <span>$120.00</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TwoSect;

