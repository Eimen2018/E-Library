import React, { Component } from "react";

class Landing extends Component {
  state = {};
  render() {
    return (
      <main>
        <section class="presentation">
          <div class="introduction">
            <div class="intro-text">
              <h1>Explore Beyond Your Academic Year</h1>
              <p>
                A Place Where You Can Find Every Book , Handout And Magazines
                For You To Learn And Enjoy At The Same Time!
              </p>
            </div>
            <div class="cta">
              <button class="cta-help">Explore</button>
              <button class="cta-add">Add To Cart</button>
            </div>
          </div>
          <div class="cover">
            <img src="img/book.png" alt="Productive" />
          </div>
        </section>
      </main>
    );
  }
}

export default Landing;
