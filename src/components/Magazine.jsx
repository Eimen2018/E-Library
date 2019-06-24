import React, { Component } from "react";
class Magazine extends Component {
  state = {};
  render() {
    return (
      <div className="coming-soon">
        <div className="coming-soon-img">
          <img src="img/under_construction.png" alt="" />
        </div>
        <div className="magazine-text">
          <h1>Under Construction</h1>
          <h3>Coming Soon...</h3>
        </div>
      </div>
    );
  }
}

export default Magazine;
