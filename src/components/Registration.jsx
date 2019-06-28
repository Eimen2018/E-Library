import React, { useState } from "react";
import { ProductConsumer } from "../context";

const Admin = () => {
  const [full_name, setFull_Name] = useState("");
  const [balance, setBalance] = useState("");
  const [currency, setCurrency] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateFull_Name = e => {
    setFull_Name(e.target.value);
  };
  const updateBalance = e => {
    setBalance(e.target.value);
  };
  const updateCurrency = e => {
    setCurrency(e.target.value);
  };
  const updateUsername = e => {
    setUsername(e.target.value);
  };
  const updatePassword = e => {
    setPassword(e.target.value);
  };
  return (
    <main>
      <section className="presentation">
        <div className="coming-soon">
          <div className="coming-soon-img">
            <img src="img/addAccount.png" alt="" className="w-75 mx-5 mt-5" />
          </div>
          <div className="magazine-text">
            <ProductConsumer>
              {value => {
                return (
                  <div className="upload-form-container d-flex mt-5">
                    <form
                      onSubmit={e => {
                        let formData = new FormData();
                        formData.append("full_name", full_name);
                        formData.append("balance", balance);
                        formData.append("currency", currency);
                        formData.append("username", username);
                        formData.append("password", password);
                        e.preventDefault();
                        value.sendData(formData, 2);
                      }}
                      encType="multipart/form-data"
                    >
                      <input
                        type="text"
                        name="full_name"
                        className="form-control mb-2"
                        onChange={updateFull_Name}
                        placeholder="Full Name"
                      />
                      <input
                        type="text"
                        name="balance"
                        className="form-control mb-2 pr-5"
                        onChange={updateBalance}
                        placeholder="Balance"
                      />

                      <input
                        type="text"
                        name="currency"
                        className="form-control mb-2"
                        onChange={updateCurrency}
                        placeholder="Currency"
                      />
                      <input
                        type="text"
                        name="username"
                        className="form-control mb-2"
                        onChange={updateUsername}
                        placeholder="Username"
                      />
                      <input
                        type="password"
                        name="password"
                        className="form-control mb-2"
                        onChange={updatePassword}
                        placeholder="Password"
                      />

                      <button
                        type="submit"
                        className="btn btn-outline-primary float-right"
                      >
                        Create
                      </button>
                    </form>
                  </div>
                );
              }}
            </ProductConsumer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
