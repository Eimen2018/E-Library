import React, { Component } from "react";
import Card from "./Card";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Cart extends Component {
  state = {};

  render() {
    return (
      <div
        className="modal right fade"
        id="myModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <ProductConsumer>
              {value => {
                const {
                  cart,
                  cartSubtotal,
                  cartTax,
                  cartTotal,
                  clearCart,
                  loggedin
                } = value;
                if (cart.length > 0) {
                  return (
                    <React.Fragment>
                      <div className="modal-header">
                        <div className="modal-cart row">
                          <img
                            src="img/BigCart_3.png"
                            alt="Cart"
                            width="60"
                            height="60"
                          />
                          <h4 className="modal-title" id="myModalLabel2">
                            Cart items
                          </h4>
                          <Link to={loggedin?"/payment":"/Auth"}>
                            <button
                              className="btn-cart-checkout"
                              data-toggle="modal"
                              data-target="#myModal2"
                            >
                              <img
                                src="img/giftbag.png"
                                alt="Check Out"
                                width="20"
                                height="20"
                              />
                              {loggedin?"Check out":"Login"}
                            </button>
                          </Link>
                          <Link to="/Books">
                            <button
                              className="btn-cart-clear"
                              onClick={() => clearCart()}
                              data-toggle="modal"
                              data-target="#myModal2"
                            >
                              Clear Cart
                            </button>
                          </Link>
                        </div>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="card-container">
                          {value.cart.map(item => {
                            return (
                              <Card value={value} item={item} key={item.id} />
                            );
                          })}
                        </div>
                      </div>
                      <div className="modal-footer text-capitalize text-center">
                        <h5 className="ml-3 ">
                          <span className="text-muted">Subtotal</span>{" "}
                          <span className="footer-price">${cartSubtotal}</span>
                        </h5>
                        <h5 className="ml-5 ">
                          <span className="text-muted">Tax</span>{" "}
                          <span className="footer-price">${cartTax}</span>
                        </h5>
                        <h5 className="ml-5 ">
                          <span className="text-muted">Total</span>{" "}
                          <span className="footer-price">${cartTotal}</span>
                        </h5>
                      </div>
                    </React.Fragment>
                  );
                } else {
                  return <EmptyCart />;
                }
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
