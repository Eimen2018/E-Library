import React from 'react';

export default function EmptyCart(){
    return(
        <div className="container my-auto">
            <div className="row">
                <div className="col-10 mx-auto text-center text-capitalize">
                    <img src="img/empty.png" alt="Empty Cart" className="w-75"/>
                </div>
                <div className="col-10 mx-auto text-center">
                    <h1 className="Empty-cart">Your Cart is Currently Empty</h1>
                </div>
            </div>
        </div>
    );
}