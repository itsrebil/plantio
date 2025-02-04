import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import plants from '../data/plants';

function ProductPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Products List</h1>
      {plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;