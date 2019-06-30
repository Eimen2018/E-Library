import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Payment from "./Payment";
import AccountDetail from "./AccountDetail";
import AdminUpload from "./AdminUpload";
import Admin from "./Admin";

class Account extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="presentation">
          <ProductConsumer>
            {value => {
              return value.loggedinAccount.role === "admin" ? (
                <Admin />
              ) : value.cart.length > 0 ? (
                <Payment history={this.props.history} />
              ) : (
                <AccountDetail />
              );
            }}
          </ProductConsumer>
        </section>
      </main>
    );
  }
}

export default Account;
