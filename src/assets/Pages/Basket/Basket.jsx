import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBasket } from '../../features/Basket/BasketSlice';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.basket);

  const handleRemove = (product) => {
    dispatch(removeBasket(product)); 
  };

  return (
    <>
    <Header/>
    <section className={basketItems.length > 0 ? 'fle' : 'flex flex-col'} style={{minHeight:'450px',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <h2 className={basketItems.length > 0 ? "hidden" : "flex"}>Your Basket</h2>
      <div className='basket-items flex gap-5'>
        {basketItems.length > 0 ? (
          basketItems.map((product) => (
            <div key={product.id} className='basket-item flex items-center  flex-col gap-2 justify-center bg-white p-4 w-[290px] '>
              <img className='h-full' src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{`$${product.price}`}</p>
              <button className='bg-red-600 p-1.5 rounded-lg text-white hover:bg-red-700 duration-200 cursor-pointer' onClick={() => handleRemove(product)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your basket is empty.</p>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Basket;
