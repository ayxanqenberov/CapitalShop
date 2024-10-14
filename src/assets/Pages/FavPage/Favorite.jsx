import React from 'react';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const favorites = useSelector((state) => state.favorite.favorites);

  return (
    <section>
      <h2>Your Favorites</h2>
      <div>
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <div key={product.id} className="favorite-item">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{`$${product.price}`}</p>
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
