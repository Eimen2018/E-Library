import React, { Component } from "react";

class Handout extends Component {
  state = {
    width:100,
  };

  DisplayHandouts = (e) =>{
    this.ResetHandouts();
    document.getElementById(this.props.dept+"close").style.visibility="visible";
    document.getElementById(this.props.dept).style.width=this.state.width+"rem";
    document.getElementById(this.props.dept).style.transition="all 1s linear";
    document.getElementById(this.props.dept).style.boxShadow="3px 3px 3px #333";

  }

  

  ResetHandouts = (e) =>{
    var dept = ["Information System","Software Engineering","Computer Science"];
    for(var i = 0;i<dept.length;i++){
      document.getElementById(dept[i]+"close").style.visibility="hidden";
      document.getElementById(dept[i]).style.width="300px";
      document.getElementById(dept[i]).style.boxShadow="none";
    }
  }

  render() {
    return (
      <div class="handout-container"  id={this.props.dept} name="test" >
        <div class="handout">
          <img src="img/ISS.jpg" alt="Handout" width="300px" height="300px" />
          <h4>{this.props.dept}</h4>
          <button className="handout-btn" onClick={this.DisplayHandouts}>
           <span> {this.props.courselen}</span> Courses
          </button>
        </div>
        <div className="specific-handouts">
          <img src="img/thumb3.jpg" className="thumb" alt="Handout" widt="110" height="130"/>
          <img src="img/thumb3.jpg" className="thumb" alt="Handout" widt="110" height="130"/>
          <img src="img/thumb3.jpg" className="thumb" alt="Handout" widt="110" height="130"/>
          <img src="img/thumb3.jpg" className="thumb" alt="Handout" widt="110" height="130"/>
          <img src="img/thumb3.jpg" className="thumb" alt="Handout" widt="110" height="130"/>
        </div>
          <button className="handout-close" id={this.props.dept+"close"} onClick={this.ResetHandouts}><img src="img/close.png" alt="close" width="20" height="20"/></button>
      </div>
    );
  }
}

export default Handout;
