import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Payment extends Component {
  state = {};
  handleCount = () => {
    let c = 0;
    this.state.cart.forEach(item => {
      c += item.count;
    });
    return c;
  };
  render() {
    return (
      <main>
        <section className="presentation">
          <div className="coming-soon">
            <div className="coming-soon-img">
              <img src="img/payment.png" alt="" />
            </div>
            <div className="magazine-text">
              <h3 className="text-center my-4 payment-info text-capitalize">
                Payment Info
              </h3>
              <ProductConsumer>
                {value => {
                  const { Name, shipment, balance } = value.Account;
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
                      <h4 className="my-2 account-name">Mr. {Name}</h4>
                      <h6 className="my-2 font-weight-bold">
                        <span className="pay-info font-weight-lighter">
                          Balance
                        </span>
                        ${balance}
                      </h6>
                      <p className="my-2  font-weight-bold">
                        <span className="pay-info font-weight-lighter">
                          Shiping Info
                        </span>
                        {shipment}
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
                        <span className="pay-info font-weight-lighter">
                          Tax
                        </span>
                        ${cartTax}
                      </h6>
                      <h6 className="my-2 font-weight-bold">
                        <span className="pay-info font-weight-lighter">
                          Total
                        </span>
                        ${cartTotal}
                      </h6>
                      <Link to="/Books">
                        <button
                          className="btn  btn-outline-primary login-btn float-right"
                          onClick={() => checkout(cartTotal)}
                        >
                          Pay
                        </button>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </ProductConsumer>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Payment;
