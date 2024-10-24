import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/Api/ApiSlider";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";

function Detail() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.value);
  const { id } = useParams(); 

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);

  const productDetail = products.find((product) => product.id === parseInt(id));
  return (
    <>
      <Header />
      <div>
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : productDetail ? (
          <div>
            <h2>{productDetail.title}</h2>
            <p>{productDetail.description}</p>
            <p>Price: ${productDetail.price}</p>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Detail;