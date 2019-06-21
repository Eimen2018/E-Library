import React, { Component } from "react";
import Magazine from "./Magazine";

class Magazines extends Component {
  state = {};
  render() {
    return (
      <main>
        <section class="presentation">
          <Magazine />
        </section>
      </main>
    );
  }
}

export default Magazines;
