import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeFromCart } from '../features/cartSlice';
import Header from '../components/Header';


function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>        <Header />
    
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
      <button>Continue Shopping</button>
      <button>Checkout</button>
    </div>
    </>

  );
}

export default CartPage;