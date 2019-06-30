import React, { Component } from "react";
import Logo from "../Logo.png";
import { Link, NavLink } from "react-router-dom";
import Cart from "./Cart/Cart";
import { ProductConsumer } from "../context";

class Navbar extends Component {
  state = {
    Search: ""
  };
  nav = () => {
    const navlinks = document.querySelector(".nav-links");
    navlinks.classList.toggle("open");
  };
  handleChange = e => {
    e.persist();
    if (e.target.value.length > 2) {
      document.getElementById("searchresult").style.visibility = "visible";
    }
    if (e.target.value.length < 3) {
      document.getElementById("searchresult").style.visibility = "hidden";
    }
    this.setState(() => {
      return {
        Search: e.target.value
      };
    });
  };

  render() {
    return (
      <ProductConsumer>
        {value => {
          let filtered = [...value.products].filter(item => {
            item.title = item.title.toLowerCase();
            return item.title.indexOf(this.state.Search) !== -1;
          });
          return (
            <header>
              <div className="logo-container">
                <img src={Logo} alt="Logo" width="50" height="50" />
                <h4 className="logo">Library</h4>
              </div>
              <nav>
                <div className="hamburger" onClick={this.nav}>
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                </div>
                <ul className="nav-links">
                  <li className="link">
                    <NavLink to="/" exact id="home">
                      Home
                    </NavLink>
                  </li>
                  <li className="link">
                    <NavLink to="/Books" id="Book">
                      Books
                    </NavLink>
                  </li>
                  <li className="link">
                    <NavLink to="/Handouts" id="Hand">
                      Handouts
                    </NavLink>
                  </li>
                  <li className="link">
                    <NavLink to="/Magazines" id="Mag">
                      Magazines
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="search-container ml-3">
                <div className="searchresult" id="searchresult">
                  {filtered.map(product => {
                    return (
                      <div
                        key={product.id}
                        className="card card-sm search-card"
                        onClick={() => value.handleDetail(product.id)}
                      >
                        <div className="card-body d-flex justify-content-around">
                          <div className="cart-img-container w-25">
                            <Link to="/Details">
                              <img
                                className="card-img-left w-100"
                                src={product.img}
                                alt="Content"
                              />
                            </Link>
                          </div>
                          <div className="cart-info-container">
                            <h5 className="card-title search-card-title">
                              {product.title}
                            </h5>
                            <h6 className="card-subtitle text-muted">
                              {product.type}
                            </h6>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <input
                  type="search"
                  placeholder="Search here"
                  id="search-input"
                  onChange={e => this.handleChange(e)}
                />
                <button className="search-btn" disabled>
                  <img
                    src="img/search_white.png"
                    alt="Search"
                    width="20"
                    height="20"
                  />
                </button>
              </div>

              <div className="cart">
                <button
                  className="btn-cart ml-3"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <Link
                    to="#"
                    className="badge1"
                    data-badge={value.cart.length}
                  >
                    <img
                      src="img/cart_2.png"
                      alt="Cart"
                      width="35"
                      height="35"
                    />
                  </Link>
                </button>
                <Link to={value.loggedin ? "/Account" : "/Auth"}>
                  <button
                    className="btn ml-3 btn-login"
                    onClick={e =>
                      value.auth(value.loggedin ? "Login" : "logout")
                    }
                  >
                    {value.loggedin ? "Account" : "Login"}
                  </button>
                </Link>
              </div>
              <Cart />
            </header>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Navbar;
