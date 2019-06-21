import React, { Component } from "react";
import Logo from "../Logo.png";
import { Link, NavLink } from "react-router-dom";
import Cart from './Cart';

class Navbar extends Component {
  render() {
    return (
      <header>
        <div class="logo-container">
          <img src={Logo} alt="Logo" width="50" height="50" />
          <h4 class="logo">Library</h4>
        </div>
        <nav>
          <div class="hamburger">
            <div class="line" />
            <div class="line" />
            <div class="line" />
          </div>
          <ul class="nav-links">
            <li class="link">
              <NavLink to="/" exact id="home">
                Home{" "}
              </NavLink>
            </li>
            <li class="link">
              <NavLink to="/Books" id="Book">
                Books
              </NavLink>
            </li>
            <li class="link">
              <NavLink to="/Handouts" id="Hand">
                Handouts
              </NavLink>
            </li>
            <li class="link">
              <NavLink to="/Magazines" id="Mag">
                Magazines
              </NavLink>
            </li>
          </ul>
        </nav>
        <div class="search-container">
          <input type="search" placeholder="Search here" />
          <button class="search-btn">
            <img
              src="img/search_white.png"
              alt="Search"
              width="20"
              height="20"
            />
          </button>
        </div>
        <div class="cart">
          <button class="btn-cart" data-toggle="modal" data-target="#myModal2">
            <Link to="#" class="badge1" data-badge="2">
              <img src="img/cart_2.png" alt="Cart" width="35" height="35" />
            </Link>
          </button>
        </div>
        <Cart />
      </header>
    );
  }
}

export default Navbar;
