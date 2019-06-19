import React, { Component } from 'react';

class Handout extends Component {
    state = {  }
    render() { 
        return ( 
        <div class="books-container">
            <div class="book">
                <img src="" alt="Handout" />
                <h4>Title</h4>
                <button>More</button>
                <button><img src="cart" alt="add to cart"/></button>
            </div>
        </div>
         );
    }
}
 
export default Handout;