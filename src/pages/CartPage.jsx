import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../features/cartSlice";
import Header from "../components/Header";
import "../styles/CartPage.css";
import "../styles/ProductPage.css";
import { Link } from 'react-router-dom';


function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />

      <div>
        <div className="headingCart">Shopping Cart</div>

        <div className="cardContainer">
          {cart.map((item) => (
            <div className="plantCard" key={item.id}>
              <img className="plantImg" src={item.image} alt={item.name} />
              <div className="plantContent">
                <span className="plantContentHeading">{item.name}</span>
                <span className="plantContentPrice">${item.price}</span>
                <div>
                  <button
                  style={{cursor: 'pointer'}}
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <span style={{ paddingLeft: '5px', paddingRight: '5px'}}>{item.quantity}</span>
                  <button
                  style={{cursor: 'pointer'}}
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                  </div>
                  <button
                  style={{cursor: 'pointer'}} onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                
              </div>
            </div>
          ))}
        </div>

          <div className="checkoutBar">
          <h2>Total: ${total.toFixed(2)}</h2>
          <div className="checkoutBarBtns">
            <Link to="/products">
          <button style={{backgroundColor: '#fff', color: '#000'}} className="button-5">Continue Shopping</button></Link>
          <button className="button-5" onClick={()=>{alert('Checkout feature comming soon. Please stay tuned.')}}>Checkout</button>
          </div>
        
          </div>
        
      </div>
    </>
  );
}

export default CartPage;
