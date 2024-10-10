import './oneSect.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Make sure this is imported
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const OneSect = () => {
  return (
    <section>
      <div className="sale">
        <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer</p>
        <a href="#">Shop Now</a>
      </div>
      <div className="carousel">
        <Swiper
          spaceBetween={30}
          effect="fade"
          navigation={true} 
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="slider-active">
              <div className="single-slider slider-bg1 slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10">
                      <div className="hero-caption text-center">
                        <span>Fashion Sale</span>
                        <h1 data-animation="bounceIn" data-delay="0.2s">Minimal Menz Style</h1>
                        <p data-animation="fadeInUp" data-delay="0.4s">Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                        <button>Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className='imgHome' src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg" alt="Nature 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgHome' src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg" alt="Nature 2" />
            <div className="slider-active2">
              <div className="single-slider slider-bg1 slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10">
                      <div className="hero-caption text-center">
                        <span>Fashion Sale</span>
                        <h1 data-animation="bounceIn" data-delay="0.2s">Minimal Menz Style</h1>
                        <p data-animation="fadeInUp" data-delay="0.4s">Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                        <button>Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OneSect;

