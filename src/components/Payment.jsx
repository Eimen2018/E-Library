import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Payment extends Component {
  state = {
    cart:[]
  };
  handleCount = () => {
    let c = 0;
    this.state.cart.forEach(item => {
      c += item.count;
    });
    return c;
  };
  render() {
    return (
      <div className="coming-soon mt-4">
        <div className="coming-soon-img">
          <img src="img/payment.png" alt="" />
        </div>
        <div className="magazine-text">
          <h3 className="text-center my-4 payment-info text-capitalize">
            Payment Info
          </h3>
          <ProductConsumer>
            {value => {
              const { full_name, Currency, balance } = value.loggedinAccount;
              const {
                cart,
                cartSubtotal,
                cartTax,
                cartTotal,
                checkout
              } = value;
              this.state.cart = [...cart];
              return (
                <React.Fragment>
                  <h4 className="my-2 account-name">Mr. {full_name}</h4>
                  <h6 className="my-2 font-weight-bold">
                    <span className="pay-info font-weight-lighter">
                      Balance
                    </span>
                    ${balance}
                  </h6>
                  <p className="my-2  font-weight-bold">
                    <span className="pay-info font-weight-lighter">
                      Payment Currency
                    </span>
                    {Currency}
                  </p>
                  <h6 className="my-2 font-weight-bold">
                    <span className="pay-info font-weight-lighter">
                      Item Count
                    </span>
                    {this.handleCount()}
                  </h6>
                  <h6 className="my-2 font-weight-bold">
                    <span className="pay-info font-weight-lighter">
                      Subtotal
                    </span>
                    ${cartSubtotal}
                  </h6>
                  <h6 className="my-2 font-weight-bold">
                    <span className="pay-info font-weight-lighter">Tax</span>$
                    {cartTax}
                  </h6>
                  <h6 className="my-2 font-weight-bold">
                    <span className="pay-info font-weight-lighter">Total</span>$
                    {cartTotal}
                  </h6>
                  <Link to="/Process">
                    <button
                      className="btn  btn-outline-primary login-btn float-right mx-2"
                      onClick={() => checkout(cartTotal)}
                    >
                      Pay
                    </button>
                  </Link>
                  <Link to="/Auth">
                    <button
                      className="btn  btn-danger float-left my-5"
                      onClick={() => value.logout()}
                    >
                      Log Out
                    </button>
                  </Link>
                </React.Fragment>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default Payment;
