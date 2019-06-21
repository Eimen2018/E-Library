import React, { Component } from "react";
import Handout from "./Handout";

class Handouts extends Component {
  state = {};
  render() {
    return (
      <main>
        <section class="presentation-2 ">
          <div className="handouts ">
          <h5>Departments</h5>
          <div className="handouts-container ">
          <Handout dept="Information System" courselen="7"/>
          <Handout dept="Computer Science" courselen="5"/>
          <Handout dept="Software Engineering" courselen="6"/>
          </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Handouts;
