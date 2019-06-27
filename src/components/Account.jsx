import React, { Component } from "react";
import {ProductConsumer} from '../context';
import Payment from './Payment';
import AccountDetail from './AccountDetail';

class Account extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="presentation">
          <ProductConsumer>
              {value=>{
                  return(value.cart.length>0?<Payment/>:<AccountDetail />);
              }}
          </ProductConsumer>
        </section>
      </main>
    );
  }
}

export default Account;
