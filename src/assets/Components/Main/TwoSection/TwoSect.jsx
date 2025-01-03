import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./twoSect.css";
import { getProducts } from "../../../features/Api/ApiSlider";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { CiZoomIn } from "react-icons/ci";
import {addFav} from '../../../features/Favorites/FavoriteSlice'
import { useNavigate } from "react-router-dom";
import { addBasket } from "../../../features/Basket/BasketSlice";

const TwoSect = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.value);
  const status = useSelector((state) => state.data.status);
  const navigate = useNavigate()

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading products</div>;
  }

  const fav = (product) => {
    dispatch(addFav(product));
    console.log(product);
  };
  
  const getBasket = (product) => {
    dispatch(addBasket(product))
    console.log(product);
    
  }
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
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={10}
          loop={products.length > 3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product">
                <div className="imgs">
                  <img
                    className="img"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="featurePart">
                    <div>
                      <SlBasket onClick={() => getBasket(product)}/>
                    </div>
                    <div>
                      <FaRegHeart onClick={() => fav(product)} />
                    </div>
                    <div>
                      <CiZoomIn />
                    </div>
                  </div>
                </div>
                <a>{product.title}</a>
                <div className="price">
                  <span>{`$${product.price - 7}`}</span>
                  <span>${product.price}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TwoSect;
