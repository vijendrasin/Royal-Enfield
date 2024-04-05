import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/Cartslice'; // Import the addItem action from your cartSlice

import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items); // Get cart items from Redux store

  // Example product data
  const sampleProduct = {
    id: 1,
    name: 'Sample Product',
    price: 10,
    // Add other necessary fields
  };

  const updateCart = () => {
    dispatch(addItem(sampleProduct)); // Dispatch addItem action with actual product data
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <div className="navbar-logo">
            <a href="/">
              <img className="navbar-logo-img" src='https://fbi.cults3d.com/uploaders/16694038/illustration-file/ea3603c4-2822-4083-8e1b-fb15d8940352/60e156139802c05830c85389f2ee3584.png' alt="Logo" />
            </a>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="/about" className="navbar-link">About</a>
            </li>
            <li className="navbar-item">
              <a href="/services" className="navbar-link">Services</a>
            </li>
            <li className="navbar-item">
              <a href="/contact" className="navbar-link">Contact</a>
            </li>
            <li className="navbar-item">
              <a href="/productcard" className="navbar-link">Bike</a>
            </li>
            <li className="navbar-item">
              <a href="/signup" className="navbar-link">Signup</a>
            </li>
          </ul>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/login" className="navbar-link">Login</a>
          </li>
        </ul>
      </div>
      <form className="navbar-search" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
        <div className="navbar-cart" onClick={updateCart}>
          <img className="navbar-cart-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MMEZL8zXC3lgImdpaKJhFPMGq-6Fjm5SnCEGtSTVo4UE4G1l--yDGcuSQ0pswMiCP4E&usqp=CAU" alt="Cart" />
          <span className="navbar-cart-count">{cartItems.length}</span>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
