import React, { Component } from "react";
import Catagory from "./Catagory";

class Books extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="presentation-2">
          <Catagory title="Educational" />
          <Catagory title="Programming" />
          <Catagory title="Fiction" />
        </section>
      </main>
    );
  }
}

export default Books;


