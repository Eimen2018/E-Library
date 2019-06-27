import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class AccountDetail extends Component {
  state = {
    
  };
  render() {
    return (
      <div className="coming-soon">
        <div className="coming-soon-img">
          <img src="img/payment.png" alt="" />
        </div>
        <div className="magazine-text">
          <h3 className="text-center my-4 payment-info text-capitalize">
            Account Info
          </h3>
          <ProductConsumer>
            {value => {
              console.log(value.loggedinAccount);
              const { full_name, Currency, balance } = value.loggedinAccount;
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

                  <Link to="/Auth">
                    <button
                      className="btn  btn-danger float-right"
                      onClick={() => value.logout()}
                    >
                      Log Out
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="btn  btn-outline-primary login-btn float-left my-2">
                      Home
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

export default AccountDetail;
