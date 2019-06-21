import React, { Component } from "react";
import {BookContainerStyle} from './Book_container_Style';

class Book extends Component {
  state = {};

  render() {
    return (
      <BookContainerStyle className="ml-5 mr-1">
        <div class="book">
          <img className="book-img" src="img/Book_1.jpg" alt="Book" width="140" height="200" />
          <div className="info ">
          <h5>The Queen of Hearts</h5>
          <button className="more ml-1 mr-5">More</button>
          <button className="Addtocart-btn ml-2">
            <img src="img/Addtocart.png" alt="add to cart" width="30" height="30" />
          </button>
          </div>
        </div>
      </BookContainerStyle>
    );
  }
}



export default Book;
