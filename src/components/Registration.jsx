import React, { useState } from "react";
import { ProductConsumer } from "../context";

const Admin = () => {
  const [full_name, setFull_Name] = useState("");
  const [balance, setBalance] = useState("");
  const [currency, setCurrency] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernames,setUsernames] = useState([]);
  const updateFull_Name = e => {
    if (!ValidateName(e.target.value)) {
      document.getElementById("ErrorName").innerHTML =
        "Please Enter Your Correct name";
      document.getElementById("full_name").style.borderColor = "red";
    } else {
      document.getElementById("ErrorName").innerHTML = "";
      document.getElementById("full_name").style.borderColor = "lightgreen";
      setFull_Name(e.target.value);
    }
  };
  const updateBalance = e => {
    if (!ValidateNumber(e.target.value) || e.target.value.length < 2) {
      document.getElementById("ErrorBalance").innerHTML =
        "Please Enter Your Correct Balance";
      document.getElementById("balance").style.borderColor = "red";
    } else {
      document.getElementById("ErrorBalance").innerHTML = "";
      document.getElementById("balance").style.borderColor = "lightgreen";
      setBalance(e.target.value);
    }
  };
  const updateCurrency = e => {
    setCurrency(e.target.value);
  };
  const updateUsername = e => {
    
    if (ValidatUsername(e.target.value)) {
      document.getElementById("ErrorUsername").innerHTML =
        "This username is taken please choose another one";
      document.getElementById("username").style.borderColor = "red";
    } else {
      document.getElementById("ErrorUsername").innerHTML = "";
      document.getElementById("username").style.borderColor = "lightgreen";
      setUsername(e.target.value);
    }
  };
  const updatePassword = e => {
    setPassword(e.target.value);
  };
  const ValidateName = name => {
    return name.match("^[A-Za-z -']+$") ? true : false;
  };
  const ValidatUsername = usernamex => {
    let flag = false;
    usernames.forEach(item=>{
      if (item.username==usernamex) {
        flag = true;
      }
    })
    return flag;
  };
  const ValidateNumber = phonenumber => {
    return phonenumber.match("^[0-9]+$") ? true : false;
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
                setUsernames(value.Account);
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
                        id="full_name"
                        className="form-control mb-2"
                        onChange={updateFull_Name}
                        placeholder="Full Name"
                        required
                      />
                      <span
                        className="form-error "
                        style={{ color: "red", fontSize: "10px" }}
                        id="ErrorName"
                      />
                      <input
                        type="text"
                        name="balance"
                        id="balance"
                        className="form-control mb-2 pr-5"
                        onChange={updateBalance}
                        placeholder="Balance"
                        required
                      />
                      <span
                        className="form-error "
                        style={{ color: "red", fontSize: "10px" }}
                        id="ErrorBalance"
                      />
                      <input
                        type="text"
                        name="currency"
                        id="currency"
                        className="form-control mb-2"
                        onChange={updateCurrency}
                        placeholder="Currency"
                        required
                      />
                      <span
                        className="form-error "
                        style={{ color: "red", fontSize: "10px" }}
                        id="ErrorCurrency"
                      />
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control mb-2"
                        onChange={updateUsername}
                        placeholder="Username"
                        required
                      />
                      <span
                        className="form-error "
                        style={{ color: "red", fontSize: "10px" }}
                        id="ErrorUsername"
                      />
                      <input
                        type="password"
                        name="password"
                        className="form-control mb-2"
                        onChange={updatePassword}
                        placeholder="Password"
                        required
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
