import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cartSlice';
import plants from '../data/plants';
import Header from '../components/Header';
import '../styles/ProductPage.css'

function ProductPage() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Check if a plant is in the cart
  const isPlantInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  // Filter plants by category
  const indoorPlants = plants.filter((plant) => plant.category === 'Indoor');
  const outdoorPlants = plants.filter((plant) => plant.category === 'Outdoor');
  const succulentPlants = plants.filter((plant) => plant.category === 'Succulent');

  return (
    <>
    <Header />
    
      <div className='headingProd'>Indoor Plants</div>

      <div className='cardContainer'>
      {indoorPlants.map((plant) => (
        <div className='plantCard' key={plant.id}>
          <img className='plantImg' src={plant.image} alt={plant.name} />
          <div className='plantContent'>
            <span className='plantContentHeading'>{plant.name}</span>
            <span className='plantContentPrice' >${plant.price}</span>
            <button className='addToCartBtn' onClick={() => dispatch(addToCart(plant))} disabled={isPlantInCart(plant.id)}>{isPlantInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}</button>
          </div>
          
        </div>
      ))}

      </div>
      <div className='headingProd'>Outdoor Plants</div>

      <div className='cardContainer'>
      {outdoorPlants.map((plant) => (
        <div className='plantCard' key={plant.id}>
          <img className='plantImg' src={plant.image} alt={plant.name} />
          <div className='plantContent'>
            <span className='plantContentHeading'>{plant.name}</span>
            <span className='plantContentPrice' >${plant.price}</span>
            <button className='addToCartBtn' onClick={() => dispatch(addToCart(plant))} disabled={isPlantInCart(plant.id)}>{isPlantInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}</button>
          </div>
          
        </div>
      ))}

      </div>

      <div className='headingProd'>Succulent Plants</div>

      <div className='cardContainer'>
      {succulentPlants.map((plant) => (
        <div className='plantCard' key={plant.id}>
          <img className='plantImg' src={plant.image} alt={plant.name} />
          <div className='plantContent'>
            <span className='plantContentHeading'>{plant.name}</span>
            <span className='plantContentPrice' >${plant.price}</span>
            <button className='addToCartBtn' onClick={() => dispatch(addToCart(plant))} disabled={isPlantInCart(plant.id)}>{isPlantInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}</button>
          </div>
          
        </div>
      ))}

      </div>

      
    

     
    
    </>
  );
}

export default ProductPage;