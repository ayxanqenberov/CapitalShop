import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './favPage.css';
import { BsXLg } from "react-icons/bs";
import { removeFav } from '../../features/Favorites/FavoriteSlice';

const Favorite = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.fav.favs); 

  const getRemove = (product) => {
    dispatch(removeFav(product)); 
  }

  return (
    <section>
      <h2>Your Favorites</h2>
      <div className='favs'>
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <div key={product.id} className='favories'>
              <div className="favorite-item">
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>{`$${product.price}`}</p>
              </div>
              <BsXLg onClick={() => getRemove(product)} />
            </div>
          ))
        ) : (
          <p>No products in favorites.</p>
        )}
      </div>
    </section>
  );
};

export default Favorite;
