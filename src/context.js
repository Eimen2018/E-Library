import React, { Component } from "react";
import { detailProduct } from "./data";
import axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    Account: [],
    loggedinAccount: [],
    cart: [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
    loggedin: false
  };

  componentDidMount() {
    // this.setProducts();
    this.fetchData();
  }

  fetchData = () => {
    axios
      .all([
        axios.get("http://localhost:80/E-commerce-Back-End/index.php?s=1"),
        axios.get("http://localhost:80/E-commerce-Back-End/account.php")
      ])
      .then(
        axios.spread((dataRes, accountRes) => {
          this.setState({
            products: dataRes.data,
            Account: accountRes.data
          });
        })
      );
  };

  sendData = (formData, where) => {
    const url =
      where === 1
        ? "http://localhost:80/E-commerce-Back-End/index.php"
        : "http://localhost:80/E-commerce-Back-End/account.php";
    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/ form-data" } }
    })
      .then(response => {
        window.location.href = where == 1 ? "/" + response.data + "s" : "/Auth";
      })
      .catch(e => {
        // this.errors.push(e);
      });
  };

  sendSession = username => {
    axios
            .get(
              "http://localhost:80/E-commerce-Back-End/account.php?session=2"
            )
            .then(response => response.data)
            .then(data => {
              console.log(data);
            });
  };

  auth = (username, password) => {
    let tempAccount = [...this.state.Account];
    if (this.getAccount(username) == -1) {
    } else {
      const account = tempAccount[this.getAccount(username)];
      if (account.password === password) {
        this.setState(() => {
          return { loggedin: true, loggedinAccount: account };
        });
      } else {
        return <p>User name or password incorrect</p>;
      }
    }
  };

  checkSession = () => {
    axios
            .get(
              "http://localhost:80/E-commerce-Back-End/account.php?check=2"
            )
            .then(response => response.data)
            .then(data => {
              console.log(data);
            });
  }
  logout = () => {
    this.setState(() => {
      return { loggedin: false };
    });
  };

  getItem = id => {
    return this.state.products.find(item => item.id === id);
  };

  getAccount = username => {
    return this.state.Account.findIndex(item => item.username === username);
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = parseInt(product.price);
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  Checkout = amount => {
    let tempAccout = this.state.loggedinAccount;
    tempAccout.balance -= amount;
    this.setState(
      () => {
        return {
          loggedinAccount: tempAccout
        };
      },
      () => {
        this.clearCart();
      }
    );
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  removeAccount = name => {
    let r = window.confirm(
      "Are you Sure, You want to delete " + name + "'s Account"
    );
    if (r == true) {
      let tempAccounts = [...this.state.Account];
      let removeacc = tempAccounts[this.getAccount(name)];
      tempAccounts = tempAccounts.filter(item => item.username !== name);
      this.setState(
        () => {
          return {
            Account: [...tempAccounts]
          };
        },
        () => {
          axios
            .get(
              "http://localhost:80/E-commerce-Back-End/account.php?id=" +
                removeacc.id
            )
            .then(response => response.data)
            .then(data => {
              console.log(data);
            });
        }
      );
    } else {
      console.log("You pressed Cancel!");
    }
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: []
        };
      },
      () => {
        this.fetchData();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          checkout: this.Checkout,
          auth: this.auth,
          sendData: this.sendData,
          logout: this.logout,
          removeAccount: this.removeAccount,
          checkSession:this.checkSession
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
