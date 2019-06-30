import React, { Component } from "react";
import { ProductConsumer } from "../context";

class AdminAccount extends Component {
  state = {};
  render() {
    return (
      <div className="coming-soon mt-3 ml-5 ">
        <div className="magazine-text mt-5  pl-5 ml-1 d-flex account-container">
          <ProductConsumer>
            {value => {
              return value.Account.map(account => {
                return(<div key={account.id} className="card mr-2 admin-card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title admin-card-title">{account.full_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {account.role}
                    </h6>
                    <button className="btn btn-outline-danger float-right" onClick={()=>{value.removeAccount(account.username)}}>Remove</button>
                  </div>
                </div>);
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default AdminAccount;
