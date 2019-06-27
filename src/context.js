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
        axios.get("http://localhost:80/E-commerce-Back-End/account.php?s=1")
      ])
      .then(
        axios.spread((dataRes, accountRes) => {
          this.setState({
            products: dataRes.data,
            Account: accountRes.data
          });
          console.log(dataRes.data);
          console.log(accountRes.data);
        })
      );
    // axios
    //   .get(
    //     "http://localhost:80/E-commerce-Back-End/index.php?s=1"
    //   )
    //   .then(response => {
    //     console.log(response.data)
    //     this.setState({
    //       products: response.data
    //     });
    //   })
    //   .catch(e => {
    //     // this.errors.push(e);
    //   });
  };
  sendData = formData => {
    axios({
      method: "post",
      url: "http://localhost:80/E-commerce-Back-End/index.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/ form-data" } }
    })
      .then(response => {
        console.log(response);
        window.location.href = "/" + response.data + "s";
      })
      .catch(e => {
        // this.errors.push(e);
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
        // this.setState(() => {
        //   return { loggedin: false };
        // });
        return <p>User name or password incorrect</p>;
      }
    }
  };
  logout = () => {
    this.setState(() => {
      return { loggedin: false };
    });
  };
  // setProducts = () => {
  //   let tempProducts = [];
  //   storeProducts.forEach(item => {
  //     const singleItem = { ...item };
  //     tempProducts = [...tempProducts, singleItem];
  //   });
  //   this.setState(() => {
  //     return {
  //       products: tempProducts
  //     };
  //   });
  // };
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
    let tempAccouts = this.state.Account;
    // const index = tempAccouts.indexOf(this.getAccount(id));
    // const account = tempAccouts[index];
    tempAccouts.balance -= amount;
    this.setState(
      () => {
        return {
          Account: tempAccouts
        };
      },
      () => {
        this.clearCart();
        console.log(this.state.Account);
      }
    );
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    //const selectedProduct = tempCart.find(item => item.id === id);
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
    //const selectedProduct = tempCart.find(item => item.id === id);
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
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
