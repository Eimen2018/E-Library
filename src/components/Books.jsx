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

//componentDidMount(){
//   axios
//   .post("http://localhost:80/E-commerce-Back-End/index.php", {
//     data: {
//       name: "jessie",
//       time: "12:00",
//       food: "milk",
//       nutrition: "vitaminA"
//     }
//   })
//   .then(response => {
//     // console.log(response);
//     // console.log(response.data);
//     this.filter = response.data;
//     this.setState({
//       data:response.data
//     });

//     console.log(this.state.data.data.name);
//   })
//   .catch(e => {
//     // this.errors.push(e);
//   });
// }
