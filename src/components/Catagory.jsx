import React, { Component } from "react";
import Book from "./Book";
import style from "styled-components";

class Catagory extends Component {
  state = {
    length: 5,
    Next:-70,
    Back:0
  };

  NextSlide =(e)=>{
    document.getElementById(this.props.title).style.marginLeft=this.state.Next+"px";
    if (this.state.Next>-490) {
      this.setState({
        Next:this.state.Next-70
      });
    }
  }
  BackSlide = (e) =>{
    if(this.state.Back<0){
      this.setState({
        Back:this.state.Back+70
      });
    }
    document.getElementById(this.props.title).style.marginLeft=this.state.Back+"px";
  }

  render() {
    return (
      <div className="catagory">
        <h5>{this.props.title}</h5>
        <div className="catagory-info">
          <Button className="backarrow" onClick={this.BackSlide}>
            <img src="img/Backarrow.png" alt="Back" />
          </Button>
          <div className="slide" id={this.props.title}>
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          </div>
          <Button className="nextarrow" id="nextarrow" onClick={this.NextSlide}>
            <img src="img/Nextarrow.png" alt="Back" />
          </Button>
        </div>
      </div>
    );
  }
}
const Button = style.button`
position:absolute;
// top:50%;
background:white;
height:50vh;
outline:none;
border:none;
z-index:1;
`;

export default Catagory;
