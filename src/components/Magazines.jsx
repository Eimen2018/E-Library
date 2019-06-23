import React, { Component } from "react";
import Magazine from "./Magazine";

class Magazines extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="presentation">
          <Magazine />
        </section>
      </main>
    );
  }
}

export default Magazines;
