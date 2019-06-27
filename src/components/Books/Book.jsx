import React, { Component } from "react";
import { BookContainerStyle } from "./Book_container_Style";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

class Book extends Component {
  state = {
    data: {}
  };

  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <BookContainerStyle className="ml-5 mr-1 length">
        <ProductConsumer>
          {
            value=>(

          <div className="book" onClick={()=>
            value.handleDetail(id)
          }>
            <Link to="/Details">
              <img
                className="book-img"
                src={img}
                alt="Book"
                width="140"
                height="200"
              />
            </Link>
            <div className="info ">
              <h5>{title.length<16?title.substring(0,13)+"....":title}</h5>
              <button className="more ml-1 mr-5" disabled>${price}.00</button>
              <button
                className="Addtocart-btn ml-2"
                disabled={inCart ? true : false}
                onClick={()=>value.addToCart(id)}
              >
                {inCart ? (
                  <img
                    src="img/incart.png"
                    alt="add to cart"
                    width="30"
                    height="30"
                  />
                ) : (
                  <img
                    src="img/Addtocart.png"
                    alt="add to cart"
                    width="30"
                    height="30"
                  />
                )}
              </button>
            </div>
          </div>
            )
          }
      </ProductConsumer>
        </BookContainerStyle>
    );
  }
}

export default Book;
