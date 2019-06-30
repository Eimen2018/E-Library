import React, { Component } from "react";
import AdminUpload from "./AdminUpload";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import AdminAccount from "./AdminAccount";

class Admin extends Component {
  state = {
    addcontent: "add"
  };
  Addcontentoggle = (add) => {
    this.setState(() => {
      return {
        addcontent: add
      };
    });
  };
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="coming-soon">
              <div className="admin-all-btn">
                <button
                  className="btn btn-lg btn-admin mb-2"
                  onClick={()=>this.Addcontentoggle("something")}
                >
                  Accounts
                </button>
                <button
                  className="btn btn-lg btn-admin mb-2"
                  onClick={()=>this.Addcontentoggle("add")}
                >
                  Add Content
                </button>
                <Link to="/Auth">
                  <button
                    className="btn btn-lg btn-outline-danger"
                    onClick={() => value.logout()}
                  >
                    Log Out
                  </button>
                </Link>
              </div>
              <div className="magazine-text">
                {this.state.addcontent==="add" ?  <AdminUpload />:<AdminAccount />}
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Admin;
