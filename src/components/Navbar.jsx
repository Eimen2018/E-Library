import React, { Component } from "react";
import Logo from "../Logo.png";
import { Link, NavLink } from "react-router-dom";
import Cart from "./Cart/Cart";
import { ProductConsumer } from "../context";

class Navbar extends Component {
  state = {
    Search:"Search Query"
  };
  nav = () => {
    const navlinks = document.querySelector(".nav-links");
    // const link = document.querySelectorAll("link");
    navlinks.classList.toggle("open");
  };
  handleChange=()=>{
    let search = document.getElementById("search-input").value;
    this.setState(()=>{
      return{
        Search:search
      }
    })
  }
  handleClick=()=>{ 
    this.setState(()=>{
      return{
        Search:this.state.Search
      }
    })
  }
  render() {
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
          <input type="search" placeholder="Search here" id="search-input" onChange={()=>this.handleChange()}/>
          <Link to={{pathname:`/Search`,
                state:{search:this.state.Search}}}><button className="search-btn" onClick={()=>this.handleClick()}>
            <img
              src="img/search_white.png"
              alt="Search"
              width="20"
              height="20"
            />
          </button></Link>
        </div>
        <ProductConsumer>
          {value => (
            <div className="cart">
              <button
                className="btn-cart ml-3"
                data-toggle="modal"
                data-target="#myModal2"
              >
                <Link to="#" className="badge1" data-badge={value.cart.length}>
                  <img src="img/cart_2.png" alt="Cart" width="35" height="35" />
                </Link>
              </button>
              <Link to={value.loggedin?"/Account":"/Auth"}><button className="btn ml-3"onClick={(e)=>value.auth(value.loggedin?"Login":"logout")}>
              {value.loggedin?"Account":"Login"}
              </button>
              </Link>
            </div>
          )}
        </ProductConsumer>
        <Cart />
      </header>
    );
  }
}

export default Navbar;
