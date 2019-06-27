import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

class Handout extends Component {
  state = {
    width: 100
  };

  DisplayHandouts = e => {
    this.ResetHandouts();
    document.getElementById(this.props.dept + "close").style.visibility =
      "visible";
    document.getElementById(this.props.dept + "index").style.zIndex = "2";
    document.getElementById(this.props.dept).style.width =
      this.state.width + "rem";
    document.getElementById(this.props.dept).style.transition = "all 1s linear";
    document.getElementById(this.props.dept).style.boxShadow =
      "5px 5px 5px rgb(170, 168, 168)";
  };

  ResetHandouts = e => {
    var dept = [
      "Information System",
      "Software Engineering",
      "Computer Science"
    ];
    for (var i = 0; i < dept.length; i++) {
      document.getElementById(dept[i] + "index").style.zIndex = "-100";
      document.getElementById(dept[i] + "close").style.visibility = "hidden";
      document.getElementById(dept[i]).style.width = "300px";
      document.getElementById(dept[i]).style.boxShadow = "none";
    }
  };

  render() {
    return (
      <div className="handout-container" id={this.props.dept} name="test">
        <div className="handout">
          <img src={"img/"+this.props.dept+".jpg"} alt="Handout" width="300px" height="300px" />
          <h4>{this.props.dept}</h4>
          <button className="handout-btn" onClick={this.DisplayHandouts}>
            <span> {this.props.courselen}</span> Courses
          </button>
        </div>
        <div className="specific-handouts" id={this.props.dept + "index"}>
          <ProductConsumer>
            {value => {
              let tempproduct = [...value.products];
              tempproduct = tempproduct.filter(
                item =>
                  item.catagory === this.props.dept && item.type === "Handout"
              );
              return tempproduct.map(product => {
                return (
                  <Link to="/Details" key={product.id}>
                    <img
                      src={product.img}
                      className="thumb"
                      alt="Handout"
                      widt="110"
                      height="130"
                      onClick={() => {
                        value.handleDetail(product.id);
                      }}
                    />
                  </Link>
                );
              });
            }}
          </ProductConsumer>
        </div>
        <button
          className="handout-close"
          id={this.props.dept + "close"}
          onClick={this.ResetHandouts}
        >
          <img src="img/close.png" alt="close" width="20" height="20" />
        </button>
      </div>
    );
  }
}

export default Handout;
