import React, { Component } from "react";
import Handout from "./Handout";

class Handouts extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="presentation-2 ">
          <div className="handouts ">
          <h5>Departments</h5>
          <div className="handouts-container ">
          <Handout dept="Information System" courselen="5"/>
          <Handout dept="Computer Science" courselen="6"/>
          <Handout dept="Software Engineering" courselen="6"/>
          </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Handouts;
