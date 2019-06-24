import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

const Auth = () => {
  const [username, SetUserName] = useState("");
  const [password, SetPassword] = useState("");
  const updateName = e => {
    SetUserName(e.target.value);
  };
  const updatePassword = e => {
    SetPassword(e.target.value);
  };
  const Login = e => {
    e.preventDefault();
  };
  return (
    <main>
      <section className="presentation">
        <div className="coming-soon">
          <div className="coming-soon-img">
            <img src="img/sign-in.png" alt="" />
          </div>
          <div className="magazine-text">
            <h1>Sign In</h1>
            <form onSubmit={Login}>
              <input
                type="text"
                name="username"
                className="form-control"
                value={username}
                placeholder="User Name"
                onChange={updateName}
              />
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                placeholder="Password"
                onChange={updatePassword}
              />
              <ProductConsumer>
                {value => {
                  return (
                    <Link
                    onClick={() => 
                      value.auth()
                    }
                      to={{
                        pathname:
                          value.Account.username === username &&
                          value.Account.password === password
                            ? "/payment"
                            : "/Auth"
                      }}
                    >
                      <button
                        className="btn btn-outline-primary btn-md ml-auto login-btn"
                      >
                        Login
                      </button>
                    </Link>
                  );
                }}
              </ProductConsumer>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Auth;
