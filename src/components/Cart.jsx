import React, { Component } from "react";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div
        class="modal right fade"
        id="myModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <div className="modal-cart row">
				  <img src="img/BigCart_3.png" alt="Cart" width="60" height="60" />
                <h4 class="modal-title" id="myModalLabel2">
                  Cart items
                </h4>
              </div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <p />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
