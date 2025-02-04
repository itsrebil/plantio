import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;