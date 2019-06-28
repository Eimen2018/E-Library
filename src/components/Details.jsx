import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Details extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="presentation">
          <ProductConsumer>
            {value => {
              const {
                id,
                author,
                img,
                catagory,
                info,
                price,
                title,
                type,
                inCart
              } = value.detailProduct;
              return (
                <div className="container">
                  <div className="row my-5 ">
                    <Link to={type === "Book" ? "/Books" : "/Handouts"}>
                      <button className="back-desc mx-auto">
                        <img src="img/back_2.png" alt="Back" width="40" />
                      </button>
                    </Link>
                    <h1 className="text-center mx-auto">{title}</h1>
                  </div>
                  <div className="row">
                    <div className="col-10 mx-auto col-md-6">
                      <embed width="400" src="pdf/a.pdf" height="500px" />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                      <h3>Author: {author}</h3>
                      <h6 className="text-title text-uppercase text-muted mt-3 mb-2">
                        <span className="text-uppercase">{catagory}</span>
                      </h6>
                      <h4>
                        <strong>
                          price: <span>$</span>
                          {price}
                        </strong>
                      </h4>
                      <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        Description
                      </p>
                      <p className="text-muted lead">{info}</p>
                      <div>
                        <button
                          className="btn-desc-addtocart"
                          disabled={inCart ? true : false}
                          onClick={() => value.addToCart(id)}
                        >
                          {inCart ? (
                            <img
                              src="img/incart.png"
                              alt="Add to Cart"
                              width="40"
                            />
                          ) : (
                            <img
                              src="img/Addtocart.png"
                              alt="Add to Cart"
                              width="40"
                            />
                          )}
                          <span className="span-desc">
                            {inCart ? "In Cart" : "Add to Cart"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </ProductConsumer>
        </section>
      </main>
    );
  }
}

export default Details;
