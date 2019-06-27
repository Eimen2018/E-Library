import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Landing extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="presentation">
          <div className="introduction">
            <div className="intro-text">
              <h1>Explore Beyond Your Academic Year</h1>
              <p>
                A Place Where You Can Find Every Book , Handout And Magazines
                For You To Learn And Enjoy At The Same Time!
              </p>
            </div>
            <div className="cta">
              <Link to="/Books"><button className="cta-help">Explore</button></Link>
              <button
                className="cta-add"
                data-toggle="modal"
                data-target="#myModal2"
              >
                See Cart
              </button>
            </div>
          </div>
          <div className="cover">
            <img src="img/book.png" alt="Productive" />
          </div>
        </section>
      </main>
    );
  }
}

export default Landing;
