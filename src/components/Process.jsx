import React, { Component } from "react";
import { Link } from "react-router-dom";

class Process extends Component {
  state = {
    payment: false
  };
  componentDidMount() {
    var val = setInterval(() => {
      document.getElementById("process").value += "|";
    }, 50);
    setTimeout(() => {
      this.download();
      clearInterval(val);
      this.setState(() => {
        return {
          payment: !this.state.payment
        };
      });
    }, 5700);
  }
  download() {
    // fake server request, getting the file url as response
    setTimeout(() => {
      const response = {
        file: "/pdf/a.pdf"
      };
      // server sent the url to the file!
      // now, let's download:
      // window.location.href = response.file;
      // this.context.router.push('/');
      // you could also do:
      window.open(response.file);
    }, 100);
  }
  render() {
    return (
      <main>
        <section className="presentation-2">
          <div className="container  mt-5">
            <div className="row mt-5 justify-content-center">
              <div className="col-10">
                {this.state.payment ? (
                  <img
                    src="img/success-1.png"
                    alt="Done Payment"
                    className="w-50"
                  />
                ) : (
                  <h3 className="text-center text-process">Processing</h3>
                )}
              </div>
            </div>
            <div className="row mt-5 justify-content-center ml-5">
              <div className="col-10 ml-5">
                {this.state.payment ? (
                  <div className="float-right">
                    <h3 className="success">Payment Successful</h3>
                    <Link to="/">
                      <button className="btn btn-outline-secondary">
                        Go to Home
                      </button>
                    </Link>
                  </div>
                ) : (
                  <input
                    type="text"
                    className="w-75 process-input ml-5"
                    id="process"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Process;
